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

