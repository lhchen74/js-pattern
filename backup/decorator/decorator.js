class Circle {
    draw() {
        console.log('draw circle')
    }
}

class Decorator {
    constructor (circle) {
        this.circle = circle
    }

    draw() {
        this.circle.draw()
        this.setRedBorder(circle)
    }

    setRedBorder(circle) {
        console.log('set red border')
    }
}

let decorator = new Decorator(new Circle())
decorator.draw()