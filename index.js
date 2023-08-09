/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import TrackPlayer from './node_modules/react-native-track-player/src/index';

AppRegistry.registerComponent(appName, () => App);

try {
    TrackPlayer.registerPlaybackService(() => {
        return () => { }
    });
} catch (e) { }
