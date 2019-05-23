// const EventEmitter = require('events').EventEmitter

// const emitter = new EventEmitter()

// emitter.on('some', info => {
//     console.log('fn1', info)
// })

// emitter.on('some', info => {
//     console.log('fn2', info)
// })

// emitter.emit('some', 'hello node')








// const EventEmitter = require('events').EventEmitter

// class Dog extends EventEmitter {
//     constructor(name) {
//         super()
//         this.name = name
//     }
// }

// let babb = new Dog('babb')
// babb.on('bark', function() {
//     console.log(this.name, ' barking1...')
// })
// babb.on('bark', function() {
//     console.log(this.name, ' barking2...')
// })
// setInterval(function() {
//     babb.emit('bark')
// }, 1000)






// const fs = require('fs')
// const readStream = fs.createReadStream('callbacks.html')

// let length = 0

// readStream.on('data', chunk => {
//     length += chunk.toString().length
// })
// readStream.on('end', () => {
//     console.log('length: ', length)
// })







// const fs = require('fs')
// const readline = require('readline')

// let rl = readline.createInterface({
//     input: fs.createReadStream('callbacks.html')
// })

// let lineNo = 0

// rl.on('line', line => {
//     lineNo ++
// })

// rl.on('close', () => {
//     console.log(`lineNo: ${lineNo}`)
// })





const http = require('http')

http.createServer((req, res) => {
    var method = req.method.toLowerCase()
    console.log(method)
    if (method === 'get') {
        // ...
    }
    if (method === 'post') {
        var data = ''
        req.on('data', chunk => {
            console.log('on data...')
            data += chunk.toString()
        })
        req.on('end', () => {
            console.log(data.toString())
            res.writeHead(200, {'Content-type':'text/html'})
            res.write(data)
            res.end()
        })
    }
}).listen(8080)

console.log('listening on 8080...')