export default function animate(obj, css, interval, speedFactor, func) {
  clearInterval(obj.timer)
  function getStyle(obj, prop) {
    if (obj.currentStyle) return obj.currentStyle[prop]
    // ie
    else return document.defaultView.getComputedStyle(obj, null)[prop] // 非ie
  }
  obj.timer = setInterval(function() {
    let flag = true
    for (let prop in css) {
      let cur = 0
      if (prop == 'opacity')
        cur = Math.round(parseFloat(getStyle(obj, prop)) * 100)
      else cur = parseInt(getStyle(obj, prop))
      let speed = (css[prop] - cur) * speedFactor
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
      if (cur != css[prop]) flag = false
      if (prop == 'opacity') {
        obj.style.filter = "alpha(opacity : '+(cur + speed)+' )"
        obj.style.opacity = (cur + speed) / 100
      } else obj.style[prop] = cur + speed + 'px'
    }
    if (flag) {
      clearInterval(obj.timer)
      if (func) func()
    }
  }, interval)
}
