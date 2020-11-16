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
  private String title;
  private String artist;
  private PlayerNotificationManager playerNotificationManager;

  public ExoPlayerNotificationManager(Context context, String title, String artist, String channelName) {
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

    this.title = title;
    this.artist = artist;
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
      return null;
    }
  }
}
