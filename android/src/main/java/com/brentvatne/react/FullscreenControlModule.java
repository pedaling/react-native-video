package com.brentvatne.react;

import android.app.Activity;

import androidx.annotation.NonNull;

import com.brentvatne.exoplayer.ExoplayerFullscreenActivity;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class FullscreenControlModule extends ReactContextBaseJavaModule
{
  ReactApplicationContext reactApplicationContext;

  public FullscreenControlModule(ReactApplicationContext reactContext) {
    super();
    this.reactApplicationContext = reactContext;
  }

  @NonNull
  @Override
  public String getName() {
    return "FullscreenControl";
  }

  @ReactMethod
  public void requestFullscreenClose() {
    Activity activity = reactApplicationContext.getCurrentActivity();

    if (activity == null) {
      return;
    }

    if (activity instanceof ExoplayerFullscreenActivity) {
      reactApplicationContext.runOnUiQueueThread(() -> {
        activity.finish();
      });
    }
  }
}
