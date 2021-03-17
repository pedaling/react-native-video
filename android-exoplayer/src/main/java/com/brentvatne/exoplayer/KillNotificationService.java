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
  @Nullable
  @Override
  public IBinder onBind(Intent intent) {
    return null;
  }

  @Override
  public int onStartCommand(Intent intent, int flags, int startId) {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      final String channelName = intent.getStringExtra("channelName");

      NotificationManager notificationManager =
        (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
      NotificationChannel channel =
        notificationManager.getNotificationChannel(ExoPlayerNotificationManager.CHANNEL_ID);

      if (channel == null) {
        channel = new NotificationChannel(
          ExoPlayerNotificationManager.CHANNEL_ID,
          channelName,
          NotificationManager.IMPORTANCE_LOW
        );
        notificationManager.createNotificationChannel(channel);
      }

      Notification notification =
        new NotificationCompat.Builder(this, ExoPlayerNotificationManager.CHANNEL_ID).build();
      startForeground(1, notification);
    }

    return super.onStartCommand(intent, flags, startId);
  }

  @Override
  public void onDestroy() {
    super.onDestroy();

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      stopForeground(true);
    }
  }

  @Override
  public void onTaskRemoved(Intent rootIntent) {
    NotificationManager notificationManager =
      (NotificationManager) getSystemService(NOTIFICATION_SERVICE);

    notificationManager.cancel(ExoPlayerNotificationManager.NOTIFICATION_ID);
  }
}
