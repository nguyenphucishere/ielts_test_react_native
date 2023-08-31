
//* common type of test
/*  type test = {
    id: number,
    type: number,
    date?: Date,
    questions?: question[],
    topic: string | string[],
} */

export type test = {
    id: number,
    date?: Date,
} & ({

    //* listening test
    type: 1,
    questions: question[],
    topic: string
} | {

    //* reading test
    type: 2,
    questions: question[],
    topic: string[3]
} | {

    //* writing test
    type: 3,
    topic: string[2]
})

type coordinates = [number, number]

export type question = ({
    //* matching
    type: 1,
    content: string[],
    options: string[],
} | {
    //* multiple choice 
    type: 2,
    content: string,
    options: [string, string, string]
} | {
    //* multiple choice (M)
    type: 3,
    content: string,
    options: string[],
    maxOptions: number
} | {
    //* map/chart labelling
    type: 4,
    content: string[],
    options: string[],
    map: string
} | {
    //* form completion
    type: 5,
    content: string[],
    table: string[][],
    inputIndex: coordinates[],
} | {
    //* sentence completion
    type: 6,
    content: string,
    inputIndex: number,
} | {
    //* short answer question
    type: 7,
    content: string,
    optionsNumber: number,
})
