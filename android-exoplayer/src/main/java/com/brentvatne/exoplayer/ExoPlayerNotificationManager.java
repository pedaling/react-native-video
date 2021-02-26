package com.brentvatne.exoplayer;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.os.AsyncTask;
import android.os.Build;
import android.R;
import android.util.Log;

import androidx.annotation.Nullable;

import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.SimpleExoPlayer;
import com.google.android.exoplayer2.ui.PlayerNotificationManager;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class ExoPlayerNotificationManager {
  private String title;
  private String artist;
  private Bitmap artwork;

  private Context context;
  private PlayerNotificationManager playerNotificationManager;

  public Bitmap loadImageFromURL(String url, String name) {
    try {
      AsyncTask<String, Void, Bitmap> asyncTask = new AsyncTask<String, Void, Bitmap>() {
        @Override
        protected Bitmap doInBackground(String... params) {
          try {
            BitmapFactory.Options justDecodeBoundOption = new BitmapFactory.Options();
            justDecodeBoundOption.inJustDecodeBounds = true;
            BitmapFactory.decodeStream((InputStream) new URL(params[0]).getContent(), null, justDecodeBoundOption);

            final int width = justDecodeBoundOption.outWidth;
            final int height = justDecodeBoundOption.outHeight;
            final int reqWidth = context.getResources()
                    .getDimensionPixelSize(android.R.dimen.notification_large_icon_width);
            final int reqHeight = context.getResources()
                    .getDimensionPixelSize(android.R.dimen.notification_large_icon_height);

            int inSampleSize = 1;

            if (width > reqWidth || height > reqHeight) {
              if (width > height) {
                inSampleSize = Math.round((float) height / (float) reqHeight);
              } else {
                inSampleSize = Math.round((float) width / (float) reqWidth);
              }
            }

            BitmapFactory.Options sampleSizeOption = new BitmapFactory.Options();
            sampleSizeOption.inSampleSize = inSampleSize;

            InputStream is = (InputStream) new URL(params[0]).getContent();
            return BitmapFactory.decodeStream(is, null, sampleSizeOption);
          } catch (IOException e) {
            e.printStackTrace();
          } catch (ClassCastException e) {
            // 이미지가 gif인 경우에 ClassCastException이 난다
            e.printStackTrace();
          }
          return null;
        }
      };
      return asyncTask.execute(url, name).get();
    } catch (Exception e) {
      e.printStackTrace();
      return null;
    }
  }

  public ExoPlayerNotificationManager(Context context, String title, String artist, String channelName, String artwork) {
    NotificationManager notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);

    final String CHANNEL_ID = "@class101/player_controller";
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      NotificationChannel mChannel = new NotificationChannel(
              CHANNEL_ID,
              channelName,
              NotificationManager.IMPORTANCE_LOW
      );
      notificationManager.createNotificationChannel(mChannel);
    }

    this.context = context;

    this.title = title;
    this.artist = artist;
    this.artwork = artwork != null ? loadImageFromURL(artwork, "artwork") : null;

    this.playerNotificationManager = new PlayerNotificationManager(
            context,
            CHANNEL_ID,
            0,
            new DescriptionAdapter()
    );
  }

  public void setPlayer(SimpleExoPlayer player) {
    this.playerNotificationManager.setPlayer(player);
  }

  private class DescriptionAdapter implements PlayerNotificationManager.MediaDescriptionAdapter {
    @Override
    public String getCurrentContentTitle(Player player) {
      return title;
    }

    @Nullable
    @Override
    public String getCurrentContentText(Player player) {
      return artist;
    }

    @Nullable
    @Override
    public PendingIntent createCurrentContentIntent(Player player) {
      return null;
    }

    @Nullable
    @Override
    public Bitmap getCurrentLargeIcon(Player player, PlayerNotificationManager.BitmapCallback callback) {
      return artwork;
    }
  }
}
