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

## 12、HTML的表单

​		HTML表单需要注意的是表单的校验和表单的提交方式，先来说说一下表单的校验：

1. 表单校验

   在实际开发中，表单如果提供了校验能够，往往能够杜绝很大一部分粗错误信息的提交，好处包括：

   - 即时提醒用户信息的错误
   - 减少错误信息提交，减轻服务器压力
   - 提高安全性，将一些非法语句内容杜绝在前端页面中，减少后端处理非法语句的可能。

   数据校验有几种方式：

   - 表单单项标签定义必填、正则等校验。
   - 监听表单`onsubmit`,统一校验表单信息。
   - 监听表单单项标签onblur、oninput等动作，触发校验。

   在提交时进行一次最终的（前端）校验时必须的，在此基础上如果希望给用户提供即使的输入反馈，就可以使用单项的校验方法，提高用户体验。

   实例：

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <h1>测试表单</h1>
       <hr>
       <h2>普通表单</h2>
       <form id="ptbd" action="#" method="get">
           <input type="text" name="username" placeholder="请输入用户名" required>
           <input type="password" name="password" placeholder="请输入密码" required>
           <input type="submit" value="登录">
       </form>
       <br>
       <hr>
       <h2>统一校验函数表单</h2>
       <form id="tyjyhsbd" action="#" method="get" onsubmit="return checkForm()">
           <input type="text" name="username" placeholder="请输入用户名">
           <input type="password" name="password" placeholder="请输入密码">
           <input type="submit" value="登录">
       </form>
       <br>
       <hr>
       <h2>单独校验函数表单</h2>
       <form id="ddjyhsbd" action="#" method="get" onsubmit="">
           <input type="text" name="username" placeholder="请输入用户名" onblur="checkInput('username')">
           <input type="password" name="password" placeholder="请输入密码" onblur="checkInput('password')">
           <input type="submit" value="登录">
       </form>
       <br>
       <hr>
       <script>
           function checkForm(){
               // 获取统一校验函数表单
               var tyjyhsbd = document.getElementById('tyjyhsbd');
               console.log(tyjyhsbd);
               // 获取统一校验函数表单的用户名输入框
               var username = tyjyhsbd.querySelectorAll('[name="username"]')[0];
               // 获取统一校验函数表单的密码输入框
               var password = tyjyhsbd.querySelectorAll('[name="password"]')[0];
               // 获取统一校验函数表单的用户名输入框的值
               var usernameValue = username.value;
               // 获取统一校验函数表单的密码输入框的值
               var passwordValue = password.value;
               // 判断统一校验函数表单的用户名输入框的值是否为空
               if(usernameValue == ''){
                   // 提示用户名不能为空
                   alert('用户名不能为空');
                   // 阻止表单提交
                   return false;
               }
               // 判断统一校验函数表单的密码输入框的值是否为空
               if(passwordValue == ''){
                   // 提示密码不能为空
                   alert('密码不能为空');
                   // 阻止表单提交
                   return false;
               }
               // 提示统一校验函数表单的用户登录成功
               alert('登录成功');
               // 阻止统一校验函数表单的表单提交
               return true;
           }
   
           function checkInput(input) {
               var ddjybd = document.getElementById('ddjyhsbd');
               var _input = ddjybd.querySelectorAll(`[name="${input}"]`)[0];
               if ( _input.value == '' ) {
                   alert('不正确');
                   return false;
               }
           }
       </script>
   </body>
   </html>
   ```

   在后续的一些框架开发中（例如`vue`），还会单据的表单校验功能，通过对象的方法对象哪些表单通过那种方法进行校验。

2. 表单提交

   表单提交是前后端交互的重要一环，在项目中我们需要与后端开发人员沟通数据的提交方式，基础的方式包括：

   - `get`——一般用来提交数据量少且不需要隐蔽的数据。
   - `post`——一般用来提交数据量大，需要不可视化的数据，表单信息一般都使用。

   拓展的一些数据提交方法（可以理解为数据提交方式的语义化拓展）：

   - `put`——向指定资源位置上上传其最新内容
   - `Delete`——请求服务器删除request-URL所标示的资源*（请求服务器删除页面）

   **注意：所有的`http`提交方式可参考[HTTP的8种请求方式及常用请求方式的解析](https://blog.csdn.net/weixin_48520816/article/details/125274160)**

   当我们确定了提交方式后，就可以选中在前端应该怎么触发提交，触发的方式包括：

   - `form`默认`submit`——会刷新前端页面

   - 禁用或者不触发`form`默认`submit`，通过`JS`拿到表单数据，通过`ajax`提交数据——默认不会刷新页面。

     提到`ajax`提交数据就需要延伸出一个概念，异步和同步：

     - 异步——不与`JS`正常执行流一同执行，单独分出一线程执行，简单的说就是异步语句后的内容不会等异步语句执行完才执行，而是同时执行。**需要注意后续代码中会不会使用到异步请求返回的数据，如果需要就需要使依赖语句在其之后执行。**
     - 同步——执行完成后，才执行之后的方法。

     我们通过`form`提交数据就是一种同步请求，而`ajax`主要用于异步请求（也可以设置同步请求），他所提供的能力就是模仿发送`http`请求，这个过程中可以提交数据、获取返回数据，并通过`JS`将返回的数据，在不刷新的情况下替换到页面中。

     `ajax`技术在现在的网站中很常见，举例一些实际的业务场景：

     ​		浏览一个电影列表网页，因为服务器资源有限，并且用户进入电影列表页，一页只有20条电影信息，那么最开始加载时，就没有必要一次性将几千几万条电影数据都传到网页中，这会导致服务器资源占用很高，用户初始化打开也会很慢；

     这时，如果用户想要浏览下一页的内容，可以通过直接跳转第二页的地址，进入第二页，但是第二页的网页内容除了电影信息意外，其他资源和第一页完全一样，这样子就变成为了变换一小部分信息，却要重写加载已有的信息，首先是页面加载会变慢，然后用户持续翻页就会持续让服务器发送相同的内容，导致耦合性高的性能使用。

     ​		这时，我们就可以使用`ajax`进行请求，与后端沟通协调，写一个专门提供翻页信息的数据接口，当前端监听到用户点击下一页时，就发送请求，拿到后端返回的单独电影数据，前端在原有的基础上，将第一页的内容取消显示，第二页的内容添加进去并显示，这样就保证了之前的静态资源一直保留，不会重复的加载，浪费资源和时间。

## 13、HTML的框架

​		这里的框架指的不是像`vue`、`Angular`、`React`、`bootstrap`等“框架”，而是`HTML`原生提供的将其他文档嵌入到一个文档的框架标签`iframe`，现在的项目开发中还是比较少用的，缺点包括：

1. 样式编辑标签监听等不方便——被嵌入的网页是另外一个文档集合，在本文档中是无法操控的；
2. `SEO`（搜索引擎优化）是负面影响的，搜索引擎无法爬取到`iframe`里的内容，网页中这一部分的内容就不能被搜索引擎视为有效的内容；
3. 网页加载时间加长，在一个文档里加载内容与通过`iframe`加载内容区别在于后者是作为单独的个体（有自己的`html`、`css`、`js`代表需要多次请求服务器），`iframe`标签本身也会产生更多的性能占用。
4. `iframe`还需要考略到跨域问题、安全性问题等。

​		好处就是可以直接拼接已有的页面内容。

## 14、HTML的颜色

​		HTML颜色可以通过以下几种方式表示：

1. `rgb`rgb颜色
2. `rgba`rgb颜色并提供透明度设置
3. #16进制颜色
4. 常见的颜色英文

例如：

```html
<!DOCTYPE html>
<html>
<body>

<p style="background-color:#FFFF00">
通过十六进制设置背景颜色
</p>

<p style="background-color:rgb(255,255,0)">
通过 rgb 值设置背景颜色
</p>

<p style="background-color:rgba(255,255,0,0.5)">
通过 rgba 值设置背景颜色和透明度
</p>

<p style="background-color:yellow">
通过颜色名设置背景颜色
</p>

</body>
</html>
```

颜色还可以使用编辑器提供的类似于PS的颜色选择器，例如`VSCode`、`HbuildX`等编辑器都有这个功能。



## 15、HTML的脚本

​		脚本指的是`Javascript`，在`html`我们想要编写脚本可以在`html`标签内编写，也可以单独编写一个脚本文件，然后引入到`html`中。补充——在面试时和实际开发中我们总会遇到关于脚本引入脚本加载和执行顺序的问题，例如：为什么大部分项目`CSS`文件放在`head`里，`javascript`要放在body标签后面？位置不同会有什么影响等原理问题；以及我们应该怎么样做，能够优化性能；详细可以阅读 [浏览器渲染机制，及其优化方法]()。

​		在HTML添加脚本：

```html
<!DOCTYPE html>
<html>
    <head>
		<script>
        	document.write("Hello World!")
        </script>
    </head>
    <body>

    <p style="background-color:#FFFF00"  onclick ="myFunction()">
    通过十六进制设置背景颜色
    </p>

    <p style="background-color:rgb(255,255,0)" onclick="console.log(2)">
    通过 rgb 值设置背景颜色
    </p>

    <p style="background-color:rgba(255,255,0,0.5)">
    通过 rgba 值设置背景颜色和透明度
    </p>

    <p style="background-color:yellow">
    通过颜色名设置背景颜色
    </p>
	<script>
    	document.write("Hello World!")
        function myFunction(){
            console.log(1)
        }
    </script>
    <script src="./index.js"></script>
    </body>
</html>
```

​		可以看到，在页面我们通过创建一个`script`标签，在其内部编写脚本代码，可以在`html`标签内的所有地方（一般我们会放在所有标签后引入和编写）；还可以单独创建一个`JS`文件，然后通过`script`标签，设置其`src`属性引入`JS`文件；另外，我们的标签提供了监听动作方法属性，属性值也是脚本内容，他会自动关联页面内编写的和引入的脚本。



## 16、URL地址

​		我们访问网站是，你会发现他是一种名称的形式，可能有前缀、可能有后缀，例如：

```
地址模板：
scheme://host:domain:port/path/filename

常见地址：
https:www.baidu.com
```

​		上面这个地址是一个我们很熟悉的百度的`https`地址，它分为：

1. 因特网服务的类型——scheme

   因特网的服务类型有很多，常见的包括`http`、`https`、`ftp`、`Email`等。

2. 域主机——host

   `http`默认是`www`，我们在访问域名时，也可以不输入`www`，或者自定义解析一些二级主机。

3. 域名——domain

   域名是一种代理，域名也是运行在域名服务器中的，当我们访问域名时，域名服务器就会将域名代理的内容返回，例如我们访问`yuhypw.cn`，它就会返回域名解析中设定的`ip`地址，我们浏览器实际访问的是`ip`地址对应服务器服务的内容。

4. 端口——port

   `http`默认是访问80端口，`https`服务默认端口是443端口。

5. 路径——path

   定义服务路径，如果不输入，就需要文档处于网站的根目录中。

6. 文档或资源名称——filename

   顾名思义，文档后者资源名称。

​		我们的URL域名并不是必要的，我们可以直接通过`IP`地址加端口加路径的方式去访问服务，之所以用`IP`，主要作用是为了方便对外推广和记忆，例如www.baidu.com，域名就是百度的拼音，如果没有域名的话，我们就需要记忆12位的`IPv4`或者更长的`IPv6`地址。

​		其次，我们域名不单单是代理一个地址，我们还可以定义二级域名、三级域名整合我们不同的服务。

​		另外，URL使用的是ASCII字符集，有时我们访问用中文定义文档文件的测试网站时，你会发现中文地址变成了编码形式，这就是因为URL默认时ASCII字符串，浏览器实际访问时的URL的值是ASCII编码，而能够正确显示中文的可能是`UTF-8`编码，或者`GBK`等中文编码格式——要注意的是，中文转成ASCII编码会变成3~4个字节，也就是表示中文路径往往比较长，而我们使用的浏览器往往对地址的长度有限制，例如：

1. IE浏览器对URL的长度现限制为2048字节。
2. 360极速浏览器对URL的长度限制为2118字节。
3. Firefox(Browser)对URL的长度限制为65536字节。
4. Safari(Browser)对URL的长度限制为80000字节。
5. Opera(Browser)对URL的长度限制为190000字节。
6. Google(chrome)对URL的长度限制为8182字节。

​		如果长度超过，浏览器就会自动截取，可能会报错，可能会出现访问路径错误等问题；因此一般我的线上项目文件都是使用英文、下划线、数字来命名。



## 17、XHTML

​		`XHTML`其实就是严格语法模式的HTML，一般的`HTML`、`HTML5`代码，你少一个结尾标签、不写`html`标签等，标签小写、大写、混合写、浏览器都会自动的帮你补充，并且不会报错。

​		而`XHTML`会要求代码必须严格按照标准编写，包括文档申明、基础标签、正确的嵌套关系、标签必须小写、不可以简写等。



## 18、总结

​		前端开发最为基础的基础技术：`HTML`、`CSS`、`JAVASCTIPT`，分别对应文档框架、样式美化、交互脚本。一般这三种技术实现出来的应用为B/S架构应用（即浏览器和服务器架构），实现的项目分为静态和动态，动态指的是前端应用数据是否与后端或者数据库连接，项目需要运行在服务器（个人主机、服务器、云服务器）上，服务器需要知道其`IP`地址（或者个人主机可以使用内网穿透）并暴露出来对外公开服务（在中国，一般是一块区域公用一个`IPv4`地址，个人使用的`IPv4`是再分配的内网`IPv4`地址，设置是动态分配的地址，因此如果是物理服务器、个人主机想要提供对外服务，就需要问电信服务商自己的公网`IP`），静态项目表示不需要与后端或数据库交互，因此不用搭建服务环境；如果是动态项目就需要搭建应用服务器、构建后端、配置数据库，应用服务器是用来驱动一些请求，例如`ajax`请求，常见的应用服务器有：`Nginx`、`Apache`、`tomcat`等，在这些基础上，我们还需要注意服务器的安全问题（因为是对外服务，一定会出现被攻击问题）、项目的数据保护备份问题、项目性能、服务器性能优化等问题。
