export function log(type) {
    return function(target, name, descriptor) {
        // 待装饰函数
        let oldValue = descriptor.value

        descriptor.value = function () {
            console.log(`操作【${type}】`)
            return oldValue.apply(this, arguments)
        }

        return descriptor
    }
}