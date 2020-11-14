package com.brentvatne.exoplayer;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.graphics.Bitmap;
import android.os.Build;

import androidx.annotation.Nullable;

import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.SimpleExoPlayer;
import com.google.android.exoplayer2.ui.PlayerNotificationManager;

public class ExoPlayerNotificationManager {
  private Context context;
  private String title;
  private String artist;
  private PlayerNotificationManager playerNotificationManager;

  public ExoPlayerNotificationManager(Context context) {
    NotificationManager notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);

    final String CHANNEL_ID = "@class101/player_controller";
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      NotificationChannel mChannel = new NotificationChannel(
        CHANNEL_ID,
        "클래스101 영상 컨트롤러",
        NotificationManager.IMPORTANCE_LOW
      );
      notificationManager.createNotificationChannel(mChannel);
    }

    this.context = context;
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

  public void setMediaInfo(String title, String artist) {
    this.title = title;
    this.artist = artist;
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
      return null;
    }
  }
}
