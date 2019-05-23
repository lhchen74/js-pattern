class LoginForm {
    constructor() {
        this.state = 'hide'
    }

    show() {
        if (this.state === 'show') {
            alert('已经显示')
            return
        }
        this.state = 'show'
        console.log('登录框已经显示')
    }

    hide() {
        if (this.state === 'hide') {
            alert('已经隐藏')
            return
        }
        this.state = 'hide'
        console.log('登录框已经隐藏')
    }
}

LoginForm.getInstance = (function () {
    let instance
    return function () {
        if (!instance) {
            instance = new LoginForm()
        }
        return instance
    }
})()


l1 = LoginForm.getInstance()
l1.show()
l2 = LoginForm.getInstance()
l2.hide()
l3 = LoginForm.getInstance()
l3.hide()