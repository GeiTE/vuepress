# HTML5简述

​		HTML5是最新大版本HTML的总称，HTML5任处于完善中，现阶段国内外浏览器都支持HTML5，基本上就IE9以下的浏览器才不支持，因此你完全可以使用HTML5规范及其特性进行所有项目的前端开发。

1. HTML5主要新增了以下特性：
   1. 用于绘画的Canvas元素——可以用来绘制图画、渲染图片、3D动效等
   2. 用于媒介播放的video和audio元素——video为视频元素、audio为音频元素，这两种代替了以前adobe的flash插件
   3. 对本地离线存储更好的支持——在原有Cookies基础上，添加LocalStorage和SessionStrage存储空间、本地SQL数据等
   4. 新的特殊内容元素——article、footer、header、nav、section等语义化元素，规范标签语义，不再只是提供文档语义标签
   5. 新的表单控件——calendar、date、time、email、url、search等，将之前需要自行编写的控件规范化
2. HTML5移除的元素：
   1. `acronym`——在`H4`中用来定义首字母缩写词，在`H5`中被`attr`标签代替
   2. `applet`——在`H4`中用来定义嵌入式小程序，在`H5`中被`object`标签代替
   3. `basefont`——在`H4`中，在`head`标签内设置文本默认的颜色和字体大小
   4. `big`——在`H4`中用来定义大号字体，作为被`strong`代替`b`
   5. `center`——在`H4`中用来包裹需要剧中对其的内容，可以直接使用`CSS`实现
   6. `dir`——在`H4`中用于列出目录标题
   7. `font`——在`H4`中用于指定字体、字体大小、文本颜色的标签，可以直接使用css实现
   8. `frame`——在`H4`中引入多个页面——性能、安全、动态性都不高
   9. `frameset`——用于包裹`frame`的容器
   10. `noframes`——用于在浏览器不支持`frame`时提示
   11. `strike`——在`H4`中用来定义删除线，在`H5`中被`del`代替
   12. `tt`——在`H4`中标签用来改变字体样式，使标签中的文本显示为打字机文本

​		`HTML5`我们一般会搭配`CSS3`，例如弹性盒子、动效、阴影、2D、3D等等，这些内容在之后的[CSS3简述]()中会详细说明。

## 1、浏览器支持问题

​		上面提到，HTML5兼容到IE9浏览器，而IE9其实是不支持我们H5常用的弹性盒子布局，因此不应该说是兼容，应该说是部分兼容，那再这种情况下，如果我们需要使用到HTML5的新特性应该怎么做？方法当然是**“教会”**浏览器处理**"未知"**的HTML元素，也就是自定义或者使用官方提供的补充插件，去帮助老版浏览器理解HTML5新特性，例如：

1. 

1. HTML5的语义化元素

   再不兼容HTML5的IE8以下版本，是不理解新增的语义化元素的，我们如果想要这些元素与支持浏览器显示的效果一直，就需要通过css将其转换为块元素。

   ```css
   header, section, footer, aside, nav, main, article, figure {
      display: block;
   }
   ```

   当浏览器不认识该标签时，默认都是内联的，因此我们需要补充定义其为块级元素。定义之后至少在IE8以下中，基础样式是相同的，不会出现内联包裹块级元素的情况。

2. 按需引入补充插件（在Head中引入）

   ```html
   //goggle资源库
   <!--[if lt IE 9]>
     <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js" rel="external nofollow" ></script>
   <![endif]-->
   
   //国内资源库
   <!--[if lt IE 9]>
     <script src="http://apps.bdimg.com/libs/html5shiv/3.7/html5shiv.min.js" rel="external nofollow" rel="external nofollow" ></script>
   <![endif]-->
   ```

   

## 2、HTML5的图形和绘画

​		在HTML5中，新增了关于绘画的Canvas标签以及关于内联矢量图形的SVG，Canvas类似于我们使用的PS的画布面板，你可以在上面绘制文字、图像、形状等都是数位图；而SVG则类似于我们使用的AI的画布面板，你也可以绘制文字、图像、形状等，不过都是矢量图；

​		这也就表示，如果我们在Canvas中绘制一个图案，如果放大就修改原始分辨率，否则就会出现不清晰的情况。而如果是使用的SVG绘制的图案，放大了只会按照原有的逻辑绘制图形，不会失真。

### SVG 与 Canvas两者间的区别

SVG 是一种使用 XML 描述 2D 图形的语言。

Canvas 通过 JavaScript 来绘制 2D 图形。

SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。

在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。

Canvas 是逐像素进行渲染的。在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

### Canvas 与 SVG 的比较

下表列出了 canvas 与 SVG 之间的一些不同之处。

| Canvas                                             | SVG                                                     |
| :------------------------------------------------- | :------------------------------------------------------ |
| 依赖分辨率                                         | 不依赖分辨率                                            |
| 不支持事件处理器                                   | 支持事件处理器                                          |
| 弱的文本渲染能力                                   | 最适合带有大型渲染区域的应用程序（比如谷歌地图）        |
| 能够以 .png 或 .jpg 格式保存结果图像               | 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快） |
| 最适合图像密集型的游戏，其中的许多对象会被频繁重绘 | 不适合游戏应用                                          |

### 创建一个Canvas画板、SVG图像

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <canvas id="my-canvas" width="200" height="200"></canvas>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
          <polygon points="100,10 40,180 190,60 10,60 160,180" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;">
        </svg>
        <script>
        	var myCanvas = document.getElementById("my-canvas");
            var ctx = myCanvas.getContext("2d");
            // 绘制一个红色矩形
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(0,0,150,75);
        </script>
    </body>
</html>
```

​		从我个人经验来看，Canvas一般用于制作交互的2D、3D动画和游戏；而SVG一般用来制作精美图标，一般SVG我们不会绘制过于复杂的图形。复杂的图形显示对于电脑的性能比较高，浏览器渲染的时间也更长。复杂的内容我们一般会使用数位图，也就是Canvas。



## 3、MathML公式标记语言

​		MathML是为了补充和整合HTML中数据公式显示的能力，在HTML4我们都是直接在文档的span标签里编写，在搭配`sub`、`sup`上标下标标签对数学公式进行编写，但是这种方式任然只能够编写一些简单的公式，复杂的其他数学符号我们就无法定义了，一般会通过图片的形式展示。

​		因此W3C在1998年就以XML为基础，开发了MathML这个标准，在2015年时成为了HTML5的一部分。具体的所使用的标签就不在此赘述，有相关需求的可以进入[MathML快速指南](http://www.vue5.com/mathml/mathml_quick_guide.html)中查看，这里简单写个例子：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
      	<title>测试</title>
    </head>
    <body>
        <math xmlns="http://www.w3.org/1998/Math/MathML">
        	<mrow>
            	<msup><mi>a</mi><mn>2</mn></msup>
                <mo>+</mo>
                <msup><mi>b</mi><mn>2</mn></msup>
                <mo>=</mo>
                <msup><mi>c</mi><mn>2</mn></msup>
            </mrow>
        </math>
    </body>
</html>
```



## 4、HTML5的拖动

​		拖动的目的是可以让你将某个对象放置到你想要放置的地方，例如我现在有这样的需求：我想要做一个个人目标日历，在左侧有我所有的目标，我可以通过拖动将目标放在每列（表示不同日期），来表示某个目标的目标完成日期的什么时候，就像我们在日历上写未来那天会发生的事情一样。

​		拖动概念上说，就是监听两个对象，一个是拖入的容器，一个是被拖动的标签；

1. 首先我们需要标注给浏览器知道，被拖动的标签是哪个。通过标签添加`draggable="true"`属性，表示该标签是可拖动的标签。
2. 然后是定义拖动后的动作，通过监听被拖动标签的`ondragstart="fnName(event)"`，触发`fnName()`方法，方法里面使用`event`标签的`dataTransfer.setData`方法，设置被拖动的数据类型和值，类似于搬运货物前，我们明确了货物的类型和名字。
3. 然后是定义放在何处，也就是定义拖入的容器，使得容器能够被拖入标签，通过监听标签的`ondragover="fnName(evnet)"`属性，表示当可拖动元素或选取的文本正在被拖动到放置目标时触发；触发`fnName()`方法后，方法里面使用`event`标签的`preventDefault()`方法，用以阻止元素的默认方法，使其运行放置。
4. 进行放置的动作，监听放置的容器的`ondrop="fuName(event)"`，表示当放置容器被拖入数据时触发`fuName()`方法，方法里首先调用`preventDefault`方法，避免执行浏览器对数据的默认处理，然后通过`dataTransfer.getData()`方法获取到被拖动的数据，这里对应第二部我们调用的`dataTransfer.setData`，然后我们使用`target.appendChild`方法将被拖动的数据添加到被拖入的容器中。

例子：

```html
<!DOCTYPE HTML>
<html>
<head>
<script>
function allowDrop(ev)
{
ev.preventDefault();
}

function drag(ev)
{
ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
ev.target.appendChild(document.getElementById(data));
}
</script>
</head>
<body>

<div id="div1" ondrop="drop(event)"
ondragover="allowDrop(event)"></div>

<img id="drag1" src="img_logo.gif" draggable="true"
ondragstart="drag(event)" width="336" height="69">

</body>
</html>
```



### 拖动的整个过程

**注意：** 为了让元素可拖动，需要使用 HTML5[draggable](https://www.w3cschool.cn/htmltags/att-global-draggable.html) 属性。

**提示：** 链接和图片默认是可拖动的，不需要 draggable 属性。

在拖放的过程中会触发以下事件：

- 在拖动目标上触发事件(源元素):
  - [ondragstart](https://www.w3cschool.cn/jsref/event-ondragstart.html) - 用户开始拖动元素时触发
  - [ondrag](https://www.w3cschool.cn/jsref/event-ondrag.html) - 元素正在拖动时触发
  - [ondragend](https://www.w3cschool.cn/jsref/event-ondragend.html) - 用户完成元素拖动后触发
- 释放目标时触发的事件:
  - [ondragenter](https://www.w3cschool.cn/jsref/event-ondragenter.html) - 当被鼠标拖动的对象进入其容器范围内时触发此事件
  - ondragover - 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
  - [ondragleave](https://www.w3cschool.cn/jsref/event-ondragleave.html) - 当被鼠标拖动的对象离开其容器范围内时触发此事件
  - [ondrop](https://www.w3cschool.cn/jsref/event-ondrop.html) - 在一个拖动过程中，释放鼠标键时触发此事件

**注意：** 在拖动元素时，每隔 350 毫秒会触发 ondragover 事件。

## 5、H5的地理位置

​		地理位置`Geolocation`获取依赖于浏览器，每个浏览器默认请求的定位不同，例如谷歌浏览器默认会请求谷歌定位服务，你如果没有外网就访问不了。

​		获取地理位置定位通过`getCurrentPisition()`方法，方法会返回一个包含经纬度的位置信息，因为涉及到用户的隐私，因此浏览器一般获取定位时都会提示用户是否确认同意被获取位置信息。

​		**注意`Geolocation`对于用于GPS的设备，比如Iphone，地理定位更加精确。**

​		在国内使用这个服务，误差还是挺大的，有700米左右的误差，在笔记本中使用Edge浏览器，我未开启定位功能误差在730左右，开了定位功能后误差在700作为——华硕笔记本；在微信浏览器中，不开启位置信息功能无法获取到坐标，开启后误差在700左右。——红米K60至尊版。

| 设备                                      | 使用浏览器Geolocation服务获取经纬度 | 设备直接访问地图服务 |
| ----------------------------------------- | ----------------------------------- | -------------------- |
| 笔记本（开启定位服务）                    | 误差700米                           | 误差700米            |
| 笔记本（未开启定位服务）                  | 误差730米                           | 误差730米            |
| 安卓手机（红米K60至尊版）                 | 误差700米                           | 误差50米             |
| 安卓手机（红米K60至尊版——未开启定位服务） | 无法获取                            | 无法获取             |

​		手机使用浏览器获取经纬度和直接访问地图服务的对比最大，可以得知单纯通过`Geolocation`服务获取的位置信息误差挺大，在国内我想无法作为汽车驾驶服务的完全依赖数据。

​		在实际开发中，外面想要做地图和导航时，一般都是调用第三方地图服务商的接口，例如百度、腾讯、高德等，并且提供到访服务时，最好是跳转到服务商的手机APP中，其定位和导航服务更加准确。

​		下面是获取经纬度的简单实例：

```html
<script>
var x=document.getElementById("demo");
function getLocation()
  {
  if (navigator.geolocation)	// 浏览器是否支持navigator.geolocation
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="该浏览器不支持获取地理位置。";}
  }
function showPosition(position)
  {
  x.innerHTML="Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  }
</script>
```



## 6、Video和Audio

​		HTML5的视频和音频，视频通过`video`标签定义，音频通过`audio`定义，他们的一些进度控制、数据预加载、直接播放等发放类似。

### 浏览器Video资源兼容性

| 浏览器               | MP4  | WebM | Ogg  |
| :------------------- | :--- | :--- | :--- |
| Internet Explorer 9+ | YES  | NO   | NO   |
| Chrome 6+            | YES  | YES  | YES  |
| Firefox 3.6+         | NO   | YES  | YES  |
| Safari 5+            | YES  | NO   | NO   |
| Opera 10.6+          | NO   | YES  | YES  |

- MP4 = 带有 H.264 视频编码和 AAC 音频编码的 MPEG 4 文件
- WebM = 带有 VP8 视频编码和 Vorbis 音频编码的 WebM 文件
- Ogg = 带有 Theora 视频编码和 Vorbis 音频编码的 Ogg 文件

### 浏览器Audio资源兼容新

目前, <audio>元素支持三种音频格式文件: MP3, Wav, 和 Ogg:

| 浏览器               | MP3  | Wav  | Ogg  |
| :------------------- | :--- | :--- | :--- |
| Internet Explorer 9+ | YES  | NO   | NO   |
| Chrome 6+            | YES  | YES  | YES  |
| Firefox 3.6+         | NO   | YES  | YES  |
| Safari 5+            | YES  | YES  | NO   |
| Opera 10+            | NO   | YES  | YES  |



### Video的一个简单实例

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
您的浏览器不支持Video标签。
</video>
```

video定义这是一个视频标签，而里面的source标签则表示视频标签的多个资源类型。viedeo常见的属性包括：

| 属性                                                         | 值                 | 描述                                                         |
| :----------------------------------------------------------- | :----------------- | :----------------------------------------------------------- |
| [autoplay](https://www.w3cschool.cn/htmltags/att-video-autoplay.html) | autoplay           | 如果出现该属性，则视频在就绪后马上播放。                     |
| [controls](https://www.w3cschool.cn/htmltags/att-video-controls.html) | controls           | 如果出现该属性，则向用户显示控件，比如播放按钮。             |
| [height](https://www.w3cschool.cn/htmltags/att-video-height.html) | *pixels*           | 设置视频播放器的高度。                                       |
| [loop](https://www.w3cschool.cn/htmltags/att-video-loop.html) | loop               | 如果出现该属性，则当媒介文件完成播放后再次开始播放。         |
| [muted](https://www.w3cschool.cn/htmltags/att-video-muted.html) | muted              | 如果出现该属性，视频的音频输出为静音。                       |
| [poster](https://www.w3cschool.cn/htmltags/att-video-poster.html) | *URL*              | 规定视频正在下载时显示的图像，直到用户点击播放按钮。         |
| [preload](https://www.w3cschool.cn/htmltags/att-video-preload.html) | auto metadata none | 如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。 |
| [src](https://www.w3cschool.cn/htmltags/att-video-src.html)  | *URL*              | 要播放的视频的 URL。                                         |
| [width](https://www.w3cschool.cn/htmltags/att-video-width.html) | *pixels*           | 设置视频播放器的宽度。                                       |

### Audio的一个简单实例

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
您的浏览器不支持 audio 元素。
</audio>
```

​		可以看到，其包裹的内容也是source，通过audio定义一个音频标签，里面的source标签则定义了音频标签的多个资源类型。

其属性也与video类似：

| 属性                                                         | 值                 | 描述                                                        |
| :----------------------------------------------------------- | :----------------- | :---------------------------------------------------------- |
| [autoplay](https://www.w3cschool.cn/htmltags/att-audio-autoplay.html) | autoplay           | 如果出现该属性，则音频在就绪后马上播放。                    |
| [controls](https://www.w3cschool.cn/htmltags/att-audio-controls.html) | controls           | 如果出现该属性，则向用户显示音频控件（比如播放/暂停按钮）。 |
| [loop](https://www.w3cschool.cn/htmltags/att-audio-loop.html) | loop               | 如果出现该属性，则每当音频结束时重新开始播放。              |
| [muted](https://www.w3cschool.cn/htmltags/att-audio-muted.html) | muted              | 如果出现该属性，则音频输出为静音。                          |
| [preload](https://www.w3cschool.cn/htmltags/att-audio-preload.html) | auto metadata none | 规定当网页加载时，音频是否默认被加载以及如何被加载。        |
| [src](https://www.w3cschool.cn/htmltags/att-audio-src.html)  | *URL*              | 规定音频文件的 URL。                                        |

## 7、新增的Input类型

### 颜色表单（只有谷歌和欧鹏浏览器支持）

```html
<input type="color" name="favcolor" >
```

### 日期表单（只有谷歌和欧鹏浏览器支持）

```html
<input type="date" name="bday" >
```

### 日期时间表单（只有Safari和欧鹏浏览器支持）

```html
<input type="datetime" name="bdaytime" >
```

### 无时区的日期时间表单（谷歌、Safari、欧鹏浏览器支持）

```html
<input type="datetime-local" name="bdaytime">
```

### 邮箱地址表单（IE、火狐、谷歌、欧鹏浏览器支持）

```html
<input type="email" name="email">
```

### 月份表单（谷歌、Safari、欧鹏浏览器支持）

```html
<input type="month" name="bdaymonth">
```

### 数值输入域表单（IE、谷歌、Safari、欧鹏浏览器支持）

```html
<input type="number" name="quantity" min="1" max="5" step="1" value="1">
```

### 滑动条数值输入域（IE、谷歌、Safari、欧鹏浏览器支持）

```html
<input type="range" name="points" min="1" max="10">
```

### 搜索表单（谷歌、Safari）

```html
<input type="search" name="googlesearch" >
```

### 电话号码表单（浏览器都不支持）

```html
<input type="tel" name="usertel" >
```

### 时间表单（谷歌、Safari、欧鹏）

```html
<input type="time" name="user_time" >
```

### URL地址表单（IE、火狐、谷歌、欧鹏）

```html
<input type="url" name="homepage" >
```

### 周表单（谷歌、Safari、欧鹏）

```html
<input type="week" name="week_year" >
```

## 8、新增的表单元素

### 预定义所谓内容提示表单

​		效果右侧会有一个下来列表，列表中有外面预定义的内容，用户可以直接选择预定义的内容输入到表单中；用户还可以选择输入内容，右侧表单会根据用户输入的内容进行匹配显示可能的预定义值。

​		这种表单input标签搭配detalist标签组合实现，实例如下：

```html
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>W3Cschool(w3cschool.cn)</title> 
</head>
<body>

<form action="/statics/demosource/demo-form.php" method="get">
<input list="browsers" name="browser">
<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
<input type="submit">
</form>

<p><strong>注意:</strong> Internet Explorer 9（更早IE版本），Safari不支持 datalist 标签。</p>

</body>
</html>
```

​		其他的一些表单元素开发中不常用到，便不在此赘述。

## 9、新的表单属性

​		对于form标签新增了novalidate提交不验证的属性、autocomplete自动完成属性；

​		对于input标签新增了autocomplete自动填充内容属性、autofocus自动对焦属性、form外规定所属form、规定单独的formaction、formencytype、formmethod、formnovalidate、formtarget

​		根据上面提到的新增的input类型，对应的也新增了特定类型的input表单属性。如list、min、max、step等。

​		这里主要讲几个需要理解的属性：

### autocomplete属性

​		官方文档说明：autocomplete 属性规定 form 或 input 域应该拥有自动完成功能。当用户在自动完成域中开始输入时，浏览器应该在该域中显示填写的选项。

**提示:** autocomplete 属性有可能在 form元素中是开启的，而在input元素中是关闭的。

**注意:** autocomplete 适用于 <form> 标签，以及以下类型的 <input> 标签：text, search, url, telephone, email, password, datepickers, range 以及 color。

​		个人感觉就单看官方文档不容易理解，我们结合实际情况说明：

​		最直观的感受就是，当我们选中表单时，如果之前我们在此表单输入过内容，那么浏览器就会在焦点聚集在表单时，弹出之前输入过的内容弹窗——这就是所谓的自动填充内容。当我们设置autocompete为off时，就表示关闭浏览器显示表单之前输入过的内容弹窗。



### novalidate属性

​		这里属性比较直观，表示form表单提交数据时，不验证form和input域。也就是我们设置了一些本身带有内容验证的input不会进行验证。例如emile类型的Input，设置了novalidate后，输入非邮箱格式的内容并不会提示错误。



### input的单独form属性

​		这些属性包括formaction、formencytype、formmethod、formnovalidate、formtarget，这些属性都是与type="submit"和type="image"配合使用，为的是在一个表单内能够进行不同方式的提交这一需求。



### list属性

​		list属性用于规定输入域的datalist，用于连接datalist标签。



### min、max、step属性

​		date、number、range类型input特有属性。



### multiple属性

​		email和file的属性，用于规定可以选择多个值。也就是选择上传文件时，可以一次性上传多个文件。



### pattern属性

​		属性值时一个正则表达式，这个正则表达式会用来验证input元素的值。搭配title属性，当输入格式错误时，会提示title中的格式要求。实例：

```html
<input type="text" name="code" pattern="[A-Za-z]{3}" title="请输入三位英文大小写字母" />
```



## 10、语义元素（语义标签）

​		所谓语义，就是意义，语义元素就是有意义的元素。例如我们常见的<form>、<table>、<img>当标签出现时，我们马上就能够知道其表示表单、表格、图片的意义。而无语义的元素，例如<div>、<span>这些作为内容包裹性意义的元素。——当然它本省也表示着盒子、行内盒子的意义，但相对起来意义比较笼统，就像我们面前有很多的快递箱，我们主要的目的是需要了解箱子里面的内容，而箱子只是包裹、规范化主要内容的容器。

​		有些人开发时会习惯使用div和span这些容器直接包裹内容，直接通过CSS来生成需要的效果，根本不需要这些语义化标签。而当需要方便的识别标签的不同时，直接去设置其class或者ID属性。这就导致页面中基本都是盒子，这样对于用户浏览器其实没有什么问题，因为我们浏览时只是看视觉效果。

​		而语义化在现在开发所担任的职能更多的偏向了为搜索引擎、为浏览器、为开发人员理解所使用的，它能够帮助开人发人员、浏览器规范化的编写和理解页面内容。因为浏览器和搜索引擎理解标签内容时是不会去理解class名称和id名称的，就算回去理解，绝大多数开发人员在class和id命名都会简写自定义，不能够完整的描述，这样也使得浏览器、搜索引擎无法理解，使其被当作只有区别意义的一段字符串。

​		HTML5语义化建议我们开发这种规格划分和编写代码：

![img](./images/img_sem_elements.gif)

​		建议的页面格式包括了四个大块，header头部块、主内容块、aside侧边栏块、footer脚块。他们之间也进行嵌套，个人不建议，一般这四大块只做为大的区域划分，内部假如又包括头部、脚部、侧边栏等使用class的方式。——你也可以进行嵌套，用id或者class加以区分，方便之后获取。

​		其中的nav导航栏块一般可以选择放在header头部块或aside侧边栏块内，根据需求放置，也可以进行单独放置。

​		住内容块包裹了section、article，一般我会将article作为主内容块包裹section节块（段落块）。

​		语义化标签之间的关系并不是强求的，他在视觉效果上其实就是一个div盒子标签，他们之间的嵌套关系也不是固定的，我们尽量遵守这一规则，也许能够更快的帮助浏览器和搜索引擎、或者其他程序员理解页面内容。

​		另外HTML5中还定义了<figure> 和 <figcaption> 来独立流内容（图像、图表、照片、代码等），<figcaption> 标签定义 <figure> 元素的标题。<figcaption>元素应该被置于 "figure" 元素的第一个或最后一个子元素的位置。



## 11、Web存储

​		Web存储就是我们能够在浏览器中存储数据，在浏览器中存储数据主要的作用是我们跳转不同页面时，我们需要的数据任然能够留存，为之后使用作为基础。例如：我们想要做登录后的作品提交功能，我们希望作品提交时验证提交人的账号和其登录状态、并将提交作品的账号信息也连带提交。

​		这里我们就需要解决一个问题，我们登录后怎么在前端存储账号和登录成功的状态标识？我们如果是多页开发的话，单个页面的数据，如果通过get或者post的方式将数据传递过去能够实现数据的传递，不过这种方式就会再你的URL地址中带有参数，这个参数会使URL臃肿、数据明文传递也不安全，URL能够传递的参数也非常有限。

​		那么有这样一个需求，于是出现了Web存储，专门开辟一个存储区域，存储我们想要存储的数据，这样就变成了一个将数据存入到这个空间中，其他页面就可以到这个空间获取。

​		在此基础上又出现了两种不同的数据存储需求，存储的数据有长期固定不变的数据和每次进入需要变化的数据，例如：我们开发了一个可以自定义主题的后台管理系统，系统里面有一个提交图片和详情的表单，功能的需求是，自定义主题设置后，每次登录进来显示自定义的主题；系统图片和详情表单数据内容中途退出保留已填写的内容，下次在此打开时内容还在表单中，另外后台管理需要登录，并且页面的系统的安全要求很高，每次不退出登录浏览器退出，登录状态都要求不保留。——事先声明，着只是为了说明两种Web存储使用情况想出来的针对性示例。

​		我们来分析一下，首先登录状态不手动退出登录，如果退出了浏览器，登录状态也不保留。开发时我们可以使用JS监听页面关闭和浏览器关闭，监听`beforeunload`，然后执行这些操作，这种是一个解决方案，但是这种方式是需要在关闭时执行语句，如果是浏览器突然卡死，或者任务管理器直接结束进程的话，JS语句就不会执行了。

​		早些时候,本地存储使用的是cookies。但是Web 存储需要更加的安全与快速. 这些数据不会被保存在服务器上，但是这些数据只用于用户请求网站数据上.它也可以存储大量的数据，而不影响网站的性能。

​		而另外一种方式就是使用HTML5的sessionStorage存储临时数据——默认浏览器窗口关闭数据就会清理。

​		另外就是后台管理自定义配置的保存和表单中途退出数据的保存，他们一般在用户确定后点击保存才会传入到服务器，之后我们在此访问时通过服务器传递上次的数据，但是还在编辑中，达不到传入服务器的条件，又需要保留现在的进度，我们就可以使用localStorage存储这些数据，locoalStorage不手动删除（清理浏览器缓存、手动清理localStorage）数据就会一直保留。

​		下面我们简单的试一下两种Web存储：

### sessionStorage

```html
<script>
	sessionStorage.setItem('username','admin');		//setItem(key, value),保存数据
   	var _username = sessionStorage.getItem('username');		//getItem(key),获取数据
    sessionStorage.removeItem('username');		//removeItem(key),删除单个数据
    sessionStorage.clear();		//clear(),删除所有数据
    sessionStorage.key(1);		//key(index),获取某个索引的key
</script>
```

### localStorage

```html
<script>
	localStorage.setItem('username','admin');		//setItem(key, value),保存数据
   	var _username = localStorage.getItem('username');		//getItem(key),获取数据
    localStorage.removeItem('username');		//removeItem(key),删除单个数据
    localStorage.clear();		//clear(),删除所有数据
    localStorage.key(1);		//key(index),获取某个索引的key
</script>
```

​		可以看到他们的方式是一样的，只是存储的时间不同。



## 12、Web SQL

​		Web SQL 是在浏览器上模拟数据库，可以使用 JS 来操作 SQL 完成对数据的读写。Web SQL 数据库 API 并不是 HTML5 规范的一部分，但是它是一个独立的规范，引入了一组使用 SQL 操作客户端数据库的 APIs。
