package com.brentvatne.exoplayer;

import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import android.util.Log;

import javax.annotation.Nullable;

public class ReactExoplayerBackgroundTask extends HeadlessJsTaskService {
  @Override
  protected @Nullable
  HeadlessJsTaskConfig getTaskConfig(Intent intent) {
      String type = intent.getStringExtra("type");
      WritableMap argumentMap = Arguments.createMap();
      if (type != null) {
          return new HeadlessJsTaskConfig(
              type,
              argumentMap,
              5000, // timeout for the task
              true // optional: defines whether or not the task is allowed in foreground. Default is false
          );
      }
      return null;
  }
}
