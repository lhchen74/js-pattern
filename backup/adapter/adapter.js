/**
 * 被适配者
 */
class Adaptee {
    specificRequest() {
        return 'janpan socket'
    }
}

class Target {
    constructor() {
        this.adaptee = new Adaptee()
    }
    /**
     * 与原来的接口是不一致的，需要将原来的接口进行转换
     */
    request() {
        let info = this.adaptee.specificRequest()
        return `${info} -> switch -> china socket`
    }
}

let target = new Target()
target.request()