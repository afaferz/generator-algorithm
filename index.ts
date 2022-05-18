import { GenerateSequence as FibonacciSequence, fibonacciQueue } from "./math/Fibonacci";
import { GenerateSequence as PascalTriangleSequence, pascalTriangleQueue } from "./math/PascalTriangle";
import cli from './cli'

const algorigthms = {
    'Fibonnaci': {
        func: (length: number) => FibonacciSequence(length),
        queue: fibonacciQueue
    },
    'Pascal Triangle': {
        func: (length: number) => PascalTriangleSequence(length),
        queue: pascalTriangleQueue
    },
}

cli(algorigthms)