/* main.js */


$(function () {
    
    // vegas-slider 

    $("header").vegas({
        slides: [
            { src: 'images/main1.jpg' },
            { src: 'images/main2.jpg' },
            { src: 'images/main3.jpg' }
        ],
        transition: 'slideLeft',
        // timer : 기본 슬라이더 보이지 않게 하기
        timer: false,
        delay: 5000,
        // 처음 이미지가 바로 보이게(기본 세팅)
        firstTransition: 'fade',
    });

    // header-indicator

    $('.indicator .back').on('click', function () {
        $('header').vegas('options', 'transition', 'slideRight2').vegas('previous');
    });

    $('.indicator .next').on('click', function () {
        $('header').vegas('options', 'transition', 'slideLeft2').vegas('next');
    });

    // header slide-down

    $('.slide-down a').on('click', function () {
        var scrollPosition = $("#about").offset().top;
        console.log('click ', scrollPosition)
        $("body,html").animate({
            scrollTop: scrollPosition
        }, 500);

        return false;
    });

    // header menu 
    $('header .menu').on('click', function(){
        $('#main-menu').toggleClass('show');
    });
    $('header #main-menu .depth1 > li').on('click', function(){
        $('#main-menu .depth2').toggleClass('show');
    });

    // footer indicator
    $('.top-btn').on('click', function () {
        var scrollPosition = $("#main-header").offset().top;
        console.log('click ', scrollPosition)
        $("body,html").animate({
            scrollTop: scrollPosition
        }, 500);

        return false;
    });




    // bx slider 초기화

        $('.slider').bxSlider({
        // 옵션
        mode : "horizontal", // 재생 방향
        auto : true, // 자동재생(true/false)
        pause : 3000, // 대기시간(ms)
        pager : true, // 하단 인디케이터 표시
        autoHover : false, // 마우스 오버 시 정지
        controls : true, // 좌우 화살표 표시 여부
        captions : false // 설명글 추가 
    });



    // reservation page calender

    $("#my-calendar").datepicker({
      dateFormat: 'yy-mm-dd',
      minDate: new Date(), // 금일 이후
      onShow: function(inst){
        var info = $(this).val(inst);
        console.log('onShow: ', info);
      },
      onSelect: function(dateText, inst) {
        // dateText:년-월-일, inst: new Date()
        console.log(dateText, ', ', inst);
      }
    });
    var d = new Date().toLocaleDateString();
    $("#my-calendar").val(d);


    // 문서 scroll 확인
    // scrollTop
    $(document, window).scroll(function(){
        var s = $(document).scrollTop();
        // console.log(s);
        if(s>650){
            $('.top-btn').addClass('show');
        }else if(s<400){
            $('.top-btn').removeClass('show');

        }

        
        
      });
    
  });


 





