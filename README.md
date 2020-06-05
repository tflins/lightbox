# 原生 JavaScript lightbox 弹出层插件

## 插件介绍

使用原生 JavaScript 编写的 lightbox 弹出层图片预览插件，不依赖任何库和框架，开箱即用。

## 演示地址

**[点击查看演示](http://tflin.com/demo/lightbox/)**

## 安装

### Github

[dist/lightbox.js](https://github.com/tflins/lightbox/blob/master/dist/lightbox.js)

### NPM

```bash
npm i lightbox-preview.js -S
```

## 使用方法

### Browser (ES5)

将 dist/lightbox.js 引用到 HTML 中。接着给 img 添加自定义属性，其中：

```txt
data-rote="lightbox" ---> 表示该图片要启用lightbox
data-soure="images/0.jpg" ---> 原图地址
data-group="group-1" ---> 标识当前图片组别
data-id="xxxxdad" ---> 图片的唯一标识
data-caption="绝世美女" ---> 图片的描述
```

然后 ```new Lightbox()``` 即可，如：

```html
<img
  data-rote="lightbox"
  data-soure="images/0.jpg"
  data-group="group-1"
  data-id="qewsdq"
  data-caption="绝世美女"
  src="images/0.jpg"
  alt="美女"
  width="200px"
>

<script type="text/javascript" src="lightbox.js"></script>
<script type="text/javascript">
  (function() {
    var lightbox = new Lightbox()
  }())
</script>
```

### ES Module

```bash
npm i lightbox-preview.js -S
```

```js
import Lightbox 'lightbox-preview.js'

new Lightbox()
```

## 更新记录

2020年1月16日：代码重构

2018年9月20日：修复IE浏览器及低版本Chrome的兼容问题

## License

MIT 一起来扣细节~
