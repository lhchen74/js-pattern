/**
 *  取代程序中 jQuery 代码
 */

// 自己封装 ajax, 使用如下
ajax({
    url: '/get',
    type: 'Post',
    dataType: 'json',
    data: {
        id: '666'
    }
}).done(function () { })

// 封装旧的接口
var $ = {
    ajax: function (options) {
        return ajax(options)
    }
}

// 使用的是自己定义的 ajax
$.ajax({})