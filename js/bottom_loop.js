$('#stageWrap ul li').clone().appendTo($('#stageWrap ul'));
(function(){
    $(function(){
       setInterval(function(){
         $('#stageWrap ul').animate({
             'left':'-3420px'
         },30000,'linear',function(){
             $('#stageWrap ul').css('left',0);
         })
        },0)
     })
})()
$(function(){
    $('#stageWrap ul li').mouseenter(function(){
        $(this).children('span').animate({
            width:600
        })
        .parent().next().children('span').stop().animate({
            marginLeft:100
        });
        $(this).parent().next().next().children('span').stop().animate({
            marginLeft:100
        });
    })
    $('#stageWrap ul li').mouseleave(function(){
        $(this).stop().children('span').animate({
            width:400
        }).parent().next().children('span').stop().animate({
            marginLeft:0
        })
        $(this).parent().next().next().children('span').stop().animate({
            marginLeft:0
        });
        
        // .parent().next().children('span').animate({
        //     right:100
        // })
    })
})
    

