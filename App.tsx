/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import SloganBar from './app/SloganBar';
import TopBar from './app/TopBar';
import { DeviceEventEmitter, SafeAreaView, StyleSheet, Text, View } from 'react-native-windows';
import InformationReview from './app/InformationReview';
import AudioSetting from './app/AudioSetting';
import TrackPlayer, { State, TrackType } from 'react-native-track-player/src';
import { getPlaybackState } from 'react-native-track-player/src/trackPlayer';
import Booklet from './app/Booklet';

function App(): JSX.Element {

  const [isConfirmed, setConfirmed] = useState(false);
  const [isReady, setReady] = useState(false);
  const [isStarted, setStarted] = useState(false);

  useEffect(() => {
    TrackPlayer.reset();
    DeviceEventEmitter.addListener("event.confirmed", () => {
      setConfirmed(true);

    });

    DeviceEventEmitter.addListener('event.audio-done', async () => {
      await TrackPlayer.reset();
      setReady(true);
    });

    DeviceEventEmitter.addListener("event.start-exam", () => {
      DeviceEventEmitter.removeAllListeners();


      (async () => {

        await TrackPlayer.add({
          id: 'audioTest',
          url: 'https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test1-Part2.mp3?_=2',
          title: 'test',
          author: 'IELTS',
          type: TrackType.Dash
        })

        setStarted(true);
      })()

      DeviceEventEmitter.addListener('event.end-exam', async () => {
        await TrackPlayer.stop();
        await TrackPlayer.reset();
      });
    })

  }, [])

  return (
    <SafeAreaView>
      <View style={styles.body}>
        {!isStarted && <SloganBar />}
        <TopBar isVolumeEnabled={isConfirmed} isStarted={isStarted} />

        {!isReady && (
          !isConfirmed ?
            <InformationReview /> :
            <AudioSetting />

        )}

        {isReady && (
          !isStarted ? <Booklet /> : <Text>I am a test!</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#dbe5f5'
  }
})

export default App;
