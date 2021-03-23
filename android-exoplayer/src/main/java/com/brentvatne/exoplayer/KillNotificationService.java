package com.brentvatne.exoplayer;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.IBinder;

import androidx.annotation.Nullable;
import androidx.core.app.NotificationCompat;

public class KillNotificationService extends Service {
  public static final String CHANNEL_ID = "@class101/kill_player_controller";
  public static final String DEFAULT_CHANNEL_NAME = "클래스101 영상 컨트롤러";

  @Nullable
  @Override
  public IBinder onBind(Intent intent) {
    return null;
  }

  @Override
  public int onStartCommand(Intent intent, int flags, int startId) {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      final String channelName = intent != null ?
        intent.getStringExtra("channelName") : DEFAULT_CHANNEL_NAME;

      NotificationManager notificationManager =
        (NotificationManager) getSystemService(NOTIFICATION_SERVICE);
      NotificationChannel channel =
        notificationManager.getNotificationChannel(CHANNEL_ID);

      if (channel == null) {
        channel = new NotificationChannel(
          CHANNEL_ID,
          channelName,
          NotificationManager.IMPORTANCE_LOW
        );
        notificationManager.createNotificationChannel(channel);
      }

      Notification notification =
        new NotificationCompat.Builder(this, CHANNEL_ID).build();
      startForeground(1, notification);
    }

    return super.onStartCommand(intent, flags, startId);
  }

  @Override
  public void onDestroy() {
    super.onDestroy();

    killNotification();
  }

  @Override
  public void onTaskRemoved(Intent rootIntent) {
    super.onTaskRemoved(rootIntent);

    killNotification();
  }

  private void killNotification() {
    NotificationManager notificationManager =
      (NotificationManager) getSystemService(NOTIFICATION_SERVICE);

    notificationManager.cancel(ExoPlayerNotificationManager.NOTIFICATION_ID);

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      stopForeground(true);
    }
  }
}
