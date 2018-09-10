(function() {
    // Lightbox的构造函数
    var Lightbox = function() {
        var self = this;

        // 创建遮罩层和弹出层
        this.popupMask = document.createElement("div");
        this.popupWin = document.createElement("div");;

        // 保存body
        this.bodyNode = document.body;

        this.groupName = null;
        this.groupData = [];
        // 点击事件委托到body中
        this.bodyNode.onclick = function(event) {
            var event = event || window.event;
            var target = event.target || event.srcElement;
            if (target.nodeName.toLowerCase() === "img") {
                // 阻止事件冒泡
                event.stopPropagation();
                // 当前组名
                var currentGroupName = target.getAttribute("data-group");

                if (currentGroupName !== self.groupName) {
                    self.groupName = currentGroupName;
                    // 根据当前组名获取同一组的数据
                    self.getGroup();
                }
            }
        }


        // 初始化Lightbox
        this.init();
        // 渲染剩余的DOM，并插入到body中
        // this.renderDom();
    }
    // Lightbox的原型对象
    Lightbox.prototype = {
        // 初始化方法
        init: function() {
            this.popupMask.setAttribute("id", "G-lightbox-mask");
            this.popupWin.setAttribute("id", "G-lightbox-popup");
        },
        // 渲染其他DOM方法
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
                        "</div>";
            // 插入到弹出层中
            this.popupWin.innerHTML = strDom;
            // 将遮罩层和弹出层添加到body中
            this.bodyNode.append(this.popupMask, this.popupWin);
        },
        getGroup: function() {
            var self = this;

            // 根据当前组别获取所有当前组别的数据
            var groupList = document.querySelectorAll("img[data-group=" + this.groupName + "]");

            // 清空groupData数据
            this.groupData.length = 0;

            groupList.forEach(function(value, index) {
                // 将数据推入groupData中
                self.groupData.push({
                    src: value.getAttribute("data-soure"),
                    id: value.getAttribute("data-id"),
                    caption: value.getAttribute("data-caption")
                });
            });
            console.log(this.groupData);
        }
    }
    // 将其暴露给window对象
    window.Lightbox = Lightbox;
}());
