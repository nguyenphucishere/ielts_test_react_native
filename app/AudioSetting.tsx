import { StyleSheet, Text, DeviceEventEmitter } from "react-native-windows";
import CardWithImage from "./templates/CardWithImg";
import Hint from "./templates/Hint";
import HoverButton from "./templates/HoverButton";
import MediumText from "./templates/MediumText";
import ToggleButton from "./templates/ToggleButton";
import Bold from "./templates/Bold";

const styles = StyleSheet.create({
    shadowTitle: {
        textShadowOffset: { width: 0, height: 1 },
        textShadowColor: 'rgb(0, 0, 0)',
        textShadowRadius: 2,
        fontWeight: "700",
        marginBottom: 9,
        color: 'white',
        backgroundColor: 'rgba(222, 225, 227, .2)',

    },
    infoDetail: {
        color: '#454545'
    },
})


const AudioSetting = (): JSX.Element => {

    const audioToggleHandle = (isToggleOn: boolean) => {
        if (!isToggleOn) {
            DeviceEventEmitter.emit("start-audio")
            return;
        }

        DeviceEventEmitter.emit("stop-audio")
    }

    return (

        <CardWithImage
            img_source={require('./assets/img/soundIcon.png')}
            title={<MediumText style={styles.shadowTitle}>Test sound</MediumText>}>

            <MediumText style={styles.infoDetail}>
                Put on your headphones and click on the <Bold>Play sound</Bold> button to play a sample sound.
            </MediumText>

            <ToggleButton textOn={"Stop sound"} onToggle={audioToggleHandle} style={{ width: 114 }}>
                Play sound
            </ToggleButton>



            <Hint img_source={require('./assets/img/hint_ico_red.png')}>
                <MediumText>
                    If you cannot hear the sound clearly, please tell the invigilator.
                </MediumText>
            </Hint>

            <HoverButton
                onPress={() => { DeviceEventEmitter.emit("event.audio-done", {}) }}
                style={{ width: 99 }}>
                Continue
            </HoverButton>
        </CardWithImage>



    );
}

export default AudioSetting;