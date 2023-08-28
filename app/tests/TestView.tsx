import { useState } from "react";
import { View } from "react-native-windows";
import ListeningQuestions from "./ListeningQuestions";
import { test } from './templates/test_type';

const TestView = (props: any): JSX.Element => {


    const [test, setTest] = useState({
        type: 1,
        id: 1,
        questions: [
            {
                type: 2,
                content: 'Why did Judy choose to study the East End of London?',
                options: [
                    'She wanted to understand her own background.',
                    'She was interested in place names.',
                    'She had read several books about it.'
                ]
            }, {
                type: 2,
                content: 'What difficulty did Judy have with her dissertation?',
                options: [
                    'writing the first draft',
                    'organising what she had collected',
                    'finding enough relevant sources'
                ]
            }, {
                type: 2,
                content: 'What was Judy\'s main source of materials?',
                options: [
                    'books',
                    'newspapers',
                    'interviews'
                ]
            }, {
                type: 3,
                content: 'Which THREE things does the Guide to the Library have information about?',
                options: [
                    'book reservations',
                    'reading room rules',
                    'catalogue',
                    'disabled facilities',
                    'location of rooms',
                    'cafe',
                    'regular events',
                    'staff'
                ],
                maxOptions: 3,
            }
        ],
        topic: 'https://ieltstrainingonline.com/wp-content/uploads/2021/07/Cam16-Test1-Part2.mp3?_=2'
    } as test);

    const fetchExam = (username: string, password: string) => {

    }



    return (
        <View>

            {test.type == 1 &&
                <ListeningQuestions questions={test.questions} />
            }

        </View>
    );
}

export default TestView;