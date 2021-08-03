//gnb
$(function(){
    //mouseenter : mouse가 이 영역 안으로 들어갔을때
    //focus : tab키로 이동했을 때
    //on 이벤트 method
    $('.gnb > li > a').on('mouseenter focus', function(){
        var gnbindex = $('.gnb > li > a').index($(this));//index값이 대입이 된다.
                                                        //0 1 2
        // alert(gnbindex); //마우스 움직이면서 확인
        $('.gnb .inner').removeClass('on');
        $('.gnb .inner:eq('+ gnbindex +')').addClass('on'); //계속 생겨나서
        //스크립트는 순차적으로 하기 때문에
    });
     $('header').on('mouseleave', function(){ //header에서 마우스가 떠나면
         $('.gnb .inner').removeClass('on'); //지워줘야 한다.
     });
});

/* Fix Header */
//스크롤시에 header의 움직임 처리하기
var scrollFix = 0;
scrollFix = $(document).scrollTop();
fixHeader();

//윈도우창 조절시 이벤트
$(window).on('scroll resize', function(){
    scrollFix = $(document).scrollTop();
    fixHeader();
})

//고정헤더함수 -> fixHeader();
function fixHeader(){
    if(scrollFix>=150){
        $('header').addClass('on');
    }else{
        $('header').removeClass('on');
    }
}