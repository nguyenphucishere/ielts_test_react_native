import CheckBox from "@react-native-community/checkbox";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native-windows";

const styles = StyleSheet.create({
    option: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    checkbox: {
        transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
        display: "flex",
        justifyContent: "flex-start"
    },
    wrapper: {
        display: "flex",
        flexDirection: "column"
    }
})

const CheckBoxGroup = (props: any): JSX.Element => {

    //TODO: optimize this mess of performance

    const [optionsAnswers, _] = useState(Array(props.options?.length && 0).fill(false));
    const checked = useRef(0);
    const f = useRef(Array<JSX.Element>());

    useEffect(() => {
        _(Array(props.options?.length).fill(false))
    }, [])

    useEffect(() => {
        props.onChange(optionsAnswers);
    }, [optionsAnswers])

    const changeOption = (v: any, index: number) => {
        if (checked.current == props.maxOptions && v) {
            return false;
        }

        if (v) checked.current++;
        else checked.current--;

        const n = [...optionsAnswers];
        n[index] = v;
        _(n);

        return v;

    }

    const renderOptions = () => {

        const l = props.options.length;
        f.current = Array<any>();
        for (let i = 0; i < l; i++) {
            f.current.push((
                <View style={styles.option} key={i}>
                    <CheckBox
                        value={optionsAnswers[i]}
                        onValueChange={(v) => changeOption(v, i)}
                        style={styles.checkbox}
                        onFillColor="#767676"

                    />
                    <Text style={{
                        fontFamily: 'Arial,Helvetica,sans-serif',
                        fontSize: 14
                    }} selectable>{props.options[i]}</Text>
                </View>
            ))
        }

        return f.current;

    }


    return (
        <View style={styles.wrapper}>

            {
                renderOptions()
            }
        </View>
    );
}

export default CheckBoxGroup;