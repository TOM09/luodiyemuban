$(document).ready(function () {



 // 平台实力
 $('.md-trigger4').on('click', function (e) {
    e.preventDefault();
    // var modal = $(this).data('modal');
    // $("#" + modal).niftyModal();
    $('.zhao2').css('display','block');
    playVideo()

});


 $('.closedBtn').on("touchstart", function (e) {
        $('.zhao2').css('display','none');
    })




    $('.zhaoBtn').on("touchend", function (e) {
        $('.zhao').css('display','block');
    })


    $('.closedBtn').on("touchend", function (e) {
        $('.zhao').css('display','none');
    })

    $('.zhao').bind( "touchmove", function (e) {
        e.preventDefault();
     });


    $("#strengthUl li").on("touchstart", function (e) {
        $("#strengthUl li").removeClass('li_active2')
        $(this).addClass("li_active2");
        var index = $(this).index();
        $('.strength_tab_con1').eq(index).addClass('strength_tab_con1_active').siblings('div').removeClass('strength_tab_con1_active');
    })

    // // 当大客户案例翻页时
    // var arr = [];
    // var $li = $(".swiperTab li");
    // arr.push($li)
    // console.log(arr.length)

    // $(".containerTouch").on("touchend", function (e) {
    //     $(".swiperTab li").removeClass('active2')
        
    //     // $(this).addClass("active2");
    //     var index = $(this).index();
    //     console.log(index)
    //     // $('.relatedList').eq(index+1).addClass('active2')
    //     if(index<3){
    //         $('.relatedList').eq(index+1).addClass('active2').siblings('div').removeClass('active2');
    //     }
    //     // else if(index == 4){
    //     //     index = 3;
    //     //     $('.relatedList').eq(index).addClass('active2').siblings('div').removeClass('active2');
    //     // }
    // })

   
    // 平台实力
    function playVideo() {
        var modal4_video = document.getElementById("modal4_video");
        modal4_video.play();
    }



    function pause() {
        var video = document.getElementById('modal4_video');
        video.pause();
    }





    /*swiper选项卡切换*/
    $(function () {
        //swiperTab 是你导航的className,active是你当前状态的className
        $('.swiperTab > li').eq(0).addClass('active2');
        tabs('.swiperTab > li', '.swiper-container2', 'active2');
        $('.swiper-slide2').on('mouseenter', function (e) {
            e.preventDefault(); /*清除默认点击事件*/
        });
    });

    //  服务内容
    $(".b2Con_box1").hover(
        function () {
            $(this).children(".b2Con_position").slideDown();
        },
        function () {
            $(this).children(".b2Con_position").slideUp();
        }
    );
    $(".b2Con_box2").hover(
        function () {
            $(this).children(".b2Con_position").slideDown();
        },
        function () {
            $(this).children(".b2Con_position").slideUp();
        }
    )

    // 自动轮播图
    var swiper = new Swiper('.webSwiper', {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            loop: true,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.active3',
            clickable: true,
        },
    });
    // 人物轮播图
    var swiper2 = new Swiper('.people', {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // 选项卡
    function tabs(obj, swiperObj, className) {
        var tabSwiper = new Swiper(swiperObj, {
            effect: 'flip', //切换效果
            speed: 500, //滑动速度，单位ms
            autoHeight: true, // 高度随内容变化
            onSlideChangeStart: function () {
                $(obj + "." + className).removeClass(className); /*有当前类名的删除类名,给下一个添加当前类名*/
                $(obj).eq(tabSwiper.activeIndex).addClass(className); /*activeIndex是过渡后的slide索引*/
            }
        });
        // 模拟点击事件，如果是移入事件，将mousedown 改为 mouseenter
        $(obj).on('touchstart mouseenter', function (e) {
            e.preventDefault(); /*清除默认事件*/
            $(obj + "." + className).removeClass(className);
            $(this).addClass(className); /*点击当前导航 改变当前样式*/
            tabSwiper.slideTo($(this).index()); /*滑动到对应的滑块*/
        });
        $(obj).click(function (e) {
            e.preventDefault(); /*清除默认点击事件*/
        });
    }

})