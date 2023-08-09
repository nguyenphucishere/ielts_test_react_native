import { useState } from "react";
import { Animated, Pressable, StyleSheet, Text } from "react-native-windows";

const AnimatedButton = Animated.createAnimatedComponent(Pressable);

const ToggleButton = (props: any): JSX.Element => {
    const [isHover, setHover] = useState(false);
    const [isToggleOn, setToggle] = useState(false);

    const style = StyleSheet.create({
        confirmBtn: {
            borderColor: '#424242',
            borderStyle: 'solid',
            borderWidth: 1,

            borderRadius: 5,

            paddingVertical: 6,
            paddingHorizontal: 14,

            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            width: 191,
            alignSelf: 'center',
            marginTop: 16,
            marginBottom: 16,


        },
        btn: {
            backgroundColor: '#d5e0f2',
        },
        disabled: {
            backgroundColor: '#d5e0f2'
        }
    })
    const hover = () => {
        setHover(true)
    }

    const unHover = () => {
        setHover(false)
    }

    const toggle = () => {
        setToggle(!isToggleOn)

        props.onToggle?.(isToggleOn);

    }

    return (
        <AnimatedButton
            style={[style.confirmBtn, isHover ? style.btn : {}, props.style]}
            onHoverIn={hover} onHoverOut={unHover} onPress={toggle}>
            {!isToggleOn &&
                <Text style={{ fontWeight: '700', fontSize: 15.4, color: '#1e415b' }}>
                    {props.children}
                </Text>
            }

            {isToggleOn &&
                <Text style={{ fontWeight: '700', fontSize: 15.4, color: '#1e415b' }}>
                    {props.textOn}
                </Text>
            }
        </AnimatedButton>
    )
}

export default ToggleButton;