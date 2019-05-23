let star = {
    name: 'babb',
    age: 25,
    phone: 'star: 11111111'
}

let agent = new Proxy(star, {
    get: function(target, key) {
        if (key === 'phone') {
            return 'agent: 2222222'
        }

        if (key === 'price') {
            return 10000
        }

        return target[key]
    },
    set: function(target, key, val) {
        if (key === 'customPrice') {
            if (val < 10000) {
                throw new Error('price too low')
            } else {
                target[key] = val
                return true
            }
        }
    } 
})

console.log(agent.name, agent.age, agent.phone, agent.price)
agent.customPrice = 9000   // index.js:22 Uncaught Error: price too low