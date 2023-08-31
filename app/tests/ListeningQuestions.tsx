import { Image, StyleSheet, Text, View } from "react-native-windows";
import { ScrollView } from "react-native";
import MultipleChoice from "./templates/questions/MultipleChoice";
import { question } from "./templates/test_type";
import MultipleChoiceMultiple from "./templates/questions/MultipleChoiceMultiple";
import { useEffect, useRef } from "react";
import MapLabelling from "./templates/questions/MapLabelling";

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    navigationBar: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 'auto',

    },
    questionList: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    questionSection: {
        height: "80%",
        position: "relative",
        marginHorizontal: 12,
        marginVertical: 11,
        backgroundColor: '#dde3ee',
        display: 'flex',

    },
    leftShadow: {
        position: "absolute",
        top: 0,
        left: 3,
        height: "100%",
    },
    rightShadow: {
        position: "absolute",
        top: 0,
        right: -10,
        height: "100%",
    },
    bottomShadow: {
        position: "absolute",
        bottom: -10,
        left: 13,
        width: "100%",
        height: 10,
    },
    scrollView: {
        display: "flex",
        flexWrap: 'wrap',
        flex: 1,

    },
    q: {
        display: "flex",
        flexDirection: "row",
        flexWrap: 'wrap',
        padding: 15,
        width: '100%',
        height: '100%',
    }
});

const ListeningQuestions = (props: any): JSX.Element => {

    //TODO: fetch questions using props.questions
    //* code here

    const answers = useRef<any>([]);

    useEffect(() => {
        answers.current = []
    }, [answers.current])




    const objectQuestions = (questionNumber: number) => {
        const question: question = props.questions[questionNumber - 1];

        switch (question.type) {
            case 2:
                answers.current.push(0);
                return <MultipleChoice content={question.content} options={question.options} id={questionNumber} onChange={(a: any) => answers.current[questionNumber - 1] = a} />
            case 3:
                answers.current.push([])
                return <MultipleChoiceMultiple
                    content={question.content}
                    options={question.options}
                    maxOptions={question.maxOptions}
                    onChange={(a: any) => answers.current[questionNumber - 1] = a}
                    id={questionNumber + " - " + (questionNumber + question.maxOptions - 1)}
                />
            case 4:
                answers.current.push([])
                return <MapLabelling
                    content={question.content}
                    options={question.options}
                    map={question.map}
                    id={questionNumber} />
        }
    }

    return (
        <View style={styles.wrapper}>

            <View style={styles.questionSection}>

                <View style={styles.leftShadow}>
                    <Image source={require('../assets/img/fadeLeft.png')} style={{ zIndex: -1, resizeMode: 'repeat', width: 10, height: '100%' }} />
                </View>

                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    style={styles.scrollView}
                    snapToInterval={1}
                    disableIntervalMomentum={true}
                    scrollsToTop={false}
                    horizontal={false}
                    minimumZoomScale={1}
                    maximumZoomScale={1}
                    scrollToOverflowEnabled={false}
                    overScrollMode="never"
                >
                    <View style={styles.q}>
                        {objectQuestions(5)}
                    </View>



                </ScrollView>
                <View style={styles.rightShadow}>
                    <Image source={require('../assets/img/fadeRight.png')} style={{ zIndex: -1, resizeMode: 'repeat', width: 10, height: '100%' }} />
                </View>

                <View style={styles.bottomShadow}>
                    <Image source={require('../assets/img/fade.png')} style={{ resizeMode: 'repeat', height: 10, width: '99%' }} />
                </View>
            </View>


            <View style={styles.navigationBar}>
                <View style={styles.questionList}></View>
            </View>

        </View>
    );

}

export default ListeningQuestions;