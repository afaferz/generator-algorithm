export type Algorithm = {
    [key: string]: {
        func: (t: number) => void
        queue: {
            [key: string]: number | number[]
        }
    }
}