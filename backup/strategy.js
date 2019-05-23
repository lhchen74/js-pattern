// class User {
//     constructor(type) {
//         this.type = type
//     }

//     buy() {
//         if (this.type === 'ordinary') {
//             console.log('ordinary')
//         } else if (this.type === 'member') {
//             console.log('member')
//         } else if (this.type === 'vip') {
//             console.log('vip')
//         }
//     }
// }

// let u1 = new User('ordinary')
// u1.buy()
// let u2 = new User('member')
// u2.buy()
// let u3 = new User('vip')
// u3.buy()


class OrdinaryUser {
    buy() {
        console.log('ordinary')
    }
}

class MemberUser {
    buy() {
        console.log('member')
    }
}

class VipUser {
    buy() {
        console.log('vip')
    }
}

let u1 = new OrdinaryUser()
u1.buy()

let u2 = new MemberUser()
u2.buy()

let u3 = new VipUser()
u3.buy()