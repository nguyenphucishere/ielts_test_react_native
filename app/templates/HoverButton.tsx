import { useState } from "react";
import { Animated, Image, Pressable, StyleSheet, Text } from "react-native-windows";

const AnimatedButton = Animated.createAnimatedComponent(Pressable);

const HoverButton = (props: any): JSX.Element => {
    const [isHover, setHover] = useState(false);
    const [isDisabled, setDisabled] = useState(false);

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

    const confirmed = (e: any) => {
        setDisabled(true)

        props.onPress?.(e);

    }

    return (
        <AnimatedButton
            style={[style.confirmBtn, isHover ? style.btn : {}, isDisabled ? style.disabled : {}, props.style]}
            disabled={isDisabled} onHoverIn={hover} onHoverOut={unHover} onPress={confirmed}>
            {!isDisabled &&
                <Text style={{ fontWeight: '700', fontSize: 15.4, color: '#1e415b' }}>
                    {props.children}
                </Text>
            }

            {isDisabled &&
                <Image style={{ height: 17, width: 17, resizeMode: 'stretch' }} source={
                    require('../assets/img/loading.gif')} />
            }
        </AnimatedButton>
    )
}

export default HoverButton;