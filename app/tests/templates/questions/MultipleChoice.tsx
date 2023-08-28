import { StyleSheet, Text, View } from "react-native-windows";
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { useMemo, useState } from "react";


const styles = StyleSheet.create({
    multipleQuestion: {
        width: "50%",
        marginTop: 30
    },
    content: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center"
    },
    question: {
        fontFamily: 'Arial,Helvetica,sans-serif',

    },
    option: {
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'flex-start',

    },
    options: {
        marginLeft: 10,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    label: {
        fontFamily: 'Arial,Helvetica,sans-serif',
        fontSize: 14,
    },
    id: {
        paddingHorizontal: 10,
        fontWeight: 'bold',
        marginLeft: 10,
        textAlign: 'center',
        fontFamily: 'Arial,Helvetica,sans-serif'
    }
})

const MultipleChoice = (props: any): JSX.Element => {

    const [answer, _] = useState<string | undefined>(undefined)


    const radioButtons: RadioButtonProps[] = useMemo(() => ([
        {
            id: '1',
            label: props.options[0],
            value: 'A',
            borderSize: 1.5,
            labelStyle: styles.label,
            size: 14,
        },
        {
            id: '2',
            label: props.options[1],
            value: 'B',
            borderSize: 1.5,
            labelStyle: styles.label,
            size: 14,

        },
        {
            id: '3',
            label: props.options[2],
            value: 'C',
            borderSize: 1.5,
            labelStyle: styles.label,
            size: 14,

        }
    ]), []);



    return (
        <View style={styles.multipleQuestion}>
            <View style={styles.content}>
                <Text style={styles.id}>
                    {props.id}
                </Text>
                <Text style={styles.question} selectable>

                    {props.content}
                </Text>
            </View>
            <View style={styles.options}>
                <RadioGroup
                    radioButtons={radioButtons}
                    onPress={_}
                    selectedId={answer}
                    containerStyle={styles.option}

                />
            </View>
        </View>
    )
}



export default MultipleChoice;