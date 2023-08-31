import { Image, StyleSheet, Text, View } from "react-native-windows";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



const styles = StyleSheet.create({
    labelling: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        gap: 10
    },
    map: {
        flex: 1,
        paddingTop: 30
    },
    label: {
        flex: 1,
        paddingHorizontal: 50,
        display: 'flex',
        paddingTop: 30,
        alignItems: 'center',
    },
    head: {
        textAlign: 'center',
        fontWeight: 'bold',

    }
})

const MapLabelling = (props: any): JSX.Element => {
    const w = [200, ...Array(props.options.length).fill(49)];
    const h = Array(props.content.length).fill(30);


    return (

        <View style={styles.labelling}>
            {/* <TableWrapper borderStyle={{ borderWidth: 1, borderColor: '#666666' }} style={{ flexDirection: 'row' }}>
                            <Col data={props.content} heightArr={h} width={200} />
                            <Rows data={Array(props.content.length).fill(Array(props.options.length).fill(''))}
                                widthArr={Array(props.options.length).fill(49)}
                                heightArr={h} /> */}
            <View style={styles.map}>
                <Image source={{ uri: props.map }}
                    style={{ width: '100%', height: '72%', resizeMode: 'contain' }} />

            </View>
            <View style={styles.label}>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#666666' }}>
                    <Row data={['', ...props.options]} textStyle={styles.head} widthArr={w} height={30} />

                    {
                        Array(props.content.length).fill('').map((_, i) => (
                            <TableWrapper key={i} borderStyle={{ borderWidth: 1, borderColor: '#666666' }} style={{ flexDirection: 'row' }}>
                                <Cell key={"q" + i} data={props.content[i]} width={200} height={30} />
                                {
                                    Array(props.options.length).fill('').map((_, j) => (
                                        <Cell key={"o" + i + j} data={""} width={49} height={30} />
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </Table>
            </View>
        </View>
    )
}



export default MapLabelling;