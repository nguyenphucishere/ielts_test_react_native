import { StyleSheet, View, Image, Text, DeviceEventEmitter, Pressable } from "react-native-windows";
import { Slider } from '@react-native-assets/slider'
import { useEffect, useRef, useState } from "react";
import TrackPlayer from '../node_modules/react-native-track-player/src';
import { RepeatMode } from "../node_modules/react-native-track-player/src/constants/";

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: 'black',
        minHeight: 26,
        display: 'flex',
        alignItems: 'center',
        paddingRight: 12,
        paddingBottom: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end'

    },
    volumeSetting: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 5,
        width: '33.33%',
    },
    volumeBar: {
        width: 70,
        top: 0.2
    },
    fade: {
        width: '100%',
        height: 0,
    },
    sliderThumb: {
        width: 10,
        borderColor: 'grey',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: 'white',

    },
    sliderTrack: {
        borderColor: 'grey',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: 'white',
        width: 70,
        borderRadius: 3
    },
    timer: {
        display: 'flex',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '33.33%',
        position: 'relative',
        backgroundColor: 'transparent',
        height: '110%'
    },
    timeText: {
        color: '#fff0bd',
        fontSize: 21,
        backgroundColor: '#000'
    },
    topTimer: {
        position: 'absolute',
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        left: '50%',
        transform: [{
            translateX: -30
        }],
        top: '20%',
        color: '#fff0bd',
        zIndex: 999,
        fontSize: 21
    },
    hoverTimer: {
        height: '150%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        backgroundColor: 'transparent',
        gap: 30,
    }
})

const TopBar = (props: any): JSX.Element => {

    const [volume, setVolume] = useState(0.5);

    const [str, setStr] = useState("30:00")
    const [short, setShort] = useState("30")
    const t = useRef({ m: 0, s: 10 })
    const [isTimeHover, setIsTimeHover] = useState(false);

    useEffect((): any => {
        (async () => {
            await TrackPlayer.setupPlayer();

            try {
                await TrackPlayer.setRepeatMode(RepeatMode.Track);
            } catch (err) { }

            await TrackPlayer.add({
                id: 'audioTest',
                url: require('./assets/audio.mp3'),
            });

            await TrackPlayer.setVolume(volume);

            DeviceEventEmitter.addListener('start-audio', async () => {
                await TrackPlayer.play();
            })

            DeviceEventEmitter.addListener('stop-audio', async () => {
                await TrackPlayer.pause();
            })

        })()


        return (async () => {
            await TrackPlayer.stop();
            await TrackPlayer.reset();
        })
    }, [])

    useEffect(() => {
        if (!props.isStarted) {
            return;
        }

        (async () => {
            await TrackPlayer.stop();
            await TrackPlayer.play();

            const interval = setInterval(async () => {

                if (t.current.m == 0 && t.current.s == 0) {
                    DeviceEventEmitter.emit("event.end-exam")
                    clearInterval(interval);


                }

                if (t.current.s == 0) {
                    t.current.m--;
                    t.current.s = 59;
                }
                else {
                    t.current.s--;
                }

                setStr(t.current.m + ":" + t.current.s)
                setShort(t.current.m + 1 + "")

            }, 1000)

        })()
    }, [props.isStarted])


    return (
        <>
            <View style={styles.topBar}>
                {props.isStarted &&
                    <View style={styles.timer}>
                        <Pressable
                            style={styles.hoverTimer}
                            onHoverIn={() => { setIsTimeHover(true) }}
                            onHoverOut={() => { setIsTimeHover(false) }}>
                            <Image source={require('./assets/img/timer_logo.png')} />
                            {!isTimeHover &&
                                <View style={styles.topTimer}>
                                    <Text style={styles.timeText}>{short} <Text style={{ fontSize: 16 }}>minutes left</Text></Text>
                                </View>
                            }
                            <Text style={styles.timeText}>{str} <Text style={{ fontSize: 16 }}>left</Text></Text>
                        </Pressable>
                    </View>
                }
                {props.isVolumeEnabled &&
                    <View style={styles.volumeSetting}>
                        <Image source={require('./assets/img/audio.png')} />
                        <Slider style={styles.volumeBar}
                            value={volume}
                            minimumValue={0}
                            maximumValue={1}
                            step={0.05}
                            thumbSize={16}
                            trackHeight={10}
                            thumbStyle={styles.sliderThumb}
                            trackStyle={styles.sliderTrack}
                            onValueChange={(val) => {
                                TrackPlayer.setVolume(val)
                                setVolume(val)
                            }}
                        />
                    </View>
                }
            </View>
            <View style={styles.fade}>
                <Image source={require('./assets/img/fade.png')} style={{ resizeMode: 'repeat', height: 49, width: '100%' }} />
            </View>
        </>
    );
}


export default TopBar;