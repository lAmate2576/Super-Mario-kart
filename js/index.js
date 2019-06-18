// 给导航栏的跳转设置动画效果
//函数文件
function jumpAnimate(step, finalPos, callback) {
    if (jumpId) {
        clearInterval(jumpId)
        jumpId = null
    }
    var jumpId = setInterval(function () {
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
        document.documentElement.scrollTop = target
    }, 10);
}
$(function () {
    //右侧锚点跳转的js文件
    $('#globalNav a').eq(0).click(function () {
        jumpAnimate(50, 0)
        return false;
    });
    //设置导航栏的移动黑色切换效果同时设置页面整体的动画弹出效果
    var $globalNav1=$('#globalNav a:eq(0)')
    var $globalNav2=$('#globalNav a:eq(1)')
    var $globalNav3=$('#globalNav a:eq(2)')
    var $globalNav4=$('#globalNav a:eq(3)')
    var $globalNav5=$('#globalNav a:eq(4)')
   
    window.onscroll = function () {
        console.log($(document).scrollTop());
        var globalSco = $(document).scrollTop();
        if (globalSco < 800) {
            $globalNav1.addClass('active').parent().siblings().children().removeClass('active')
        } else if (globalSco >900 && globalSco < 1600) {
            $globalNav2.addClass('active').parent().siblings().children().removeClass('active')
        } else if (globalSco > 1700 && globalSco < 2400) {
            $globalNav3.addClass('active').parent().siblings().children().removeClass('active')
        } else if (globalSco > 2500 && globalSco < 3200) {
            $globalNav4.addClass('active').parent().siblings().children().removeClass('active')
        } else if(globalSco > 3300) {
            $globalNav5.addClass('active').parent().siblings().children().removeClass('active')
        }
    }

    //给整体的页面上所有元素设置页面弹出效果
    var $partOneImg1= $('.temp-box section.partOne .content .img1')
    var $partOneImg2= $('.temp-box section.partOne .content .img2')
    var $partOneImg3= $('.temp-box section.partOne .txtContent')
    var $partOneImg4= $('.temp-box section.partTwo .scene_chara .sc1')
    $(window).scroll(function(){
        if($(window).scrollTop()>1000){
            $partOneImg1.fadeIn(1000)
            $partOneImg2.fadeIn(2000)
            $partOneImg3.fadeIn(3000)
        }
        if($(window).scrollTop()>2800){
            $partOneImg4.animate({
                opacity: 1
            },1000)
        }
    })

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
            return false;
        })
        $('#btnOvClose').click(function () {
            $('#mkOverlay').slideUp(800)
        })
    }, 9000)
})
// 顶部js文件结束


