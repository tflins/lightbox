import animate from '../utils/animate'

// Lightbox的构造函数
export default class Lightbox {
  constructor() {
    let self = this

    // 创建遮罩层和弹出层
    this.popupMask = document.createElement('div')
    this.popupWin = document.createElement('div')

    // 保存body
    this.bodyNode = document.body

    this.groupName = null
    this.groupData = []

    // 点击事件委托到body中
    this.bodyNode.onclick = function(e) {
      let event = e || window.event
      let target = event.target || event.srcElement
      if (
        target.nodeName.toLowerCase() === 'img' &&
        target.getAttribute('data-rote') === 'lightbox'
      ) {
        // console.log(target.getAttribute("data-rote"));
        // 阻止事件冒泡
        event.stopPropagation()
        // 当前组名
        let currentGroupName = target.getAttribute('data-group')

        if (currentGroupName !== self.groupName) {
          self.groupName = currentGroupName
          // 根据当前组名获取同一组的数据
          self.getGroup()
        }
        // 初始化弹出层
        self.initPopup(target)
      }
    }

    // 渲染剩余的DOM，并插入到body中
    this.renderDom()

    // 图片预览区
    this.picViewArea = document.querySelector(
      '#G-lightbox-popup .lightbox-pic-view'
    )
    // 图片
    this.popupPic = document.querySelector('#G-lightbox-popup .lightbox-image')
    // 图片描述区域
    this.picCaptionArea = document.querySelector(
      '#G-lightbox-popup .lightbox-pic-caption'
    )
    // 向上切换按钮
    this.prevBtn = document.querySelector(
      '#G-lightbox-popup .lightbox-prev-btn'
    )
    // 向下切换按钮
    this.nextBtn = document.querySelector(
      '#G-lightbox-popup .lightbox-next-btn'
    )
    // 图片描述文本
    this.captionText = document.querySelector(
      '#G-lightbox-popup .lightbox-pic-desc'
    )
    // 当前图片索引
    this.currentIndex = document.querySelector(
      '#G-lightbox-popup .lightbox-of-index'
    )
    // 关闭按钮
    this.closeBtn = document.querySelector(
      '#G-lightbox-popup .lightbox-close-btn'
    )
    // console.log(this.closeBtn);

    // 点击遮罩层关闭其与弹出层
    this.popupMask.onclick = function() {
      this.style.display = 'none'
      self.popupWin.style.display = 'none'
    }
    // 点击关闭按钮关闭弹出层和遮罩层
    this.closeBtn.onclick = function(e) {
      // 阻止事件冒泡
      e.stopPropagation()
      self.popupMask.style.display = 'none'
      self.popupWin.style.display = 'none'
    }
    // 鼠标移入移出上下切换按钮时显示处理
    this.hoverBtn()
    // 点击切换按钮处理
    this.clickBtn()
  }

  // 初始化弹出层方法
  initPopup(obj) {
    let self = this,
      soureSrc = obj.getAttribute('data-soure'),
      currentId = obj.getAttribute('data-id')
    // 调用显示方法
    this.showMaskAndPopup(soureSrc, currentId)
  }

  // 渲染其他DOM方法
  renderDom() {
    // 给遮罩层和弹出层设置id
    this.popupMask.setAttribute('id', 'G-lightbox-mask')
    this.popupWin.setAttribute('id', 'G-lightbox-popup')
    // 弹出层的html内容
    let strDom =
      "<div class='lightbox-pic-view'>" +
      "<span class='lightbox-btn lightbox-prev-btn'></span>" +
      "<img class='lightbox-image' src='images/0.jpg' alt='美女1'>" +
      "<span class='lightbox-btn lightbox-next-btn'></span>" +
      '</div>' +
      "<div class='lightbox-pic-caption'>" +
      "<div class='lightbox-caption-area'>" +
      "<p class='lightbox-pic-desc'>图片标题</p>" +
      "<span class='lightbox-of-index'>当前索引：1 / 4</span>" +
      '</div>' +
      "<span class='lightbox-close-btn'></span>" +
      '</div>'
    // 插入到弹出层中
    this.popupWin.innerHTML = strDom
    // 将遮罩层和弹出层添加到body中
    this.bodyNode.appendChild(this.popupMask)
    this.bodyNode.appendChild(this.popupWin)
  }

  getGroup() {
    let self = this

    // 根据当前组别获取所有当前组别的数据
    let groupList = document.querySelectorAll(
      'img[data-group=' + this.groupName + ']'
    )

    // 清空groupData数据
    this.groupData.length = 0

    // 将数据推入groupData中
    for (let i = 0, len = groupList.length; i < len; i++) {
      this.groupData.push({
        src: groupList[i].getAttribute('data-soure'),
        id: groupList[i].getAttribute('data-id'),
        caption: groupList[i].getAttribute('data-caption')
      })
    }
  }

  // 显示遮罩层与弹出层
  showMaskAndPopup(soureSrc, currentId) {
    let self = this,
      winHeight = document.documentElement.clientHeight, // 可见窗口宽度
      winWidth = document.documentElement.clientWidth, // 可见窗口高度
      viewHeight = winHeight / 2 + 10 // 当前弹出层高度
    // 隐藏相关区域
    this.popupPic.style.display = 'none'
    this.picCaptionArea.style.display = 'none'
    // 设置图片预览区宽高
    this.picViewArea.style.width = winWidth / 2 + 'px'
    this.picViewArea.style.height = winHeight / 2 + 'px'
    // 显示相关区域
    this.popupMask.style.display = 'block'
    this.popupWin.style.display = 'block'
    // 设置弹出层宽高位置
    this.popupWin.style.width = winWidth / 2 + 10 + 'px'
    this.popupWin.style.height = winHeight / 2 + 10 + 'px'
    this.popupWin.style.marginLeft = -(winWidth / 2 + 10) / 2 + 'px'
    // 初始化弹出层top值
    this.popupWin.style.top = -viewHeight + 'px'
    //console.log((winHeight - viewHeight)/2);
    // 启动定时器调整top的值
    let top = viewHeight
    let changeTop = setInterval(function() {
      top = top - 15
      //console.log(top);
      self.popupWin.style.top = -top + 'px'
      //console.log(self.popupWin.style.top);
      if (-top >= (winHeight - viewHeight) / 2) {
        clearInterval(changeTop)
        // 加载图片尺寸
        self.loadPicSize(soureSrc)
      }
    }, 1)

    // 根据当前元素id获取当前索引
    this.index = this.getIndexOf(currentId)
    // 如果该组图片数组中长度大于1
    if (this.groupData.length > 1) {
      // 有当前索引判断是否隐藏上下切换按钮
      if (this.index === 1) {
        this.prevBtn.classList.add('disabled')
        this.nextBtn.classList.remove('disabled')
      } else if (this.index === this.groupData.length) {
        this.prevBtn.classList.remove('disabled')
        this.nextBtn.classList.add('disabled')
      } else {
        this.prevBtn.classList.remove('disabled')
        this.nextBtn.classList.remove('disabled')
      }
    }
  }

  getIndexOf(currentId) {
    let index = 0

    // 根据groupData中的id判断当前索引
    for (let i = 0, len = this.groupData.length; i < len; i++) {
      if (this.groupData[i].id === currentId) {
        index = i + 1
      }
    }
    // console.log(index);
    return index
  }
  // 加载图片尺寸方法
  loadPicSize(soureSrc) {
    //console.log(soureSrc);
    let self = this
    // 清楚上一次获取图片的宽高
    this.popupPic.style.width = 'auto'
    this.popupPic.style.height = 'auto'
    // 隐藏上一次图片，防止出现较差的视觉效果
    this.popupPic.style.display = 'none'
    // 预加载图片
    this.preLoadImg(soureSrc, function() {
      self.popupPic.setAttribute('src', soureSrc)
      // 图片的宽高
      let picWidth = self.popupPic.width,
        picHeight = self.popupPic.height
      // 改变弹出层的宽高
      self.changePopup(picWidth, picHeight)
    })
  }
  preLoadImg(soureSrc, callback) {
    let img = new Image()
    img.onload = function() {
      callback()
    }
    img.src = soureSrc
  }
  // 改变弹出层宽高方法
  changePopup(picWidth, picHeight) {
    let self = this,
      winHeight = document.documentElement.clientHeight, // 可见窗口宽度
      winWidth = document.documentElement.clientWidth // 可见窗口高度
    // 如果图片的宽高大于浏览器可视区域
    let scale = Math.min(
      winWidth / (picWidth + 10),
      winHeight / (picHeight + 10),
      1
    )
    picWidth = picWidth * scale
    picHeight = picHeight * scale
    // console.log(scale);
    // 调用animate方法使改变图片预览区宽高有过度效果
    animate(
      this.picViewArea,
      {
        width: Math.floor(picWidth - 10), // 这里不取整的话，无法完成
        height: Math.floor(picHeight - 10)
      },
      10,
      0.5,
      function() {
        // console.log("dd");
      }
    )
    animate(
      this.popupWin,
      {
        width: Math.floor(picWidth),
        height: Math.floor(picHeight),
        marginLeft: -Math.floor(picWidth / 2),
        top: Math.floor((winHeight - picHeight) / 2)
      },
      10,
      0.5,
      function() {
        // console.log("ddd");
        self.popupPic.style.width = picWidth + 'px'
        // console.log(picWidth);
        // 显示图片区域和图片描述区域
        self.popupPic.style.display = 'block'
        self.picCaptionArea.style.display = 'block'
      }
    )
    // 设置描述文字和当前索引
    // console.log(this.index);
    this.captionText.innerText = this.groupData[this.index - 1].caption
    this.currentIndex.innerText =
      '当前索引：' + this.index + '/' + this.groupData.length
  }
  // 鼠标移入移出切换按钮时调整其是否显示方法
  hoverBtn() {
    let self = this
    // 鼠标移入向上切换按钮时
    this.prevBtn.onmouseover = function() {
      let prevBtn = self.prevBtn
      // 判断当前按钮的class中是否有disable的值
      let disabled = false
      for (let i = 0, len = prevBtn.classList.length; i < len; i++) {
        if (prevBtn.classList[i] === 'disabled') {
          disabled = true
        }
      }
      if (!disabled) {
        prevBtn.classList.add('lightbox-prev-btn-show')
      }
    }
    // 鼠标移入向下切换按钮时
    this.nextBtn.onmouseover = function() {
      let nextBtn = self.nextBtn
      // 判断当前按钮的class中是否有disable的值
      let disabled = false
      for (let i = 0, len = nextBtn.classList.length; i < len; i++) {
        if (nextBtn.classList[i] === 'disabled') {
          disabled = true
        }
      }
      if (!disabled) {
        nextBtn.classList.add('lightbox-next-btn-show')
      }
    }
    // 鼠标移出向上切换按钮时
    this.prevBtn.onmouseout = function() {
      self.prevBtn.classList.remove('lightbox-prev-btn-show')
    }
    // 鼠标移出向下切换按钮时
    this.nextBtn.onmouseout = function() {
      self.nextBtn.classList.remove('lightbox-next-btn-show')
    }
  }
  clickBtn() {
    let self = this
    // 点击向上切换按钮时
    this.prevBtn.onclick = function(e) {
      // 阻止事件冒泡
      e.stopPropagation()
      let prevBtn = self.prevBtn
      // 判断当前按钮的class中是否有disable的值
      let disabled = false
      for (let i = 0, len = prevBtn.classList.length; i < len; i++) {
        if (prevBtn.classList[i] === 'disabled') {
          disabled = true
        }
      }
      if (!disabled) {
        // 调用切换图片方法
        self.goto('prev')
        // console.log("aa");
      }
    }
    // 点击向下切换按钮时
    this.nextBtn.onclick = function(e) {
      // 阻止事件冒泡
      e.stopPropagation()
      let nextBtn = self.nextBtn
      // 判断当前按钮的class中是否有disable的值
      let disabled = false
      for (let i = 0, len = nextBtn.classList.length; i < len; i++) {
        if (nextBtn.classList[i] === 'disabled') {
          disabled = true
        }
      }
      if (!disabled) {
        // 调用切换图片方法
        self.goto('next')
        // console.log("dd");
      }
    }
  }
  // 切换图片方法
  goto(direction) {
    // 图片原图地址
    let src
    // 向下切换
    if (direction === 'next') {
      this.index++
      src = this.groupData[this.index - 1].src
      this.prevBtn.classList.remove('disabled')
      if (this.index >= this.groupData.length) {
        this.nextBtn.classList.add('disabled')
        this.nextBtn.classList.remove('lightbox-next-btn-show')
      }
    } else if (direction === 'prev') {
      // 向上切换
      this.index--
      src = this.groupData[this.index - 1].src
      this.nextBtn.classList.remove('disabled')
      if (this.index <= 1) {
        this.index = 1
        this.prevBtn.classList.add('disabled')
        this.prevBtn.classList.remove('lightbox-prev-btn-show')
      }
    }
    // 重新载入图片
    this.loadPicSize(src)
  }
}
