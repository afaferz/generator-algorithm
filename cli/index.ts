import { Answers, prompt, Question, QuestionCollection, Validator } from 'inquirer';
import { Algorithm } from '../@types/Cli';

const algorithmQuestion: QuestionCollection = {
    type: 'list',
    name: 'algorithm',
    message: 'What algorithm do you want run?',
    choices: [
        'Fibonnaci',
        'Pascal Triangle'
    ],
};

const lengthQuestion: Question<Answers> = {
    message: 'Enter a length to generate',
    name: 'length',
    type: 'number',
    default: 'number = 0'
};


const questions: Question[] = [
    algorithmQuestion,
    lengthQuestion
];

const cli = (algorithms: Algorithm) => prompt(questions).then((answers) => {
    const { algorithm, length } = answers

    // Execute algorithm
    algorithms[algorithm].func(length)
    console.log(algorithms[algorithm].queue)
});

export default cli