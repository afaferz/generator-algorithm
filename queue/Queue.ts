type Items = {
    [key: string | number]: any
}

export class Queue {
    private _count: number;
    private _lowestCount: number;
    private _items: Items;

    constructor() {
        this._count = 0
        this._lowestCount = 0
        this._items = {}
    }

    public enqueue(element: any) { // Possible any element type
        this._items[this._count] = element
        this._count++
    }

    public dequeue(): any {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this._items[this._lowestCount]
        delete this._items[this._lowestCount]
        this._lowestCount++
        return result
    }

    public peek(): any {
        if (this.isEmpty()) return undefined
        return this._items[this._lowestCount]
    }

    public isEmpty(): boolean {
        return this.size() === 0
    }

    public size(): number {
        return this._count - this._lowestCount
    }

    public getQueue(): Items {
        return this._items
    }

    public clearQueue() {
        this._count = 0
        this._lowestCount = 0
        this._items = {}
    }

    public toString(): string {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this._items[this._lowestCount]}`

        for (let index = this._lowestCount + 1; index < this._count; index++) {
            objString = `${objString}, ${this._items[index]}`
        }
        return objString
    }
}