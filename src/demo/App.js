import $ from 'jquery'
import ShoppingCart from './ShoppingCart/ShoppingCart'
import List from './List/List'


export default class App {
    constructor(id) {
        // $('xx') 工厂模式
        this.$el = $('#' + id)
    }

    initShoppingCart() {
        let shoppingCart = new ShoppingCart(this)
        shoppingCart.init()
    }

    initList() {
        let list = new List(this)
        list.init()
    }

    // 模版方法模式
    init() {
        this.initList()
        this.initShoppingCart()
    }
}