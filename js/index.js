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
var $globalNav1=$('#globalNav a:eq(0)')
var $globalNav2=$('#globalNav a:eq(1)')
var $globalNav3=$('#globalNav a:eq(2)')
var $globalNav4=$('#globalNav a:eq(3)')
var $globalNav5=$('#globalNav a:eq(4)')

$(function () {
    //右侧锚点跳转的js文件
    $('#globalNav a').eq(0).click(function () {
        jumpAnimate(200, 0);
        $globalNav1.addClass('active').parent().siblings().children().removeClass('active')
        return false;
    });
    $('#globalNav a').eq(1).click(function () {
        jumpAnimate(200, 3000);
        $globalNav2.addClass('active').parent().siblings().children().removeClass('active')
        return false;
    });
    $('#globalNav a').eq(2).click(function () {
        jumpAnimate(200, 4800);
        $globalNav3.addClass('active').parent().siblings().children().removeClass('active')
        return false;
    });
    $('#globalNav a').eq(3).click(function () {
        jumpAnimate(200, 8400);
        $globalNav4.addClass('active').parent().siblings().children().removeClass('active')
        return false;
    });
    $('#globalNav a').eq(4).click(function () {
        jumpAnimate(200, 10100);
        $globalNav5.addClass('active').parent().siblings().children().removeClass('active')
        return false;
    });
    //设置导航栏的移动黑色切换效果同时设置页面整体的动画弹出效果

    window.onscroll = function () {
        var globalSco = $(document).scrollTop();
        if (globalSco < 2800) {
            $globalNav1.addClass('active').parent().siblings().children().removeClass('active')
        } else if (globalSco >=2800 && globalSco < 4700) {
            $globalNav2.addClass('active').parent().siblings().children().removeClass('active')
        } else if (globalSco >= 4700 && globalSco < 8300) {
            $globalNav3.addClass('active').parent().siblings().children().removeClass('active')
        } else if (globalSco >= 8300 && globalSco < 10000) {
            $globalNav4.addClass('active').parent().siblings().children().removeClass('active')
        } else {
            $globalNav5.addClass('active').parent().siblings().children().removeClass('active')
        }
    }

    //给整体的页面上所有元素设置页面弹出效果
    var $partOneImg1= $('.temp-box section.partOne .content .img1')
    var $partOneImg2= $('.temp-box section.partOne .content .img2')
    var $partOneImg3= $('.temp-box section.partOne .txtContent')
    var $partOneImg4= $('.temp-box section.partTwo .scene_chara .sc1')
    var $partOneImg5= $('.temp-box section.partThree .scene_chara .sc')
    var $partOneImg6= $('.temp-box section.partFour .scene_chara .sc1   ')
    var $partOneImg7= $('.temp-box section.partFive .scene_chara')
    $(window).scroll(function(){
        if($(window).scrollTop()>1000){
            $partOneImg1.fadeIn(500)
            $partOneImg2.fadeIn(1000)
            $partOneImg3.fadeIn(2000)
        }
        if($(window).scrollTop()>2300){
            $partOneImg4.animate({
                opacity: 1
            },500)
        }
        if($(window).scrollTop()>4200){
            $partOneImg5.animate({
                opacity: 1
            },500)
        }
        if($(window).scrollTop()>7500){
            $partOneImg6.animate({
                opacity: 1
            },500)
        }
        if($(window).scrollTop()>9500){
            $partOneImg7.animate({
                opacity: 1
            },500)
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
            $('#mkOverlay').slideDown(800);
            $('#mainMovie video')[0].play()
            return false;
        })
        $('#btnOvClose').click(function () {
            $('#mkOverlay').slideUp(800);
            $('#mainMovie video')[0].load()
        })
    }, 9000)
})
// 顶部js文件结束


