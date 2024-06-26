import { Pressable, StyleSheet, Text, View } from "react-native-windows";
import { useEffect, useRef } from "react";
import CheckBoxGroup from "./CheckBoxGroup";


const styles = StyleSheet.create({
    multipleQuestion: {
        width: "50%",
        marginTop: 30
    },
    content: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10
    },
    question: {
        fontFamily: 'Arial,Helvetica,sans-serif',
        fontSize: 14
    },
    option: {
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'flex-start',
        fontSize: 14
    },
    options: {
        marginLeft: 10,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 14
    },
    id: {
        paddingHorizontal: 10,
        fontWeight: 'bold',
        marginLeft: 10,
        fontFamily: 'Arial,Helvetica,sans-serif',
        fontSize: 14,
        textAlign: 'center'
    }
})

const MultipleChoiceMultiple = (props: any): JSX.Element => {

    const changeAns = (a: any) => {

        const n: Array<number> = a.map((v: any, index: number) => {
            if (!v) return -1;

            return index;
        }).filter((i: number) => i > 0);

        props.onChange(n);
    }

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
                <CheckBoxGroup options={props.options} maxOptions={props.maxOptions}
                    onChange={changeAns}
                />

            </View>

        </View>
    )
}


export default MultipleChoiceMultiple;