window.onscroll = function () {
    let a = 50
    if (window.pageYOffset > a) {
        $(".headbgc").css({
            background: 'rgba(0, 0, 0, 0.85)'
        })
    }
    if (window.pageYOffset < a) {
        $(".headbgc").css({
            background: 'rgba(0, 0, 0, 0)'
        })

    }
}

let video = document.querySelector('.video_laika>video');
$('.video_laika').hide();
$('.bodyShadow').hide();
$(".palyVideo").click(function () {
    $('.video_laika').show();
    $(".palyVideo").hide();
    $('.bodyShadow').show();
    video.play();
    //禁止滚动条滚动
    unScroll();
})

$('.video_laika>div').click(function () {
    $('.video_laika').hide();
    $(".palyVideo").show();
    $('.bodyShadow').hide();
    video.pause();
    //移除禁止滚动条滚动
    removeUnScroll()
})

//禁止滚动条滚动
function unScroll() {
    var top = $(document).scrollTop();
    $(document).on('scroll.unable', function (e) {
        $(document).scrollTop(top);
    })
}
//移除禁止滚动条滚动
function removeUnScroll() {
    $(document).unbind("scroll.unable");
}


//版心宽度
$(".container_img").css({
    width:`100vw`
})