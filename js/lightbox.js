(function() {
    // Lightbox的构造函数
    var Lightbox = function() {
        var self = this;

        // 创建遮罩层和弹出层
        this.popupMask = "<div id='G-lightbox-mask'></div>";
        this.popupWin = "<div id='G-lightbox-popup'>";

        // 保存body
        this.bodyNode = document.body;

        // 渲染剩余的DOM，并插入到body中
        this.renderDom();
    }
    // Lightbox的原型对象
    Lightbox.prototype = {
        renderDom: function() {
            var strDom = "<div class='lightbox-pic-view'>" +
                            "<span class='lightbox-btn lightbox-prev-btn lightbox-prev-btn-show'></span>" +
                            "<img class='lightbox-image' src='images/0.jpg' alt='美女1' width='100%'>" +
                            "<span class='lightbox-btn lightbox-next-btn lightbox-next-btn-show'></span>" +
                        "</div>" +
                        "<div class='lightbox-pic-caption'>" +
                            "<div class='lightbox-caption-area'>" +
                                "<p class='lightbox-pic-desc'>图片标题</p>" +
                                "<span class='lightbox-of-index'>当前索引：1 / 4</span>" +
                            "</div>" +
                            "<span class='lightbox-close-btn'></span>" +
                        "</div>" +
                        "</div>";
            // 插入到弹出层中
            this.popupWin += strDom;
            // 并插入到body中
            this.bodyNode.append(this.popupMask, this.popupWin);
        }
    }
    // 将其暴露给window对象
    window.Lightbox = Lightbox;
}());
