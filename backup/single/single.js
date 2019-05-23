class SingleObject {
    login() {
        console.log('login...')
    }
}

SingleObject.getInstance = (function() {
    let instance
    return function() {
        if (!instance) {
            instance = new SingleObject()
        }
        return instance
    }
})()

let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
console.log(obj1 === obj2)
// js single 不可以阻止用户直接通过 new 创建对象
let obj3 = new SingleObject()
console.log(obj1 === obj3)