(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{437:function(t,a,e){"use strict";e.r(a);var v=e(14),c=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"官-说说微信小程序中路由跳转的方式有哪些-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官-说说微信小程序中路由跳转的方式有哪些-区别"}},[t._v("#")]),t._v(" 官：说说微信小程序中路由跳转的方式有哪些？区别？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/52bd3820-31a5-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),a("p",[t._v("微信小程序拥有"),a("code",[t._v("web")]),t._v("网页和"),a("code",[t._v("Application")]),t._v("共同的特征，我们的页面都不是孤立存在的，而是通过和其他页面进行交互，来共同完成系统的功能")]),t._v(" "),a("p",[t._v("在微信小程序中，每个页面可以看成是一个"),a("code",[t._v("pageModel")]),t._v("，"),a("code",[t._v("pageModel")]),t._v("全部以栈的形式进行管理")]),t._v(" "),a("h2",{attrs:{id:"二、有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、有哪些"}},[t._v("#")]),t._v(" 二、有哪些")]),t._v(" "),a("p",[t._v("常见的微信小程序页面跳转方式有如下：")]),t._v(" "),a("ul",[a("li",[t._v("wx.navigateTo(Object)")]),t._v(" "),a("li",[t._v("wx.redirectTo(Object)")]),t._v(" "),a("li",[t._v("wx.switchTab(Object)")]),t._v(" "),a("li",[t._v("wx.navigateBack(Object)")]),t._v(" "),a("li",[t._v("wx.reLaunch(Object)")])]),t._v(" "),a("h3",{attrs:{id:"wx-navigateto-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-navigateto-object"}},[t._v("#")]),t._v(" wx.navigateTo(Object)")]),t._v(" "),a("p",[a("code",[t._v("wx.navigateTo()")]),t._v("用于保留当前页面、跳转到应用内的某个页面，使用 "),a("code",[t._v("wx.navigateBack")]),t._v("可以返回到原页面")]),t._v(" "),a("p",[t._v("对于页面不是特别多的小程序，通常推荐使用 "),a("code",[t._v("wx.navigateTo")]),t._v("进行跳转， 以便返回原页面，以提高加载速度。当页面特别多时，则不推荐使用")]),t._v(" "),a("p",[t._v("参数表如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/5e524ea0-31a5-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),a("p",[t._v("流程图如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/68f033e0-31a5-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"wx-redirectto-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-redirectto-object"}},[t._v("#")]),t._v(" wx.redirectTo(Object)")]),t._v(" "),a("p",[t._v("重定向，当页面过多时，被保留页面会挤占微信分配给小程序的内存，或是达到微信所限制的 10 层页面栈的情况下，我们应该考虑选择 "),a("code",[t._v("wx.redirectTo")])]),t._v(" "),a("p",[a("code",[t._v("wx.redirectTo()")]),t._v("用于关闭当前页面，跳转到应用内的某个页面")]),t._v(" "),a("p",[t._v("这样的跳转，可以避免跳转前页面占据运行内存，但返回时页面需要重新加载，增加了返回页面的显示时间")]),t._v(" "),a("p",[t._v("参数表如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/76066c20-31a5-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),a("p",[t._v("流程图如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/828c4b40-31a5-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"wx-switchtab-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-switchtab-object"}},[t._v("#")]),t._v(" wx.switchTab(Object)")]),t._v(" "),a("p",[t._v("跳转到 "),a("code",[t._v("tabBar")]),t._v("页面，并关闭其他所有非 "),a("code",[t._v("tabBar")]),t._v(" 页面")]),t._v(" "),a("p",[t._v("参数表如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/968869d0-31a5-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"wx-navigateback-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-navigateback-object"}},[t._v("#")]),t._v(" wx.navigateBack(Object)")]),t._v(" "),a("p",[a("code",[t._v("wx.navigateBack()")]),t._v(" 用于关闭当前页面，并返回上一页面或多级页面，开发者可通过 "),a("code",[t._v("getCurrentPages()")]),t._v(" 获取当前的页面栈，决定需要返回几层则设置对象的"),a("code",[t._v("delta")]),t._v("属性即可")]),t._v(" "),a("p",[t._v("参数表如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/a28d8030-31a5-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"wx-relaunch-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-relaunch-object"}},[t._v("#")]),t._v(" wx.reLaunch(Object)")]),t._v(" "),a("p",[t._v("关闭所有页面，打开到应用内的某个页面，返回的时候跳到首页")]),t._v(" "),a("p",[t._v("流程图如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/accca3a0-31a5-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),a("p",[t._v("参数表如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/b98c7e80-31a5-11ec-8e64-91fdec0f05a1.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"三、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[t._v("#")]),t._v(" 三、总结")]),t._v(" "),a("p",[t._v("关于上述五种跳转方式，做下总结：")]),t._v(" "),a("ul",[a("li",[t._v("navigateTo 保留当前页面，跳转到应用内的某个页面，使用 wx.navigateBack 可以返回到原页")]),t._v(" "),a("li",[t._v("redirectTo 关闭当前页面，跳转到应用内的某个页面")]),t._v(" "),a("li",[t._v("switchTab 跳转到 tabBar 页面，同时关闭其他非 tabBar 页面")]),t._v(" "),a("li",[t._v("navigateBack 返回上一页面")]),t._v(" "),a("li",[t._v("reLanch 关闭所有页面，打开到应用内的某个页面")])]),t._v(" "),a("p",[t._v("其中关于它们的页面栈的关系如下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("avigateTo 新页面入栈")])]),t._v(" "),a("li",[a("p",[t._v("redirectTo 当前页面出栈，新页面入栈")])]),t._v(" "),a("li",[a("p",[t._v("navigateBack 页面不断出栈，直到目标返回页，新页面入栈")])]),t._v(" "),a("li",[a("p",[t._v("switchTab 页面全部出栈，只留下新的 Tab 页面")])]),t._v(" "),a("li",[a("p",[t._v("reLanch 页面全部出栈，只留下新的页面")])])]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[t._v("https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html")])])])}),[],!1,null,null,null);a.default=c.exports}}]);