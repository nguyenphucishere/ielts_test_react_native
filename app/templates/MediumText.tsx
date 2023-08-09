import { Text } from "react-native-windows"

const MediumText = ({ children, style }: any): JSX.Element => {
    return (
        <Text style={[{ fontSize: 16 }, style]}>{children}</Text>
    )
}

export default MediumText;