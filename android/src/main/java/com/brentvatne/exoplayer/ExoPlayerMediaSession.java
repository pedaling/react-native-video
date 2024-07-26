package com.brentvatne.exoplayer;

import com.google.android.exoplayer2.Player;

import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.media.MediaMetadata;
import android.os.Build;

import android.support.v4.media.MediaMetadataCompat;
import android.support.v4.media.session.MediaSessionCompat;
import android.os.AsyncTask;
import android.util.Log;

import java.io.InputStream;
import java.io.IOException;
import java.net.URL;

import com.brentvatne.react.R;

class ExoPlayerMediaSession extends MediaSessionCompat {
  private static final String TAG = "ExoPlayerMediaSession";

  private static final String CHANNEL_ID = "@class101/player_controller";

  private ThumbnailImageLoadTask imageTask;
  private Context context;

  private String notificationChannelName;
  private String title;
  private String artist;
  private String artwork;
  private Long duration;
  private Bitmap artworkBitmap;
  private boolean enableBackForwardButton;

  public void initialize(Player player) {
    this.duration = player.getDuration();
    setActive(true);
    updateNotification();
  }

  public ExoPlayerMediaSession(Context context) {
    super(context, TAG);
    this.context = context;
  }

  public void updateNotification() {
        Intent notificationIntent = new Intent(context, ReactExoplayerNotificationService.class);

        notificationIntent.putExtra(
                ReactExoplayerNotificationService.DATA_KEY_CHANNEL_NAME,
                notificationChannelName);

        notificationIntent.putExtra(
                ReactExoplayerNotificationService.DATA_KEY_SESSION_TOKEN,
                getSessionToken());

        notificationIntent.putExtra(
            ReactExoplayerNotificationService.DATA_KEY_TITLE,
            title
        );

        notificationIntent.putExtra(
            ReactExoplayerNotificationService.DATA_KEY_CONTENT_TEXT,
            artist
        );

        notificationIntent.putExtra(
            ReactExoplayerNotificationService.DATA_KEY_ARTWORK_BITMAP,
            artworkBitmap
        );

        notificationIntent.putExtra(
            ReactExoplayerNotificationService.DATA_KEY_ENABLE_PREV_NEXT_BUTTON,
            enableBackForwardButton
        );

        if (!notificationIntent.hasExtra(ReactExoplayerNotificationService.DATA_KEY_SESSION_TOKEN)) {
            return;
        }
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                context.startForegroundService(notificationIntent);
            } else {
                context.startService(notificationIntent);
            }
        } catch (Exception ignore) {
            // ignore
        }
    }

  private class ThumbnailImageLoadTask extends AsyncTask<Bitmap, Void, Bitmap> {


        @Override
        protected Bitmap doInBackground(Bitmap... params) {
            Bitmap imgBitmap = null;

            try {
                BitmapFactory.Options justDecodeBoundOption = new BitmapFactory.Options();
                justDecodeBoundOption.inJustDecodeBounds = true;
                BitmapFactory.decodeStream((InputStream) new URL(artwork).getContent(), null, justDecodeBoundOption);

                final int width = justDecodeBoundOption.outWidth;
                final int height = justDecodeBoundOption.outHeight;
                final int reqWidth = context.getResources()
                        .getDimensionPixelSize(R.dimen.notification_large_icon_width);
                final int reqHeight = context.getResources()
                        .getDimensionPixelSize(R.dimen.notification_large_icon_height);

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

                InputStream is = (InputStream) new URL(artwork).getContent();
                Bitmap sampledSrc = BitmapFactory.decodeStream(is, null, sampleSizeOption);

                if (sampledSrc == null) {
                    return null;
                }

                final int sampledSrcWidth = sampledSrc.getWidth();
                final int sampledSrcHeight = sampledSrc.getHeight();

                int size;
                int x = 0;
                int y = 0;

                if (sampledSrcWidth > sampledSrcHeight) {
                    size = sampledSrcHeight;
                    x = (sampledSrcWidth - size) / 2;
                } else {
                    size = sampledSrcWidth;
                    y = (sampledSrcHeight - size) / 2;
                }
                imgBitmap = Bitmap.createBitmap(sampledSrc, x, y, size, size);
                sampledSrc = null;

            } catch (IOException e) {
                e.printStackTrace();
                return null;
            } catch (ClassCastException e) {
                // 이미지가 gif인 경우에 ClassCastException이 난다
                e.printStackTrace();
                return null;
            }

            return imgBitmap;
        }


        @Override
        protected void onPostExecute(Bitmap bit) {
            super.onPostExecute(bit);
            artworkBitmap = bit;

            if (artworkBitmap != null) {
                setMetadata(
                new MediaMetadataCompat.Builder()

                    // Title.
                    .putString(MediaMetadata.METADATA_KEY_TITLE, title)

                    // Artist.
                    // Could also be the channel name or TV series.
                    .putString(MediaMetadata.METADATA_KEY_ARTIST, artist)

                    // Album art.
                    // Could also be a screenshot or hero image for video content
                    // The URI scheme needs to be "content", "file", or "android.resource".
                    .putBitmap(MediaMetadata.METADATA_KEY_ALBUM_ART, artworkBitmap)

                    // Duration.
                    // If duration isn't set, such as for live broadcasts, then the progress
                    // indicator won't be shown on the seekbar.
                    .putLong(MediaMetadata.METADATA_KEY_DURATION, duration)

                    .build()
                );

                updateNotification();
            }

            artworkBitmap = null;
        }
    }


    public void setMediaInfo(Context context, String title, String artist, String channelName, String artwork) {
        this.context = context;
        this.notificationChannelName = channelName;
        this.title = title;
        this.artist = artist;
        this.artwork = artwork;

        if (imageTask != null && imageTask.getStatus() == AsyncTask.Status.RUNNING) {
            imageTask.cancel(true);
        }
        imageTask = new ThumbnailImageLoadTask();
        imageTask.execute();

        try {
            updateNotification();
        } catch (Exception ignore) {
            // ignore
        }

    }

    public void setEnableBackForwardButton(boolean enableBackForwardButton) {
      this.enableBackForwardButton = enableBackForwardButton;

        try {
            updateNotification();
        } catch (Exception ignore) {

        }
    }

    public void clearMediaInfo() {
        setMetadata(null);
        setActive(false);
        release();
    }

    @Override
    public void release() {
        super.release();
    }
    @Override
    public void setActive(boolean active) {
        super.setActive(active);
    }
    @Override
    public void setMetadata(MediaMetadataCompat metadata) {
        super.setMetadata(metadata);
    }
    @Override
    public MediaSessionCompat.Token getSessionToken() {
        return super.getSessionToken();
    }
}
