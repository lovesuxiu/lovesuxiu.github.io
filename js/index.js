/*
* @Author: Administrator
* @Date:   2016-03-010:48:00
* @Last Modified by:   Administrator
* @Last Modified time: 2016-04-07 11:52:03
*/

//top nav1点击之后展开Home开始
    $('.toggle').on("mouseenter",function(){
      $('#unfold').slideDown();
    });
    $('.toggle').on("mouseout",function(){
      $('#unfold').slideUp();
    });
  //top nav1点击之后展开Home结束
//轮播图的开始
    // var firstUl = $(".header_center").get(0);
    // // `console.log(firstUl);`
    // var scrollPic = function(){};
    // scrollPic.prototype = {
    //   //加过渡
    //   addTransition: function(){
    //     firstUl.style.transition = "all 0.1s ease";
    //   },
    //   //改变位置
    //   removeTransiton: function(){
    //     firstUl.style.transiton = "none";
    //   },
    //   changeTranslateX: function(x){
    //     firstUl.style.transform = "translateX("+ x +"px)"
    //   },
    //   transitionEnd: function(obj,callback){
    //     if(typeof obj == "object"){
    //       obj.addEventListener("transitionEnd",function(e){
    //         callback && callback(e);
    //       },false);
    //       obj.addEventListener('webkitTransitionEnd',function(e){
    //         callback && callback(e);
    //     },false);
    //     };
    //   }
    // }
    // var scrollPic = new scrollPic();
    // var timer = null;
    // var index = 1;
    // var width = $(".header_center li").eq(0).width();
    // var navul = $(".header_center").get(0);
    // timer = setInterval(function(){
    //   index++;
    //   scrollPic.addTransition()
    //   scrollPic.changeTranslateX(-index*$(".header_center li").eq(0).width());
    // },3000);
    // scrollPic.transitionEnd(navul,function(e){
    //   if(index >= 6){
    //     index = 1;
    //     scrollPic.removeTransiton();
    //     scrollPic.changeTranslateX(-index*width);
    //   }else if(index <=0){
    //     index = 6;
    //     scrollPic.removeTransiton();
    //     scrollPic.changeTranslateX(-index*width);
    //   }
    // });
//轮播图的结束
//轮播图的结束
    var mySwiper = new Swiper('.swiper-container',{
      autoplay : 500,
      loop : true,
      loopAdditionalSlides : 1,
    });
//轮播图的结束

//切换下面的Tab栏开始
    function Tab(){
            $(".section .section_introduce_suxiu").show().siblings().hide();
        $(".navbar2-content .content li").mouseover(function(){
            $(this).addClass("current").siblings().removeClass("current");
            var index = $(this).index();
            number = index;
            $(".section .common").hide();
            $(".section >  div").eq(index).show();
        });
        var auto = 1;
        if(auto == 1){
            var number = 0;
            var maxNumber = $(".navbar2-content .content li").length;
            function autotab(){
                number++;
                number == maxNumber? number = 0 : number;
                $('.navbar2-content .content li:eq('+number+')').addClass('current').siblings().removeClass('current');

                $('.section div:eq('+number+')').show().siblings().hide();
            }
            var tabChange = setInterval(autotab,3000);
            $('.navbar2-content').mouseover(function(){
                clearInterval(tabChange);
            });
            $('.navbar2-content').mouseout(function(){
                tabChange = setInterval(autotab,3000);
            });
        };
    };
    Tab();
//切换下面的Tab栏结束
//培训课程的float问题开始
    function Float(){
        var width = $(".introduce_train").width();
        var Img_width = $(".introduce_train img").width();
        var Span_width = width - Img_width;
        console.log(Span_width)
        $(".introduce_train ul span").css('width',Span_width-5);
    }
    Float();
//培训课程的float问题结束
