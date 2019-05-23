import $ from 'jquery'
import getCart from '../ShoppingCart/GetCart'
import StateMachine from 'javascript-state-machine'
import { log } from '../utils/log'

export default class Item {
    constructor(list, data) {
        this.list = list
        this.data = data
        this.$el = $('<div>')
        this.cart = getCart()
    }

    init() {
        this.initContent()
        this.initBtn()
        this.render()
    }

    initContent() {
        let $el = this.$el
        let data = this.data
        $el.append($(`<p>名称：${data.name}</p>`))
        $el.append($(`<p>价格：${data.price}</p>`))
    }
    initBtn() {
        let $el = this.$el
        let $btn = $('<button>')

        // 状态模式
        let fsm = new StateMachine({
            init: "加入购物车",
            transitions: [
                {
                    name: 'addToCart',
                    from: '加入购物车',
                    to: '从购物车删除'
                }, 
                {
                    name: 'deleteFromCart',
                    from: '从购物车删除',
                    to: '加入购物车'
                }
            ],
            methods: {
                onAddToCart: () => {
                    this.addToCartHandle()
                    updateText()
                },
                onDeleteFromCart: () => {
                    this.deleteFromHandle()
                    updateText()
                }
            }
        })

        function updateText() {
            $btn.text(fsm.state)
        }

        $btn.click(() => {
            if (fsm.is('加入购物车')) {
                // 添加购物车
                fsm.addToCart()
            } else {
                //删除购物车
                fsm.deleteFromCart()
            }  
        })

        updateText()

        $el.append($btn)
    }


    // 添加到购物车
    // @log('add')
    addToCartHandle() {
        this.cart.add(this.data)
    }
    // 从购物车删除
    // @log('del')
    deleteFromHandle() {
        this.cart.del(this.data.id)
    }
    
    render() {
        this.list.$el.append(this.$el)
    }
}