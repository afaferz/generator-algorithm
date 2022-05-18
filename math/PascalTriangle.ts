import { Queue } from "../queue/Queue";

const queue = new Queue()
export const pascalTriangleQueue = queue.getQueue()

export function* PascalTriangle(): IterableIterator<number> {
    let init = 0
    while (true) {
        if (init === 0) {
            queue.enqueue([1])
        }
        else if (init === 1) {
            queue.enqueue([1, 1])
        }
        else {
            let i = 0;
            let j = [1]
            while (i < init - 1) {
                const z = pascalTriangleQueue[init - 1][i] + pascalTriangleQueue[init - 1][i + 1]
                j.push(z)
                i += 1
            }
            j.push(1)
            queue.enqueue(j)
        }
        yield init += 1
    }
}

export const GenerateSequence = (length: number = 1) => {
    const pascalTriangle = PascalTriangle()
    for (let index = 0; index < length; index++) {
        pascalTriangle.next()
    }
}