import { Text } from "react-native-windows";

const Bold = (props: any): JSX.Element => {
    return (
        <Text style={[{ fontWeight: "bold" }, props.style]}>{props.children}</Text>
    )
}

export default Bold;