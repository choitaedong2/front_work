$(() => {

    // nav 각각 내려오게 하기
    // mouseenter: li경계 안으로 들어오면, mouseover: li안에 들어오면
    $('.nav>li').mouseover(function() {
        $(this).children('.submenu').stop().slideDown();
    });
    $('.nav>li').mouseout(function() {
        $(this).children('.submenu').stop().slideUp();
    });


    // nav 전체가 내려오게 하기
    /*
    $('.nav').mouseenter(function() {
        $('.submenu').stop().slideDown();
    });
    $('.nav').mouseout(function() {
        $('.submenu').stop().slideUp();
    });
    */

    // 함수를 호출하는 자리에 함수 지정시 괄호 생략
   setInterval(slide , 2000);

   let x = $('#imgslide>img');
   let y = 3;
   function slide(x, y) {
    y--;
    if(y==0) {
        x.fadeIn();
        y=3;
    } else {
        x.eq(y).fadeOut();
    }
   }
})