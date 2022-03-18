$(function(){

//사이드메뉴바
    $('.side_menu').click(function(e) {
        e.preventDefault();
        $('.menu_page').addClass('on');
        $('body').addClass('hidden')
        $('header').addClass('block')
    
    })
    $('.close_btn').click(function(e) {
        e.preventDefault();
        $('.menu_page').removeClass('on');
        $('body').removeClass('hidden')
        $('header').removeClass('block')
        
    
})

//gsap 마우스 커서 이동

    $('body').mousemove(function(e){
        console.log()
        xVal=e.clientX
        yVal=e.clientY,
    
        gsap.to('.circle',{
            x:xVal,
            y:yVal,
        })

    })
//마우스커서 크기 변화
    $('a').mouseover(function(){
        gsap.to('.circle',{
            scale:10,
        })
    })
    $('a').mouseleave(function(){
        gsap.to('.circle',{
            scale:1,
        })
    })
//hover 효과
    //끊임없이
$('.constantly').mouseover(function(){
    $('.circle').html('<img src="../constantly.gif" alt="">')
    $('.circle').addClass('on')
  })
  $('.constantly').mouseleave(function(){
      $('.circle').html('')
      $('.circle').removeClass('on')
  })
  //배우고
    $('.learn').mouseover(function(){
      $('.circle').html('<img src="../study.gif" alt="">')
      $('.circle').addClass('on')
    })
    $('.learn').mouseleave(function(){
        $('.circle').html('')
        $('.circle').removeClass('on')
    })
    //발전하는
    $('.levelup').mouseover(function(){
      $('.circle').html('<img src="../levelup.gif" alt="">')
      $('.circle').addClass('on')
    })
    $('.levelup').mouseleave(function(){
        $('.circle').html('')
        $('.circle').removeClass('on')
    })

    //FE개발자
    $('.programmer').mouseover(function(){
      $('.circle').html('<img src="../programmer.gif" alt="">')
      $('.circle').addClass('on')
    })
    $('.programmer').mouseleave(function(){
        $('.circle').html('')
        $('.circle').removeClass('on')
    })
    //100%
    $('.100').mouseover(function(){
      $('.circle').html('<img src="../100.png" alt="">')
      $('.circle').addClass('on')
    })
    $('.html').mouseleave(function(){
        $('.circle').html('')
        $('.circle').removeClass('on')
    })
  
 

 //80%
 $('.80').mouseover(function(){
    $('.circle').html('<img src="../80.png" alt="">')
    $('.circle').addClass('on')
  })
  $('.80').mouseleave(function(){
    $('.circle').html('')
    $('.circle').removeClass('on')
})

//60%
 $('.60').mouseover(function(){
    $('.circle').html('<img src="../60.png" alt="">')
    $('.circle').addClass('on')
  })
  $('.60').mouseleave(function(){
    $('.circle').html('')
    $('.circle').removeClass('on')
})





//skill부분 애니메이션 시작
    target = $('.sc_career').offset().top;
    $('.scroll').click(function(){
        $('html,body').animate({scrollTop:target})
    })

//포트폴리오 영역
    $('.sc_portfolio .contents').each(function(index,item){
        el = $('.sc_portfolio .img_area img')
        gsap.to(el,{
            scrollTrigger:{
                trigger:item, //시작점
                start:"top 40%", //[element 시작점, window시작점]
                end:"bottom bottom",//
                // markers:true,//표시자
                scrub:3,
            },
            scale:1.2,
        })
    })
   $('.gnb a').click(function(e){
       e.preventDefault();
      val = $(this).attr('href');
      result = $(val).offset().top;
      $('html,body').stop().animate({scrollTop:result})
   })
});
