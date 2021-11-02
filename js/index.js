




$('html, body').stop().animate({
    scrollLeft : 0
}, 1000)



$('#nav li').eq(0).addClass('on')
var cflag = false;
$('#nav li a').on('click focus', function(e){
    e.preventDefault()
    cflag = true;
    $(this).parent().addClass('on')
    $(this).parent().siblings().removeClass('on')
    var num = $(this).parent().index()
    
    if (num===0) {
        $('.skillContainer > div').find('.score').css({ height:'0%' })
        $('.skillContainer').removeClass('on')
    } else if (num===1) {
        if ( !$('.skillContainer').hasClass('on')) {
            $('.skillContainer').addClass('on')
            count(80, '.html', 15)
            count(80, '.css', 18)
            count(60, '.script', 21)
            count(70, '.jquery', 25)
            count(50, '.react', 29)
        }
    }

    if (num<2) {
        $('#sect3').removeClass('on')
        $('#sect3 .portfolio ul li').css({
            transitionDelay:'0s'
        })
    } else {
        $('#sect3 .portfolio ul li').css({
            transitionDelay:'1s'
        })
        $('#sect3').addClass('on')
    }
    
    if (num<3) {
        $('#sect4').removeClass('on')
        $('#sect4 h3').css({
            transitionDelay:'0s'
        })
    } else {
        $('#sect4 h3').css({
            transitionDelay:'1s'
        })
        $('#sect4').addClass('on')
    }

    var secDist = $('section').eq(num).offset().left
    $('html, body').stop().animate({
        scrollLeft : secDist
    }, 1000, function(){
        cflag = false
    })

})


function count(jumsu, cname, time) {
    let num = 0; 
    var stop = setInterval(function(){
        num++;
        if (num<=jumsu) {
            $(cname).find('.score').css({ height:num+'%', transition:'all 0s' })
            $(cname).find('.myscore').text(num+'%')
        } else {
            clearInterval(stop)
            $(cname).find(".score").css({height:num+'%', transition:'all 1s'})
        }
    }, time)
}


var sDist0 = $('#sect1').offset().left
var sDist1 = $('#sect2').offset().left
var sDist2 = $('#sect3').offset().left

// 마지막구간이 윈도우높이보다 클때
var lastSect = $('#sect4').offset().left            

var sct=0;
$(window).on('scroll', function(){
    // var wh = $(this).height()
    sct = $(this).scrollLeft()
    if ( sct>=sDist0 && sct<sDist1 && !cflag) {
        $('#nav li').eq(0).addClass('on')
        $('#nav li').eq(0).siblings().removeClass('on')
        $('.skillContainer > div').find('.score').css({ height:'0%' })
        $('.skillContainer').removeClass('on')
    } else if ( sct>=sDist1 && sct<sDist2 && !cflag) {
        $('#nav li').eq(1).addClass('on')
        $('#nav li').eq(1).siblings().removeClass('on')
        if ( !$('.skillContainer').hasClass('on') ) {
            $('.skillContainer').addClass('on')
            count(80, '.html', 15)
            count(80, '.css', 16)
            count(60, '.script', 17)
            count(70, '.jquery', 18)
            count(50, '.react', 19)
        }
        $('#sect3').removeClass('on')
        $('#sect3 .portfolio ul li').css({
            transitionDelay:'0s'
        })
    } else if ( sct>=sDist2 && sct<lastSect && !cflag) {
        $('#nav li').eq(2).addClass('on')
        $('#nav li').eq(2).siblings().removeClass('on')
        $('#sect4').removeClass('on')
        $('#sect4 h3').css({
            transitionDelay: '0s'
        })
        $("#sect3").addClass('on')
    } else if ( sct>=lastSect && !cflag) {
        $('#nav li').eq(3).addClass('on')
        $('#nav li').eq(3).siblings().removeClass('on')
        $('#sect4').addClass('on')
    } 

})


$('section').on('mousewheel', function(event, delta){
    if (delta>0) {    // 마우스휠을 위로 굴리면 양수
        $('html, body').stop().animate({
            scrollLeft: $(this).prev().offset().left
        }, 600)
    } else if (delta<0) {  // 마우스휠을 아래로 굴리면 음수
        $('html, body').stop().animate({
            scrollLeft: $(this).next().offset().left
        }, 600)
    }
})



// 햄버거 클릭시 메뉴박스 오픈하기
$('.open').on('click', function(){
    
    if ( $(this).hasClass('on') ) {
        $(this).removeClass('on')
        // $(this).find('i').removeClass('fa-times').addClass('fa-bars')
    } else {
        $(this).addClass('on')
        // $(this).find('i').removeClass('fa-bars').addClass('fa-times')
    }

})

// 햄버거 메뉴박스 닫기
$('.openlist li a').on('click', function(e){
    e.preventDefault()
    $('.open').removeClass('on')
    var num = $(this).parent().index()
    let opensct =  $("section").eq(num).offset().left
    $('html, body').animate({
        scrollLeft:opensct
    }, 800)
})




// 1번째 구역
var text = document.getElementById('text')
var shadow = '';
for(var i=0; i<30; i++) {
    shadow +=(shadow? ',':'')+ -i*1+'px '+i*1+'px 0 #d9d9d9'
}
text.style.textShadow = shadow;








// 3번째 구역
$('.slideInner').slick({
    autoplay:false,
    slidesToShow:1,
    autoplaySpeed: 2000,
    slidesToScroll:1,
    arrows:true,
    nextArrow: '<a href="javascript:;" class="arrow prev"><img src="./img/portNext.png" alt=""></a>',
    prevArrow: '<a href="javascript:;" class="arrow next"><img src="./img/portPrev.png" alt=""></a>',
})




// 4번째 구역
$("#email").on('mouseover', function(){
    $("#cuboid form").addClass("ready");
})

$("#email").on('mouseout', function(){
    $("#cuboid form").removeClass("ready");
})




// 로드페이지
$(window).on('load', function(){
    var i = 0;
    var timer = setInterval(add, 30)

    function add(){
        i++
        if (i>=100) {
            clearInterval(timer)
            $('.introAni').delay(1000).fadeOut(0)
            // $('.introAni').animate({},1000, function(){
            //     $(this).hide()
            // })
        }
        $('.introAni .num').text(i+'%')
    }
})