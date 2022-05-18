import { Queue } from "../queue/Queue";

const queue = new Queue()
export const fibonacciQueue = queue.getQueue()

export function* Fibonacci(): IterableIterator<number> {
    let oneAlgorithm = 0
    let twoAlgorithm = 1

    while (true) {
        let nextAlgorithm = oneAlgorithm + twoAlgorithm
        queue.enqueue(nextAlgorithm) // Add item to queue
        yield nextAlgorithm
        twoAlgorithm = oneAlgorithm
        oneAlgorithm = nextAlgorithm
    }
}

export const GenerateSequence = (length: number = 1) => {
    const fibonacci = Fibonacci()
    for (let index = 0; index < length; index++) {
        fibonacci.next()
    }
}