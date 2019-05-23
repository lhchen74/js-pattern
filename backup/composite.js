/**
 * 组合模式
 * VNode
 * 1. 整体和单个节点的操作是一致的
 * 2. 整体和单个节点的数据结构也保持一致
 */




/** 
<div id="div1" class="container">
    <p>123</p>
    <p>456</p>
</div>


{
    tag: 'div',
    attr: {
        id: 'div1',
        className: 'container'
    },
    children: [
        {
            tag: 'p',
            attr: {},
            children: ['123']
        },
        {
            tag: 'p',
            attr: {},
            children: ['456']
        }
    ]
}
*/

