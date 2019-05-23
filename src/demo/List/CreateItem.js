import Item from './Item'

function createDiscount(itemData) {
    // 用代理作折扣显示，代理模式
    return new Proxy(itemData, {
        get: function(target, key, receiver) {
            if (key === 'name') {
                return `${target[key]}【折扣】`
            }

            if (key === 'price') {
                return Math.round(target[key] * 0.8)
            }

            return target[key]
        }
    })
}
// 工厂模式，工厂函数
export default function createItem(list, itemData) {
    if (itemData.discount) {
        itemData = createDiscount(itemData)
    }
    return new Item(list, itemData)
}