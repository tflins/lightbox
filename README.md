# 原生 JavaScript lightbox 弹出层插件

## 插件介绍

使用原生 JavaScript(ES5) 编写的 lightbox 弹出层图片预览插件，不依赖任何库和框架。

## 演示地址

**[点击查看演示](http://tflin.com/demo/lightbox/)**

## 使用方法

将 icon、css、js 文件拷贝到项目目录，再将 lightbox.css、lightbox.js 引用到 HTML中。接着给 img 添加自定义属性，其中：

```
data-rote="lightbox" ---> 表示该图片要启用lightbox
data-soure="images/0.jpg" ---> 原图地址
data-group="group-1" ---> 标识当前图片组别
data-id="xxxxdad" ---> 图片的唯一标识
data-caption="绝世美女" ---> 图片的描述
```

然后 new Lightbox() 即可，如：
```html
<link rel="stylesheet" href="css/lightbox.css">
<img data-rote="lightbox" data-soure="images/0.jpg" data-group="group-1" data-id="qewsdq"
 data-caption="绝世美女" src="images/0.jpg" alt="美女" width="200px">
<script type="text/javascript" src="js/lightbox.js"></script>
<script type="text/javascript">
  (function() {
    var lightbox = new Lightbox();
  }());
</script>
```
