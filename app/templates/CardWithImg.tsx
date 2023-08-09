import { Image, StyleSheet, View } from "react-native-windows";

const styles = StyleSheet.create({
    infoReview: {
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 12,
        width: 760,
        fontSize: 16,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    wrapper: {
        alignItems: 'center',
        marginTop: 63,
        fontFamily: 'Arial,Helvetica,sans-serif',
    },
    inlineTitleWithImg: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 10,
        width: 760,
        zIndex: 99999
    },
})


const CardWithImage = (props: any): JSX.Element => {

    return (
        <View style={styles.wrapper}>
            <View style={styles.inlineTitleWithImg}>
                <Image style={{ bottom: -3 }} source={props.img_source} />
                {props.title}
            </View>
            <View style={styles.infoReview}>
                {props.children}
            </View>

        </View>
    );
}

export default CardWithImage;