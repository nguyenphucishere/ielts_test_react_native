import { Image, StyleSheet, Text, View } from "react-native-windows";
import Title from "./templates/Title";
import Bold from "./templates/Bold";
import Hint from "./templates/Hint";
import MediumText from "./templates/MediumText";
import HoverButton from "./templates/HoverButton";
import { DeviceEventEmitter } from "react-native";

const Booklet = (): JSX.Element => {

    const styles = StyleSheet.create({
        booklet: {
            marginTop: 12,
            marginHorizontal: 10,

            paddingVertical: 16,
            paddingHorizontal: 10,

            backgroundColor: '#dde3ee',
            borderRadius: 6,

            display: 'flex',
            flexDirection: 'column'
        },
        fadeBottom: {
            marginHorizontal: 12,
            height: 0,
            zIndex: -1,
            top: -9
        },
        title: {
            marginVertical: 10,
        },
        text: {
            fontSize: 14,
            color: 'black',
            fontWeight: '400',
        },
        row: {
            flexDirection: 'row',
            paddingBottom: 5
        },
        ul: {
            paddingLeft: 45,
            paddingVertical: 20,
        }
    })

    const UnorderedList = (props: any) => {
        return (
            <View style={styles.ul}>
                {props.children}
            </View>
        )
    }

    const RenderRow = (props: any) => {
        return (
            <View style={styles.row}>
                <Text style={[{ fontSize: 16 }, styles.text]}>{'\u2022'}</Text>
                <Text style={[{ flex: 1, paddingLeft: 5 }, styles.text]}>{props.children}</Text>
            </View>
        );
    }

    return (
        <>
            <View style={styles.booklet}>
                <Title>IELTS Listening</Title>
                <Text style={[{ paddingVertical: 20 }, styles.text]}>Time: Approximately 30 minutes</Text>

                <Title>INSTRUCTIONS TO CANDIDATES</Title>
                <UnorderedList>
                    <RenderRow>Answer <Bold>all</Bold> the questions.</RenderRow>
                    <RenderRow>You can change your answers at any time during the test.</RenderRow>
                </UnorderedList>

                <Title>INFORMATION FOR CANDIDATES</Title>
                <UnorderedList>
                    <RenderRow>There are 24 questions in this test.</RenderRow>
                    <RenderRow>Each question carries one mark.</RenderRow>
                    <RenderRow>There are four parts to the test.</RenderRow>
                    <RenderRow>Please note you will only hear each part once in your actual test. However for familiarisation and practice purposes, this familiarisation test will allow you to listen to each recording multiple times.</RenderRow>
                    <RenderRow>For each part of the test there will be time for you to look through the questions and time for you to check your answers.</RenderRow>
                </UnorderedList>

                <Hint style={{ marginLeft: 'auto', marginRight: 'auto' }} img_source={require('./assets/img/hint_ico.png')}>
                    <MediumText style={{ color: '#575757' }}>
                        <Bold>
                            Do not click 'Start test' until you are told to do so.
                        </Bold>
                    </MediumText>
                </Hint>

                <HoverButton onPress={() => { DeviceEventEmitter.emit("event.start-exam") }} style={{ width: 99 }}>Start test</HoverButton>
            </View>
            <View style={styles.fadeBottom}>
                <Image source={require('./assets/img/fade.png')} style={{ resizeMode: 'repeat', height: 30, width: '100%' }} />
            </View>

        </>


    );
}

export default Booklet;