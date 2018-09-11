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
                // 初始化弹出层
                self.initPopup(target);
            }
        }

        // 渲染剩余的DOM，并插入到body中
        this.renderDom();

        // 图片预览区
        this.picViewArea = document.querySelector("#G-lightbox-popup .lightbox-pic-view");
        // 图片
        this.popupPic = document.querySelector("#G-lightbox-popup .lightbox-image");
        // 图片描述区域
        this.picCaptionArea = document.querySelector("#G-lightbox-popup .lightbox-pic-caption");
        // 向上切换按钮
        this.prevBtn = document.querySelector("#G-lightbox-popup .lightbox-prev-btn");
        // 向下切换按钮
        this.nextBtn = document.querySelector("#G-lightbox-popup .lightbox-next-btn");
        // 图片描述文本
        this.captionText = document.querySelector("#G-lightbox-popup .lightbox-pic-desc");
        // 当前图片索引
        this.currentIndex = document.querySelector("#G-lightbox-popup .lightbox-of-index");
        // 关闭按钮
        this.closeBtn = document.querySelector("#G-lightbox-popup .lightbox-close-btn");
        //console.log(this.closeBtn);
    }
    // Lightbox的原型对象
    Lightbox.prototype = {
        // 初始化弹出层方法
        initPopup: function(obj) {
            var self = this,
                soureSrc = obj.getAttribute("data-soure"),
                currentId = obj.getAttribute("data-id");
            // 调用显示方法
            this.showMaskAndPopup(soureSrc, currentId);
        },
        // 渲染其他DOM方法
        renderDom: function() {
            // 给遮罩层和弹出层设置id
            this.popupMask.setAttribute("id", "G-lightbox-mask");
            this.popupWin.setAttribute("id", "G-lightbox-popup");
            // 弹出层的html内容
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
        },
        // 显示遮罩层与弹出层
        showMaskAndPopup: function(soureSrc, currentId) {
            var self = this,
                winHeight = document.documentElement.clientHeight, // 可见窗口宽度
                winWidth = document.documentElement.clientWidth, // 可见窗口高度
                viewHeight = winHeight/2 + 10;  // 当前弹出层高度
            // 隐藏相关区域
            this.popupPic.style.display = "none";
            this.picCaptionArea.style.display = "none";
            // 设置图片预览区宽高
            this.picViewArea.style.width = winWidth/2 + "px";
            this.picViewArea.style.height = winHeight/2 + "px";
            // 显示相关区域
            this.popupMask.style.display = "block";
            this.popupWin.style.display = "block";
            // 设置弹出层宽高位置
            this.popupWin.style.width = winWidth/2 + 10 + "px";
            this.popupWin.style.height = winHeight/2 + 10 + "px";
            this.popupWin.style.marginLeft = -(winWidth/2 + 10)/2 + "px";
            // 初始化弹出层top值
            this.popupWin.style.top = -viewHeight + "px";
            console.log((winHeight - viewHeight)/2);
            // 启动定时器调整top的值
            var top = viewHeight;
            var changeTop = setInterval(function() {
                top = top - 15;
                console.log(top);
                self.popupWin.style.top = -top + "px";
                console.log(self.popupWin.style.top);
                if (-top >= ((winHeight - viewHeight)/2) ) {
                    clearInterval(changeTop);
                }

            }, 1);
        }
    }
    // 将其暴露给window对象
    window.Lightbox = Lightbox;
}());
