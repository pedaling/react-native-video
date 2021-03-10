package com.brentvatne.exoplayer;

import android.app.NotificationManager;
import android.app.Service;
import android.content.Intent;
import android.os.IBinder;

import androidx.annotation.Nullable;

public class KillNotificationService extends Service {
  @Nullable
  @Override
  public IBinder onBind(Intent intent) {
    return null;
  }

  @Override
  public void onTaskRemoved(Intent rootIntent) {
    NotificationManager notificationManager =
      (NotificationManager) getSystemService(NOTIFICATION_SERVICE);

    notificationManager.cancel(ExoPlayerNotificationManager.NOTIFICATION_ID);
  }
}
