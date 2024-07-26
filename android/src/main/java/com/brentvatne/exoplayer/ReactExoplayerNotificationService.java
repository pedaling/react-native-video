package com.brentvatne.exoplayer;

import android.annotation.SuppressLint;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.media.session.PlaybackState;
import android.os.Build;
import android.os.IBinder;
import android.support.v4.media.MediaMetadataCompat;
import android.support.v4.media.session.MediaControllerCompat;
import android.support.v4.media.session.MediaSessionCompat;
import android.support.v4.media.session.PlaybackStateCompat;
import android.util.Log;

import androidx.annotation.Nullable;
import androidx.core.app.NotificationCompat;

import com.brentvatne.react.R;

@SuppressLint("LongLogTag")
public class ReactExoplayerNotificationService extends Service {
    private static final String TAG = "ReactExoplayerNotificationService";

    private static final String CHANNEL_ID = "@class101/player_controller";
    private static final int NOTIFICATION_ID = 1;

    public static final String ACTION_PLAY = "com.brentvatne.exoplayer.play";
    public static final String ACTION_PAUSE = "com.brentvatne.exoplayer.pause";
    public static final String ACTION_REWIND = "com.brentvatne.exoplayer.rewind";
    public static final String ACTION_FAST_FORWARD = "com.brentvatne.exoplayer.fastforward";
    public static final String ACTION_NEXT = "com.brentvatne.exoplayer.next";
    public static final String ACTION_PREVIOUS = "com.brentvatne.exoplayer.previous";

    public static final String DATA_KEY_CHANNEL_NAME = "channelName";

    public static final String DATA_KEY_ENABLE_PREV_NEXT_BUTTON = "enablePrevNextButton";
    public static final String DATA_KEY_SESSION_TOKEN = "sessionToken";
    public static final String DATA_KEY_TITLE = "title";
    public static final String DATA_KEY_CONTENT_TEXT = "contentText";
    public static final String DATA_KEY_ARTWORK_BITMAP = "artworkBitmap";


    private boolean isPaused = true;

    private String channelName;
    private MediaSessionCompat.Token sessionToken;
    private String title;
    private String contentText;
    private Bitmap artworkBitmap;

    private MediaControllerCompat controller;
    private MediaControllerCallback controllerCallback;

    private boolean enablePrevNextButton = true;

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        createDefaultNotificationChannel();
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        String channelName = null;
        MediaSessionCompat.Token sessionToken = null;
        String title = null;
        String contentText = null;
        Bitmap artworkBitmap = null;

        if (intent != null) {
            channelName = intent.getStringExtra(DATA_KEY_CHANNEL_NAME);
            sessionToken = intent.getParcelableExtra(DATA_KEY_SESSION_TOKEN);
            title = intent.getStringExtra(DATA_KEY_TITLE);
            contentText = intent.getStringExtra(DATA_KEY_CONTENT_TEXT);
            artworkBitmap = (Bitmap) intent.getParcelableExtra(DATA_KEY_ARTWORK_BITMAP);
            this.enablePrevNextButton = intent.getBooleanExtra(DATA_KEY_ENABLE_PREV_NEXT_BUTTON, true);
        }

        if (channelName != null && !channelName.equals(this.channelName)) {
            this.channelName = channelName;
            createDefaultNotificationChannel();
        }

        if (sessionToken != this.sessionToken) {
            this.sessionToken = sessionToken;

            if (controller != null && controllerCallback != null) {
                controller.unregisterCallback(controllerCallback);
                controller = null;
                controllerCallback = null;
            }

            if (sessionToken != null) {
                controller = new MediaControllerCompat(this, sessionToken);
                controllerCallback = new MediaControllerCallback();
                controller.registerCallback(controllerCallback);
            }
        }

        if(title != null && !title.equals(this.title)){
            this.title = title;
        }

        if(contentText != null && !contentText.equals(this.contentText)){
            this.contentText = contentText;
        }

        if(artworkBitmap != null && artworkBitmap != this.artworkBitmap){
            this.artworkBitmap = artworkBitmap;
        }

        startForegroundService();

        return Service.START_NOT_STICKY;
    }

    private void startForegroundService() {
        Notification notification = createNotification();
        Notification notificationNotNull =
                notification != null ? notification : createEmptyNotification();

        try {
            startForeground(NOTIFICATION_ID, notificationNotNull);
        } catch (Exception exception) {
            Log.w(TAG, "startForegroundService", exception);
        }
    }

    private void updateNotification() {
        NotificationManager notificationManager =
                (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
        Notification notification = createNotification();

        if (notification == null) {
            stopSelf();
            return;
        }

        notificationManager.notify(NOTIFICATION_ID, notification);
    }

    @Override
    public void onTaskRemoved(Intent rootIntent) {
        super.onTaskRemoved(rootIntent);
        stopSelf();
    }

    @Override
    public void onDestroy() {
        NotificationManager notificationManager =
                (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            notificationManager.deleteNotificationChannel(CHANNEL_ID);
        }
        notificationManager.cancel(NOTIFICATION_ID);

        stopForeground(true);

        super.onDestroy();
    }

    private void createDefaultNotificationChannel() {
        // Create the NotificationChannel, but only on API 26+ because
        // the NotificationChannel class is new and not in the support library
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
            return;
        }

        NotificationManager notificationManager =
                (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);

        NotificationChannel channel = new NotificationChannel(
                CHANNEL_ID,
                channelName != null ? channelName : CHANNEL_ID,
                NotificationManager.IMPORTANCE_DEFAULT);
        channel.setDescription(CHANNEL_ID);
        channel.setSound(null, null);

        // Register the channel with the system; you can't change the importance
        // or other notification behaviors after this
        notificationManager.createNotificationChannel(channel);
    }

    private Notification createEmptyNotification() {
        Intent mainActivityIntent = getPackageManager().getLaunchIntentForPackage(getPackageName());
        PendingIntent contentPendingIntent = PendingIntent.getActivity(
                this, 0, mainActivityIntent, PendingIntent.FLAG_MUTABLE);

        NotificationCompat.Builder notificationBuilder =
                new NotificationCompat.Builder(this, CHANNEL_ID)
                        .setVisibility(NotificationCompat.VISIBILITY_SECRET)
                        .setSmallIcon(getApplicationInfo().icon)
                        .setContentIntent(contentPendingIntent);

        return notificationBuilder.build();
    }

    private Notification createNotification() {
        if (sessionToken == null) {
            return null;
        }

        Intent mainActivityIntent = getPackageManager().getLaunchIntentForPackage(getPackageName());
        PendingIntent contentPendingIntent = PendingIntent.getActivity(
                this, 0, mainActivityIntent, PendingIntent.FLAG_MUTABLE);

        NotificationCompat.Builder notificationBuilder =
                new NotificationCompat.Builder(this, CHANNEL_ID)
                        // Show controls on lock screen even when user hides sensitive content.
                        .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
                        .setSmallIcon(getApplicationInfo().icon)
                        .setContentIntent(contentPendingIntent)
                        .setContentTitle(title)
                        .setContentText(contentText)
                        .setLargeIcon(artworkBitmap);

        Intent playIntent = new Intent(ACTION_PLAY).setPackage(getPackageName());
        PendingIntent playPendingIntent = PendingIntent.getBroadcast(
                this, 0, playIntent, PendingIntent.FLAG_MUTABLE);
        NotificationCompat.Action playAction = new NotificationCompat.Action(
                R.drawable.exo_notification_play,
                getString(R.string.exo_controls_play_description),
                playPendingIntent);

        Intent pauseIntent = new Intent(ACTION_PAUSE).setPackage(getPackageName());
        PendingIntent pausePendingIntent = PendingIntent.getBroadcast(
                this, 0, pauseIntent, PendingIntent.FLAG_MUTABLE);
        NotificationCompat.Action pauseAction = new NotificationCompat.Action(
                R.drawable.exo_notification_pause,
                getString(R.string.exo_controls_pause_description),
                pausePendingIntent);

        Intent previousIntent = new Intent(ACTION_PREVIOUS).setPackage(getPackageName());
        PendingIntent previousPendingIntent = PendingIntent.getBroadcast(
                this, 0, previousIntent, PendingIntent.FLAG_MUTABLE);
        NotificationCompat.Action previousAction = new NotificationCompat.Action(
                R.drawable.exo_notification_previous,
                getString(R.string.exo_controls_previous_description),
                previousPendingIntent);

        Intent nextIntent = new Intent(ACTION_NEXT).setPackage(getPackageName());
        PendingIntent nextPendingIntent = PendingIntent.getBroadcast(
                this, 0, nextIntent, PendingIntent.FLAG_MUTABLE);
        NotificationCompat.Action nextAction = new NotificationCompat.Action(
                R.drawable.exo_notification_next,
                getString(R.string.exo_controls_next_description),
                nextPendingIntent);

        if(enablePrevNextButton){
            notificationBuilder = notificationBuilder.addAction(previousAction);
        }

        notificationBuilder = notificationBuilder.addAction(isPaused ? playAction : pauseAction);

        if(enablePrevNextButton){
            notificationBuilder = notificationBuilder
                .addAction(nextAction)
                .setStyle(new androidx.media.app.NotificationCompat.MediaStyle()
                    .setShowActionsInCompactView(0, 1, 2)
                    .setMediaSession(sessionToken))
                .setOngoing(true);
        }else{
            notificationBuilder = notificationBuilder
                .setStyle(new androidx.media.app.NotificationCompat.MediaStyle()
                    .setShowActionsInCompactView(0)
                    .setMediaSession(sessionToken))
                .setOngoing(true);
        }

        return notificationBuilder.build();
    }

    private final class MediaControllerCallback extends MediaControllerCompat.Callback {
        @Override
        public void onMetadataChanged(MediaMetadataCompat metadata) {
            super.onMetadataChanged(metadata);

            if (metadata == null) {
                sessionToken = null;
            }
            updateNotification();
        }

        @Override
        public void onPlaybackStateChanged(PlaybackStateCompat state) {
            super.onPlaybackStateChanged(state);

            PlaybackState playbackState = (PlaybackState) state.getPlaybackState();
            boolean isPaused = true;

            if (playbackState != null) {
                switch (playbackState.getState()) {
                    case PlaybackState.STATE_FAST_FORWARDING:
                    case PlaybackState.STATE_REWINDING:
                    case PlaybackState.STATE_SKIPPING_TO_PREVIOUS:
                    case PlaybackState.STATE_SKIPPING_TO_NEXT:
                    case PlaybackState.STATE_SKIPPING_TO_QUEUE_ITEM:
                    case PlaybackState.STATE_BUFFERING:
                    case PlaybackState.STATE_CONNECTING:
                    case PlaybackState.STATE_PLAYING:
                        isPaused = false;
                }
            }

            if (ReactExoplayerNotificationService.this.isPaused != isPaused) {
                ReactExoplayerNotificationService.this.isPaused = isPaused;
                updateNotification();
            }
        }

        @Override
        public void onSessionDestroyed() {
            super.onSessionDestroyed();

            sessionToken = null;
            updateNotification();
        }
    }
}
