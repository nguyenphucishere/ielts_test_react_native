import { Image, StyleSheet, Text, View } from "react-native-windows";
import MultipleChoice from "./templates/questions/MultipleChoice";
import { question } from "./templates/test_type";
import MultipleChoiceMultiple from "./templates/questions/MultipleChoiceMultiple";

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    navigationBar: {
        backgroundColor: 'black',
        // position: 'absolute',
        height: 30,
        // bottom: 0,
        width: '100%',

        display: 'flex',
        flexDirection: 'row',
        marginTop: 'auto'
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
        padding: 15,
        display: "flex",
        flexDirection: "row",
        height: "84%",
        flexWrap: 'wrap',
        marginHorizontal: 12,
        marginVertical: 11,
        backgroundColor: '#dde3ee',
        position: 'relative',

    },
    leftShadow: {
        position: "absolute",
        top: 0,
        left: -10,
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
        left: 0,
        width: "100%",
        height: 10,
    },
    topShadow: {
        position: "absolute",
        top: -10,
        left: 0,
        width: "100%",
        height: 10,
    }
});

const ListeningQuestions = (props: any): JSX.Element => {

    //TODO: fetch questions using props.questions
    //* code here


    const objectQuestions = (questionNumber: number) => {
        const question: question = props.questions[questionNumber - 1];
        switch (question.type) {
            case 2:
                return <MultipleChoice content={question.content} options={question.options} id={questionNumber} />
            case 3:
                return <MultipleChoiceMultiple
                    content={question.content}
                    options={question.options}
                    maxOptions={question.maxOptions}
                    id={questionNumber + " - " + (questionNumber + question.maxOptions - 1)}
                />
        }
    }

    return (
        <View style={styles.wrapper}>

            <View style={styles.questionSection}>
                <View style={styles.leftShadow}>
                    <Image source={require('../assets/img/fadeLeft.png')} style={{ zIndex: -1, resizeMode: 'repeat', width: 10, height: '105%' }} />
                </View>
                {objectQuestions(1)}
                {objectQuestions(2)}
                {objectQuestions(3)}
                {objectQuestions(4)}

                <View style={styles.rightShadow}>
                    <Image source={require('../assets/img/fadeRight.png')} style={{ zIndex: -1, resizeMode: 'repeat', width: 10, height: '105%' }} />
                </View>
                <View style={styles.topShadow}>
                    <Image source={require('../assets/img/fadeTop.png')} style={{ resizeMode: 'repeat', height: 10, width: '102%' }} />
                </View>
                <View style={styles.bottomShadow}>
                    <Image source={require('../assets/img/fade.png')} style={{ resizeMode: 'repeat', height: 10, width: '102%' }} />
                </View>
            </View>

            <View style={styles.navigationBar}>
                <View style={styles.questionList}></View>
            </View>

        </View>
    );

}

export default ListeningQuestions;