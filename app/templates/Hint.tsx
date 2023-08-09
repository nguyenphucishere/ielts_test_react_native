import { Image, StyleSheet, View } from "react-native-windows"

const styles = StyleSheet.create({
    hint: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginTop: 10
    },
})

const Hint = (props: any): JSX.Element => {
    return (
        <View style={[styles.hint, props.style]}>
            <Image style={{ bottom: -2 }} source={props.img_source} />
            {props.children}
        </View>
    )
}

export default Hint;