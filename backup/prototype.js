// 原型对象
const prototype = {
    getName: function() {
        return this.first + ' ' + this.last
    },
    say: function() {
        alert('hello')
    }
}


// 基于原型对象创建 x
let x = Object.create(prototype)
x.first = 'A'
x.last = 'B'
alert(x.getName())
x.say()


// 基于原型对象创建 y
let y = Object.create(prototype)
y.first = 'C'
y.last = 'D'
alert(y.getName())
y.say()


/**
 * 对比 JS 中的原型 prototype
 * JS 原型 prototype 是实现原型模式和 ES6 class 的一种底层原理
 * class 是面向对象的基础，并不服务于某个模式
 * Object.create() 实现了类似‘原型模式’的功能
 */