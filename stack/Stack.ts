type Items = {
    [key: string | number]: any
}

// const _items = Symbol('stack-items')

export class Stack {
    private _count: number;
    private _items: Items;

    constructor() {
        this._count = 0;
        this._items = {} as Items
        // this[_items] = [] // ES2015 w/ Symbol
    }

    public push(element: any) { // Possible any element type
        this._items[this._count] = element
        this._count++
    }

    public pop() {
        if (this.isEmpty()) return undefined
        this._count--;
        const result = this._items[this._count]
        delete this._items[this._count]
        return result
    }
    public peek() {
        if (this.isEmpty()) return undefined
        return this._items[this._count - 1]
    }
    public isEmpty() {
        return this._count === 0
    }
    public clear() {
        this._items = {}
        this._count = 0
    }
    public clearWhile() {
        while (!this.isEmpty()) {
            this.pop()
        }
    }
    public size() {
        return this._count
    }
    public toString() {
        if (this.isEmpty()) return ''
        let objString = `${this._items[0]}`
        for (let i = 1; i < this._count; i++) {
            objString = `${objString}, ${this._items[i]}`
        }
        return objString;
    }
}