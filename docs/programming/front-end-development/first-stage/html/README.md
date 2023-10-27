# HTML基础

​		HTML基础可以直接查看由`W3Cschool`撰写的[HTML教程](https://www.w3cschool.cn/html/)，这里主要说一些HTML编程过程中常用的，需要注意的说明。

## 1、网站的版本

​		现在我们开发的网站觉得部分都是使用`HTML5`标准开发的，这篇文章提到的HTML指的并非`HTML5`，因此当你再看`W3Cschool`撰写的HTML教程时，需要注意这个点，有可能一些之前的标签已经被淘汰，淘汰的这些标签在日常的前端开发中一般也都不会使用到，或者被统一和替代。

## 2、HTML的语义化标签

​		`HTML`和`HTML5`中都有很多语义化、格式化的标签，它们就像Word文档中的各种文章的各类标注，例如加粗、下划线、删除线、引用、下标、上标等等，这些都是能够帮助网站规格有序的布局的标签，特别是在`SEO`（搜索引擎优化）方面和网站内容偏向内容的情况下——搜索引擎只会读取静态能够访问到的HTML内容，内容中有完整的标题、加粗等等语义化的内容，能够帮助搜索引擎和人更快更好的理解网站的内容，帮助你在诸如百度、谷歌、搜狗等搜索引擎中获得较高的搜索权重，在互联网网民搜索时，优先显示你的网站。

## 3、HTML的注释

​		注释在每种程序中都尤为重要，帮助开发人员和后续维护人员理解代码；而HTML的注释不仅能够为程序员提供提示，还能够为浏览器提示。下面时HTML的普通注释，用于提示开发人员：

```html
<!-- 此刻不显示图片：
<img border="0" src="/i/tulip_ballade.jpg" alt="Tulip">
-->
```

​		条件注释：

```html
<!--[if IE 8]>
    .... some HTML here ....
<![endif]-->
```

​		这段注释的意思表示当浏览器为`IE8`时，编译和执行内容的代码。

## 4、HTML的id、class、name

​		HTML中我们可以给标签自定义`id`、`class`、`name`用于标识标签，其中`id`和`name`主要用于标识标签，`id`属性一个页面中需要保持其唯一性，而`class`和`name`则可以重复，这里描述一下主要是使用场景，`id`用来标识标签的唯一性，我们在用`a`标签跳转内部锚点时，这个锚点一般就是页面中定义的`id`；我们在设置`class`和`js`监听标签时，去设置和监听某个单一标签是，也都是给标签定义一个`id`唯一值，来准确进行。——并且一个标签只能够定义。

​		`name`一般用于from表单中，最常使用的就是单选框，两个单选框我们需要定义一个name，然后根据这个name就可以得到哪个单选框被选中。

​		`class`一般用于重复相似的标签的标识，`class`能够让`css`将定义的样式渲染到标识了对应`class`的标签，另外之后我们在`JS`监听多个相同内容时，也可以根据`class`来监听。因为其可复用性，很多框架都是通过定义`class`框架样式，当我们需要使用到框架的样式时，直接定义对应的`class`属性，就能够继承其样式。

## 5、HTML的head

​		在`head`中，我们一般用来说明文档的概要信息，例如页面的标题，编码的格式、引入的文件。常见的在`head`标签里有以下标签：

```html
<html>
    <head>
        <title>标题</title>
        <meta chatset="uft-8"/>
        <meta name="description" content="描述" />
        <meta name="keywords" content="关键词1，关键词2，关键词3" />
        <link type="text/css" src="index.css" />
        <style>
        	/*css代码*/
        </style>
        <script src="index.js"></script>
        <script>
        	//js代码
        </script>
    </head>
</html>
```

​		我们看到其中有`title`、`meta`、`link`、`style`、`script`，`title`是一般网站必有的，`mate`标签叫做元数据，元数据并不会在用户浏览器有体现，但是对于机器来说是可以读的，在上面的例子中，我们通过`meta`定义了网站的编码的`utf-8`，定义了`description`描述，提供给搜索引擎爬取，定义了`keywords`提供给搜索引擎爬取的关键字；如果我们开发自适应（bootstrap）网站，也需要配置相关的`meta`。

​		再就外部样式和脚本的引入，一边拿就是引入`css`样式文件和`js`样式文件，当然也可以直接在页面中编写`css`代码和`js`代码。

​		一般我们的样式文件引入和外部样式撰写都是在`head`中，而脚本代码，如果脚本文件中的脚本没有依赖或者要监听`html`的标签和内容，那么可以在`head`中引入。一般开发，脚本会在`html`内容后，`body`内引入。



## 6、HTML CSS

​		现在的`HTML`很大一部分的页面效果我们都统一通过`CSS`来实现，而不是通过`HTML`的标签，例如`font`、`center`、`strike`等标签，还有一些标签属性，如`color`和`bgcolor`属性。

​		现在的开发会尽力的将美化工作全权交由`CSS`，而`CSS`则尽量通过`class`的方式编写，细分化不同的样式类管理，这样使得我们在开发中或者后续维护的时候，会非常便利，例如想要修改页面中的主色调，主色调会在页面的各个不同标签中使用，这时候我们单纯为这么一个主色调定义一个样式类，后续我们想要修改主色调时，所有不同标签都使用了这个样式类的标签，都会修改主色调。



## 7、HTML的符号

​		HTML的符号常用的主要就是空格、版权、商标符。

| 字符     | 描述 | 效果   |
| -------- | ---- | ------ |
| `&nbsp;` | 空格 | &nbsp; |
| `&#169;` | 版权 | &#169; |
| `&#174;` | 商标 | &#174; |

​		详细的可以查看[符号表](https://www.w3cschool.cn/html/html-copyright.html)

## 8、HTML的图像

​		`HTML`使用`img`标签来显示图像，也标识图像，一般图像按照下面的方式构成：

```html
<img src="logo.png/jpg/gif" alt="当图片加载失败时显示的内容" title="图片的描述">
```

​		`img`标签是一个行内元素，如果宽度不够不会独自占一行。

​		HTML中在`img`的基础上还有一个拓展标签map，它的功能是通过正方形的四个位置坐标定义一块区域，搭配area标签提供img图片不同区域的分别跳转。（这种能力现在一般被H5的Canvas画板代替）

​		具体实现代码如下：

```html
<img src="demo.jpg" usemap="#planetmap" />

<map name="planetmap"> <!--name对应img的usemap的锚点值-->
    <area shape="rect" coords="0,0,82,126" alt="Sun" href="sun.gif" />
    <area shape="circle" coords="124,58,8" alt="Venus" href="venglobe.gif">	<!--点击了选取后会弹出href图片新窗口-->
</map>
```

## 9、HTML的列表

​		常用的就是`ul`，一般重复类似的内容使用ul，例如轮播图内的每个轮播图图片，就会使用ul，不过随着弹性盒子和H5新增的语义化标签，很多时候开发都是使用这些语义化标签和使用`div`(盒子标签)，结合class类实现页面效果。

## 10、HTML区块

​		`HTML`元素分为两大类，一类是块级元素，一类是内联元素。一般都是块级元素包裹内链元素。因为块级元素默认宽度是占据一行，并且能够通过`css`自定义看高度等；而内联元素的高宽度则是根据标签内内容的高宽度自动匹配的，当多个内联元素的宽度相加都不超过一行的宽度时，内联元素间时不会换行显示的，并且我们也不能够通过自定义标签的宽高度，只能够通过修改其内容的高宽度来让其自动适配。

​		常见的块级元素：`h1`,`p`,`div`等。常见的内联元素：`b`,`td`,`a`等

​		在实际开发中我们可能会遇到这样一个需求，例如`a`标签，我需要它编程一个按钮的形式，但是它是一个内联标签，不能够自定义高宽度，这时我们可以通过设置该`a`标签的`css`样式的`display`，来实现块级元素和内联元素等不同类型元素的转换，例如：

```html
<a href="#" style="display: block;width:120px;height:60px;background-color:red;">button</a> <!--内联元素转块级元素-->
<div style="display: inline">div</div><div style="display: inline">div</div>
```

​		假如我们想要标签能够设置宽高，同时又不会占据一行时，可以设置为`inline-block`元素类型：

```
<a href="#" style="display: inline-block;width:120px;height:60px;background-color:red;">button</a> <!--内联块元素转块级元素-->
```

​		另外还有一种在H5开发中常常会用到的弹性盒子类型`flex`，它能够根据外部弹性盒子（块级元素）的宽度，分配被包裹标签（不管的块级元素还是其他的任何类型的元素）的宽度，并且能够配置其对其方式、排序方式等等。

```html
<div style="display: flex; justify-content: center; align-items: center;">
    <div style="width: 100px; height: 100px; background-color: red;">1</div>
    <div style="width: 100px; height: 100px; background-color: blue;">2</div>
</div>
```

​		上面知识弹性盒子一个简单的实例，后续我们会详细讲一下弹性盒子的各种参数和开发时会怎么使用。

## 11、网站的布局方式

​		`HTML4.1`的网站布局一般通过普通的`div`盒子布局和`table`表格，搭配class类型进行布局，现阶段标准和推荐的是使用H5的布局语义化标签，搭配弹性盒子进行布局。
