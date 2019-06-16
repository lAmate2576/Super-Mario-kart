// 给导航栏的跳转设置动画效果
//函数文件
function jumpAnimate(step, finalPos, callback) {
    if(jumpId){
        clearInterval(jumpId)
        jumpId=null
    }
   var jumpId= setInterval(function () {
        var pos = $(document).scrollTop()
       
        if (Math.abs(finalPos - pos) <= step) {
            //直接回到目标位置
           document.body.scrollTop = finalPos
            clearInterval(jumpId)
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
        document.documentElement.scrollTop=target
    }, 40);
}
$(function () {
    //右侧锚点跳转的js文件
    $('#wrapper').click(function () {
        jumpAnimate(20,0)
        return false;
    });

    // 顶部js文件
    setTimeout(function () {
        setTimeout(function () {
            $('.obj1').fadeIn(500)
        }, 1000)
        setTimeout(function () {
            $('.obj2').fadeIn(500)
        }, 1200)
        setTimeout(function () {
            $('.obj3').fadeIn(500)
        }, 1400)
        setTimeout(function () {
            $('.obj4').fadeIn(500)
        }, 1600)
        setTimeout(function () {
            $('.obj5').fadeIn(500)
        }, 1800)
        $('#btnMovie').click(function () {
            $('#mkOverlay').slideDown(800)
        })
        $('#btnOvClose').click(function () {
            $('#mkOverlay').slideUp(800)
        })
    }, 9000)
})
// 顶部js文件结束