import { StyleSheet, DeviceEventEmitter } from "react-native-windows";
import { useState } from "react";
import CardWithImage from "./templates/CardWithImg";
import Hint from "./templates/Hint";
import HoverButton from "./templates/HoverButton";
import MediumText from "./templates/MediumText";

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

const InformationReview = (): JSX.Element => {

    return (

        <CardWithImage
            img_source={require('./assets/img/userCheckingIco.png')}
            title={<MediumText style={styles.shadowTitle}>Confirm your details</MediumText>}>

            <MediumText style={styles.infoDetail}>Name: </MediumText>
            <MediumText style={styles.infoDetail}>Date of birth: </MediumText>
            <MediumText style={styles.infoDetail}>Candidate number: </MediumText>

            {/* <View style={styles.hint}>
                <Image style={{ bottom: -2 }} source={require('./assets/img/hint_ico.png')} />
                <MediumText>
                    If your details are not correct, please inform the invigilator.
                </MediumText>
            </View> */}

            <Hint img_source={require('./assets/img/hint_ico.png')}>
                <MediumText>
                    If your details are not correct, please inform the invigilator.
                </MediumText>
            </Hint>

            <HoverButton
                onPress={() => {
                    DeviceEventEmitter.emit("event.confirmed", {})
                }}>
                My details are correct
            </HoverButton>
        </CardWithImage>



    );
}

export default InformationReview;