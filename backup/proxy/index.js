class ReadImg {
    constructor(filename) {
        this.filename = filename
        this.loadFromDisk()
    }

    display() {
        console.log('display...')
    }

    loadFromDisk() {
        console.log('loading...')
    }
}

class ProxyImg {
    constructor(filename) {
        this.realImg = new ReadImg()
    }

    display() {
        this.realImg.display()
    }
}

let proxyImg = new ProxyImg('1.png')
proxyImg.display()