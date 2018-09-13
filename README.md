# 原生 JavaScript lightbox 弹出层插件

## 插件介绍

使用原生 JavaScript(ES5) 编写的 lightbox 弹出层图片预览插件，不依赖任何库和框架。

## 演示地址

## 使用方法

将 icon、css、js 文件拷贝到项目目录，再将 lightbox.css、lightbox.js 引用到 HTML中。
```html
<link rel="stylesheet" href="css/lightbox.css">
<img data-rote="lightbox" data-soure="images/0.jpg" data-group="group-1" data-id="qewsdq" data-caption="绝世美女" src="images/0.jpg" alt="美女" width="200px">
<script type="text/javascript" src="js/lightbox.js"></script>
<script type="text/javascript">
  (function() {
    var lightbox = new Lightbox();
  }());
</script>
```
