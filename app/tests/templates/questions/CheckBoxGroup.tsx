import CheckBox from "@react-native-community/checkbox";
import { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native-windows";

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
    }
})

const CheckBoxGroup = (props: any): JSX.Element => {

    //TODO: optimize this mess of performance

    const [optionsAnswers, _] = useState(Array(props.options?.length && 0).fill(false));
    const checked = useRef(0);

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


    return (
        <View>
            <FlatList
                data={props.options}
                renderItem={
                    ({ item, index }) => {

                        return (
                            <View style={styles.option}>
                                <CheckBox
                                    value={optionsAnswers[index]}
                                    onValueChange={(v) => changeOption(v, index)}
                                    style={styles.checkbox}

                                />
                                <Text style={{
                                    fontFamily: 'Arial,Helvetica,sans-serif',
                                    fontSize: 14
                                }} selectable>{item}</Text>
                            </View>
                        );
                    }

                }
                keyExtractor={item => item}
            />

        </View>
    );
}

export default CheckBoxGroup;