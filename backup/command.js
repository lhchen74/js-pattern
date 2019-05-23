// 接收者
class Receiver {
    exec() {
        console.log('执行')
    }
}

// 命令者
class Command {
    constructor(receiver) {
        this.receiver = receiver
    }

    cmd() {
        console.log('执行命令')
        this.receiver.exec()
    }
}

// 触发者
class Invoker {
    constructor(command) {
        this.command = command
    }
    
    invoke() {
        console.log('开始')
        this.command.cmd()
    }
}

let solider = new Receiver()

let trumpeter = new Command(solider)

let general = new Invoker(trumpeter)

console.log(general.invoke())