(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{518:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"官-说说如何在-react-项目中应用-typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官-说说如何在-react-项目中应用-typescript"}},[t._v("#")]),t._v(" 官：说说如何在 React 项目中应用 TypeScript？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/a98974e0-13bc-11ec-a752-75723a64e8f5.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"一、前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),s("p",[t._v("单独的使用 "),s("code",[t._v("TypeScript")]),t._v(" 并不会导致学习成本很高，但是绝大部分前端开发者的项目都是依赖于框架的")]),t._v(" "),s("p",[t._v("例如与 "),s("code",[t._v("Vue")]),t._v("、"),s("code",[t._v("React")]),t._v(" 这些框架结合使用的时候，会有一定的门槛")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("TypeScript")]),t._v(" 编写 "),s("code",[t._v("React")]),t._v(" 代码，除了需要 "),s("code",[t._v("TypeScript")]),t._v(" 这个库之外，还需要安装 "),s("code",[t._v("@types/react")]),t._v("、"),s("code",[t._v("@types/react-dom")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @types/react "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @types/react-dom "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v("\n")])])]),s("p",[t._v("至于上述使用 "),s("code",[t._v("@types")]),t._v(" 的库的原因在于，目前非常多的 "),s("code",[t._v("JavaScript")]),t._v(" 库并没有提供自己关于 "),s("code",[t._v("TypeScript")]),t._v(" 的声明文件")]),t._v(" "),s("p",[t._v("所以，"),s("code",[t._v("ts")]),t._v(" 并不知道这些库的类型以及对应导出的内容，这里 "),s("code",[t._v("@types")]),t._v(" 实际就是社区中的 "),s("code",[t._v("DefinitelyTyped")]),t._v(" 库，定义了目前市面上绝大多数的 "),s("code",[t._v("JavaScript")]),t._v(" 库的声明")]),t._v(" "),s("p",[t._v("所以下载相关的 "),s("code",[t._v("JavaScript")]),t._v(" 对应的 "),s("code",[t._v("@types")]),t._v(" 声明时，就能够使用使用该库对应的类型定义")]),t._v(" "),s("h2",{attrs:{id:"二、使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、使用方式"}},[t._v("#")]),t._v(" 二、使用方式")]),t._v(" "),s("p",[t._v("在编写 "),s("code",[t._v("React")]),t._v(" 项目的时候，最常见的使用的组件就是：")]),t._v(" "),s("ul",[s("li",[t._v("无状态组件")]),t._v(" "),s("li",[t._v("有状态组件")]),t._v(" "),s("li",[t._v("受控组件")])]),t._v(" "),s("h3",{attrs:{id:"无状态组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无状态组件"}},[t._v("#")]),t._v(" 无状态组件")]),t._v(" "),s("p",[t._v("主要作用是用于展示 "),s("code",[t._v("UI")]),t._v("，如果使用 "),s("code",[t._v("js")]),t._v(" 声明，则如下所示：")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" React "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"React"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Logo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" logo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" className"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" alt "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("logo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("className"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("但这时候 "),s("code",[t._v("ts")]),t._v(" 会出现报错提示，原因在于没有定义 "),s("code",[t._v("porps")]),t._v(" 类型，这时候就可以使用 "),s("code",[t._v("interface")]),t._v(" 接口去定义 "),s("code",[t._v("porps")]),t._v(" 即可，如下：")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" React "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"React"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IProps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  logo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  className"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  alt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Logo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" IProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" logo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" className"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" alt "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("logo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("className"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("但是我们都知道 "),s("code",[t._v("props")]),t._v(" 里面存在 "),s("code",[t._v("children")]),t._v(" 属性，我们不可能每个 "),s("code",[t._v("porps")]),t._v(" 接口里面定义多一个 "),s("code",[t._v("children")]),t._v("，如下：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IProps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  logo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  className"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  alt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ReactNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("更加规范的写法是使用 "),s("code",[t._v("React")]),t._v(" 里面定义好的 "),s("code",[t._v("FC")]),t._v(" 属性，里面已经定义好 "),s("code",[t._v("children")]),t._v(" 类型，如下：")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Logo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FC")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IProps"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" logo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" className"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" alt "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("logo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("className"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[s("p",[t._v("React.FC 显式地定义了返回类型，其他方式是隐式推导的")])]),t._v(" "),s("li",[s("p",[t._v("React.FC 对静态属性：displayName、propTypes、defaultProps 提供了类型检查和自动补全")])]),t._v(" "),s("li",[s("p",[t._v("React.FC 为 children 提供了隐式的类型（ReactElement | null）")])])]),t._v(" "),s("h3",{attrs:{id:"有状态组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有状态组件"}},[t._v("#")]),t._v(" 有状态组件")]),t._v(" "),s("p",[t._v("可以是一个类组件且存在 "),s("code",[t._v("props")]),t._v(" 和 "),s("code",[t._v("state")]),t._v(" 属性")]),t._v(" "),s("p",[t._v("如果使用 "),s("code",[t._v("TypeScript")]),t._v(" 声明则如下所示：")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" React "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"React"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IProps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IState")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IState"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Hello world")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("上述通过泛型对 "),s("code",[t._v("props")]),t._v("、"),s("code",[t._v("state")]),t._v(" 进行类型定义，然后在使用的时候就可以在编译器中获取更好的智能提示")]),t._v(" "),s("p",[t._v("关于 "),s("code",[t._v("Component")]),t._v(" 泛型类的定义，可以参考下 React 的类型定义文件 "),s("code",[t._v("node_modules/@types/React/index.d.ts")]),t._v("，如下所示：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Readonly"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ReactNode "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Readonly"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Readonly"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("从上述可以看到，"),s("code",[t._v("state")]),t._v(" 属性也定义了可读类型，目的是为了防止直接调用 "),s("code",[t._v("this.state")]),t._v(" 更新状态")]),t._v(" "),s("h3",{attrs:{id:"受控组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#受控组件"}},[t._v("#")]),t._v(" 受控组件")]),t._v(" "),s("p",[t._v("受控组件的特性在于元素的内容通过组件的状态 "),s("code",[t._v("state")]),t._v(" 进行控制")]),t._v(" "),s("p",[t._v("由于组件内部的事件是合成事件，不等同于原生事件，")]),t._v(" "),s("p",[t._v("例如一个 "),s("code",[t._v("input")]),t._v(" 组件修改内部的状态，常见的定义的时候如下所示：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChangeEvent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HTMLInputElement"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" itemText"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("常用 "),s("code",[t._v("Event")]),t._v(" 事件对象类型：")]),t._v(" "),s("ul",[s("li",[t._v("ClipboardEvent<T = Element> 剪贴板事件对象")]),t._v(" "),s("li",[t._v("DragEvent<T = Element> 拖拽事件对象")]),t._v(" "),s("li",[t._v("ChangeEvent<T = Element> Change 事件对象")]),t._v(" "),s("li",[t._v("KeyboardEvent<T = Element> 键盘事件对象")]),t._v(" "),s("li",[t._v("MouseEvent<T = Element> 鼠标事件对象")]),t._v(" "),s("li",[t._v("TouchEvent<T = Element> 触摸事件对象")]),t._v(" "),s("li",[t._v("WheelEvent<T = Element> 滚轮事件对象")]),t._v(" "),s("li",[t._v("AnimationEvent<T = Element> 动画事件对象")]),t._v(" "),s("li",[t._v("TransitionEvent<T = Element> 过渡事件对象")])]),t._v(" "),s("p",[s("code",[t._v("T")]),t._v(" 接收一个 "),s("code",[t._v("DOM")]),t._v(" 元素类型")]),t._v(" "),s("h2",{attrs:{id:"三、总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[t._v("#")]),t._v(" 三、总结")]),t._v(" "),s("p",[t._v("上述只是简单的在 "),s("code",[t._v("React")]),t._v(" 项目使用 "),s("code",[t._v("TypeScript")]),t._v("，但在编写 "),s("code",[t._v("React")]),t._v(" 项目的时候，还存在 "),s("code",[t._v("hooks")]),t._v("、默认参数、以及 "),s("code",[t._v("store")]),t._v(" 等等......")]),t._v(" "),s("p",[s("code",[t._v("TypeScript")]),t._v(" 在框架中使用的学习成本相对会更高，需要不断编写才能熟练")]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.cn/post/6952696734078369828",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6952696734078369828"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.cn/post/6844903684422254606",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6844903684422254606"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);