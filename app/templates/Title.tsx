import { Text } from "react-native-windows"
import Bold from "./Bold"

const Title = (props: any): JSX.Element => {

    return (
        <Text><Bold style={{ fontSize: 18 }}>{props.children}</Bold></Text>
    )
}

export default Title;