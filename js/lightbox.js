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
                            "<img class='lightbox-image' src='images/0.jpg' alt='美女1'>" +
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
            //console.log((winHeight - viewHeight)/2);
            // 启动定时器调整top的值
            var top = viewHeight;
            var changeTop = setInterval(function() {
                top = top - 15;
                //console.log(top);
                self.popupWin.style.top = -top + "px";
                //console.log(self.popupWin.style.top);
                if (-top >= ((winHeight - viewHeight)/2) ) {
                    clearInterval(changeTop);
                    // 加载图片尺寸
                    self.loadPicSize(soureSrc);
                }

            }, 1);

            // 根据当前元素id获取当前索引
            this.index = this.getIndexOf(currentId);
            // 如果该组图片数组中长度大于1
            if (this.groupData.length > 1) {
                // 有当前索引判断是否隐藏上下切换按钮
                if (this.index === 1) {
                    this.prevBtn.classList.add("disabled");
                    this.nextBtn.classList.remove("disabled");
                } else if(this.index === this.groupData.length) {
                    this.prevBtn.classList.remove("disabled");
                    this.nextBtn.classList.add("disabled");
                } else {
                    this.prevBtn.classList.remove("disabled");
                    this.nextBtn.classList.remove("disabled");
                }
            }
        },
        getIndexOf: function(currentId) {
            var index = 0;

            // 根据groupData中的id判断当前索引
            for (var i = 0, len = this.groupData.length; i < len; i++) {
                if (this.groupData[i].id === currentId) {
                    index = i + 1;
                }
            }
            // console.log(index);
            return index;
        },
        // 加载图片尺寸方法
        loadPicSize: function(soureSrc) {
            //console.log(soureSrc);
            var self = this;

            // 预加载图片
            this.preLoadImg(soureSrc, function() {
                self.popupPic.setAttribute("src", soureSrc);
                // 图片的宽高
                var picWidth = self.popupPic.width,
                    picHeight = self.popupPic.height;
                // 改变弹出层的宽高
                self.changePopup(picWidth, picHeight);
            });
        },
        preLoadImg: function(soureSrc, callback) {
            var img = new Image();
            img.onload = function() {
                callback();
            }
            img.src = soureSrc;
        },
        // 改变弹出层宽高方法
        changePopup: function(picWidth, picHeight) {
            var self = this,
                winHeight = document.documentElement.clientHeight, // 可见窗口宽度
                winWidth = document.documentElement.clientWidth; // 可见窗口高度
            // 如果图片的宽高大于浏览器可视区域
            var scale  = Math.min(winWidth/(picWidth + 10), winHeight/(picHeight + 10), 1);
            picWidth = picWidth * scale;
            picHeight = picHeight * scale;
            // console.log(scale);
            // 调用animate方法使改变图片预览区宽高有过度效果
            animate(this.picViewArea, {
                width: Math.floor(picWidth - 10), // 这里不取整的话，无法完成
                height: Math.floor(picHeight - 10)
            }, 10, 0.5, function() {
                // console.log("dd");
            });
            animate(this.popupWin, {
                width: Math.floor(picWidth),
                height: Math.floor(picHeight),
                marginLeft: -Math.floor((picWidth/2)),
                top: Math.floor((winHeight - picHeight)/2)
            }, 10, 0.5, function() {
                // console.log("ddd");
                // 显示图片区域和图片描述区域
                self.popupPic.style.display = "block";
                self.picCaptionArea.style.display = "block";
                });
            // 设置描述文字和当前索引
            // console.log(this.index);
            this.captionText.innerText = this.groupData[this.index - 1].caption;
            this.currentIndex.innerText ="当前索引：" + this.index + "/" + this.groupData.length;
        }

    }
    // 将其暴露给window对象
    window.Lightbox = Lightbox;
}());
// 实现jQuery中animate效果的函数
(function() {
    function animate(obj, css, interval, speedFactor, func) {
        clearInterval(obj.timer);
        function getStyle(obj, prop) {
            if (obj.currentStyle)
                return obj.currentStyle[prop]; // ie
            else
                return document.defaultView.getComputedStyle(obj, null)[prop]; // 非ie
            }
        obj.timer = setInterval(function() {
            var flag = true;
            for (var prop in css) {
                var cur = 0;
                if(prop == "opacity")
                    cur = Math.round(parseFloat(getStyle(obj, prop)) * 100);
                else
                    cur = parseInt(getStyle(obj, prop));
                var speed = (css[prop] - cur) * speedFactor;
                speed = speed > 0 ? Math.ceil(speed): Math.floor(speed);
                if (cur != css[prop])
                    flag = false;
                if (prop == "opacity") {
                    obj.style.filter = "alpha(opacity : '+(cur + speed)+' )";
                    obj.style.opacity = (cur + speed) / 100;
                }
                else
                    obj.style[prop] = cur + speed + "px";
                }
                if (flag) {
                    clearInterval(obj.timer);
                if (func)
                    func();
                }
            }, interval);
        }
    window.animate = animate;
}());
