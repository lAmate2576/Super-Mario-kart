
function animate(step, finalPos, callback) {
  
     setInterval(function () {
        var pos = window.scrollY
        if (Math.abs(finalPos - pos) <= step) {
            //直接回到目标位置
            element.style.left = finalPos 
            clearInterval(element.timeid)
            if (callback) {
                callback()
            }
            return
        }
        if (finalPos - pos > 0) {
            var target = pos + step
        } else if (finalPos - pos < 0) {
            var target = pos - step
        }
    }, 15);

}