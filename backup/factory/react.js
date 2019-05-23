class Vnode {
    constructor(tag, attrs, children) {
        // ...
    }
}

React.createElement = function (tag, attrs, children) {
    return new Vnode(tag, attrs, children)
}

