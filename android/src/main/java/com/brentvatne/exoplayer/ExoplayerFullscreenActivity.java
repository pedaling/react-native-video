package com.brentvatne.exoplayer;

import android.content.Intent;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.SurfaceView;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.FrameLayout;

import androidx.annotation.Nullable;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class ExoplayerFullscreenActivity extends ReactActivity {
  FrameLayout layout;
  public static boolean isActive = false;
  @Override
  protected String getMainComponentName() {
    return "RCTFullscreenContainer";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    ViewGroup.LayoutParams params = new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);

    isActive = true;
    ViewGroup viewGroup = (ViewGroup)getWindow().getDecorView();
    viewGroup.setBackgroundColor(Color.BLACK);

    layout = new FrameLayout(this);
    if (ExoPlayerView.globalExoPlayerView == null) {
      this.finish();
      return;
    }

    ExoPlayerView.globalExoPlayerView.attachFullscreenView(layout);

    viewGroup.addView(layout, 0, params);
    showFullscreen();
  }

  @Override
  public void finish() {
    Intent intent = new Intent("fullscreenClosed");
    sendBroadcast(intent);

    if (ExoPlayerView.globalExoPlayerView != null) {
      ExoPlayerView.globalExoPlayerView.detachFullscreenView();
    }

    isActive = false;
    super.finish();
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    ReactActivityDelegate delegate = new DefaultReactActivityDelegate(
      this,
      this.getMainComponentName(),
      DefaultNewArchitectureEntryPoint.getFabricEnabled(),
      DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled()
    ) {
      @Nullable
      @Override
      protected Bundle getLaunchOptions() {
        return ExoplayerFullscreenActivity.this.getIntent().getExtras();
      }
    };

    return delegate;
  }

  @Override
  public void onWindowFocusChanged(boolean hasFocus) {
    super.onWindowFocusChanged(hasFocus);
    if (hasFocus) {
      showFullscreen();
    }
  }


  private void showFullscreen() {
    com.facebook.react.bridge.UiThreadUtil.runOnUiThread(() -> {
      getWindow().getAttributes().layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
        WindowInsetsControllerCompat insetsController = new WindowInsetsControllerCompat(getWindow(), getWindow().getDecorView());
        insetsController.hide(WindowInsetsCompat.Type.statusBars() | WindowInsetsCompat.Type.navigationBars());
        insetsController.setSystemBarsBehavior(WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
      } else {
        View decorView = getWindow().getDecorView();
        decorView.setSystemUiVisibility(
          View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
            | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_FULLSCREEN);
      }
    });

  }
}
