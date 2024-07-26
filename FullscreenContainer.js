import { useContext, useEffect, useRef } from 'react';
import { AppRegistry, BackHandler, RootTagContext } from 'react-native';

export const fullscreenHandlers = {
  current: null,
};

const FullscreenContainer = () => {
  const rootTag = useContext(RootTagContext);
  const rootTagSent = useRef(false);

  if (!rootTagSent.current) {
    if (fullscreenHandlers.current) {
      fullscreenHandlers.current.enter(rootTag);
    }
    rootTagSent.current = true;
  }
  const backPressCalled = useRef(false);
  useEffect(
    () =>
      BackHandler.addEventListener('hardwareBackPress', () => {
        if (fullscreenHandlers.current) {
          if (backPressCalled.current) {
            return false;
          }
          backPressCalled.current = true;
          fullscreenHandlers.current.exit();
        }

        return true;
      }).remove,
    []
  );
  return null;
};

AppRegistry.registerComponent('RCTFullscreenContainer', () => FullscreenContainer);
