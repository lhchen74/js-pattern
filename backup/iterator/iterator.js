class Container {
    constructor(list) {
        this.list = list
    }

    getIterator() {
        return new Iterator(this)
    }
}


class Iterator {
    constructor(container) {
        this.list = container.list
        this.index = 0
    }

    next() {
        if (this.hasNext()) {
            return this.list[this.index++]
        }
        return null
    }

    hasNext() {
        if (this.index >= this.list.length) {
            return false
        }
        return true
    }
}


let arr = [1, 2, 3]
let container = new Container(arr)
let iterator = container.getIterator()

while(iterator.hasNext()) {
    console.log(iterator.next())
}


console.log(Array.prototype[Symbol.iterator])
console.log(Array.prototype[Symbol.iterator]())
console.log(Array.prototype[Symbol.iterator]().next())


function each(data) {
    // 生成遍历器
    let iterator = data[Symbol.iterator]()

    let item = {done: false}
    while (!item.done) {
        item = iterator.next() 
        if (!item.done) {
            console.log(item.value)
        }
    }
}

each(arr)

let m = new Map()
m.set('a', 1)
m.set('b', 2)
each(m)


function each_of(data) {
    // es6 of 就是使用 iterator
    for(let item of data) {
        console.log(item)
    }
}

each(arr)
each(m)