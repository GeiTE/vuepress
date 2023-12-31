# 第一阶段——Web前端技术基础

​		Web前端基础基础包括`HTML`/`XML`/`CSS`/`JSON`等，了解和实际开发基于Ajax的前端应用。

​		第一阶段也分为三个级别，这三个级别参照2021年阿里`P6`/`P6+`/`P7`标准：

1. 初级：

   - HTML方面包括但不限于：语义化标签，history api，storage，ajax2.0等。
   - CSS方面包括但不限于：文档流，重绘重排，flex，BFC，IFC，before/after，动画，keyframe，画三角，优先级矩阵等。
   - 知道axios或同级别网络请求库，知道axios的核心功能。
   - 能口喷xhr用法，知道网络请求相关技术和技术底层，包括但不限于：content-type，不同type的作用；restful设计理念；cors处理方案，以及浏览器和服务端执行流程；口喷文件上传实现；
   - 知道如何完成登陆模块，包括但不限于：登陆表单如何实现；cookie登录态维护方案；token base登录态方案；session概念；

2. 中级：

   - HTML方面能够结合各个浏览器api描述常用类库的实现。
   - css方面能够结合各个概念，说明白网上那些hack方案或优化方案的原理。
   - 能说明白接口请求的前后端整体架构和流程，包括：业务代码，浏览器原理，http协议，服务端接入层，rpc服务调用，负载均衡。
   - 知道websocket用法，包括但不限于：鉴权，房间分配，心跳机制，重连方案等。
   - 知道pc端与移动端登录态维护方案，知道token base登录态实现细节，知道服务端session控制实现，关键字：refresh token。
   - 知道oauth2.0轻量与完整实现原理。
   - 知道移动端api请求与socket如何通过native发送，知道如何与native进行数据交互，知道ios与安卓jsbridge实现原理。

3. 高级：

   - 知道移动端webview和基础能力，包括但不限于：iOS端uiwebview与wkwebview差异；webview资源加载优化方案；webview池管理方案；native路由等。

   - 登陆抽象层，能够给出完整的前后端对用户体系的整体技术架构设计，满足多业务形态用户体系统一。考虑跨域名、多组织架构、跨端、用户态开放等场景。

   - mock方案，能够设计出满足各种场景需要的mock数据方案，同时能说出对前后端分离的理解。考虑mock方案的通用性、场景覆盖度，以及代码或工程侵入程度。

   - 埋点方案，能够说明白前端埋点方案技术底层实现，以及技术选型原理。能够设计出基于埋点的数据采集和分析方案，关键字包括：分桶策略，采样率，时序性，数据仓库，数据清洗等。

​		以上描述的知识是入门后需要深入了解的知识，文章会从入门到高级完整的说明这些。
