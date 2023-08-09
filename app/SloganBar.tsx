import { Image, StyleSheet } from "react-native";
import { View } from "react-native-windows";

const styles = StyleSheet.create({
    topBar: {
        paddingHorizontal: 12,
        paddingTop: 3,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 2
    },
    flexEnd: {
        marginLeft: 'auto'
    },
})

const SloganBar = (): JSX.Element => {

    return (
        <View style={styles.topBar}>
            <Image source={require('./assets/img/ieltslogo.png')} />
            <Image style={styles.flexEnd} source={require('./assets/img/ieltsownerlogo.jpg')} />
        </View>

    );
}



export default SloganBar;