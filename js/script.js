//オープニングアニメーション

$(function () {
  $(".main_site").css("display", "none");
  $(".main_site").css({ opacity: '0' });
  $('.animation_load span:nth-child(1)').animate({
    opacity: 0
  }, 200, 'swing');
  setTimeout(function () {
    $('.animation_load span:nth-child(2)').animate({
      opacity: 0
    }, 200, 'swing');
  }, 400);
  setTimeout(function () {
    $('.animation_load span:nth-child(3)').animate({
      opacity: 0
    }, 200, 'swing');
  }, 600);
  setTimeout(function () {
    $('.animation_load span:nth-child(4)').animate({
      opacity: 0
    }, 200, 'swing');
    $('.animation_load span:nth-child(1)').animate({
      opacity: 1
    }, 200, 'swing');
  }, 800);
  setTimeout(function () {
    $('.animation_load span:nth-child(5)').animate({
      opacity: 0
    }, 200, 'swing');
    $('.animation_load span:nth-child(2)').animate({
      opacity: 1
    }, 200, 'swing');
  }, 1000);
  setTimeout(function () {
    $('.animation_load span:nth-child(6)').animate({
      opacity: 0
    }, 200, 'swing');
    $('.animation_load span:nth-child(3)').animate({
      opacity: 1
    }, 200, 'swing');
  }, 1200);
  setTimeout(function () {
    $('.animation_load span:nth-child(7)').animate({
      opacity: 0
    }, 200, 'swing');
    $('.animation_load span:nth-child(4)').animate({
      opacity: 1
    }, 200, 'swing');
  }, 1400);
  setTimeout(function () {
    $('.animation_load span:nth-child(5)').animate({
      opacity: 1
    }, 200, 'swing');
    $('.animation_load span:nth-child(1)').animate({
      opacity: 0
    }, 200, 'swing');
  }, 1600);
  setTimeout(function () {
    $('.animation_load span:nth-child(6)').animate({
      opacity: 1
    }, 200, 'swing');
    $('.animation_load span:nth-child(2)').animate({
      opacity: 0
    }, 200, 'swing');
  }, 1800);
  setTimeout(function () {
    $('.animation_load span:nth-child(7)').animate({
      opacity: 1
    }, 200, 'swing');
    $('.animation_load span:nth-child(3)').animate({
      opacity: 0
    }, 200, 'swing');
  }, 2000);
  setTimeout(function () {
    $('.animation_load span:nth-child(1)').animate({
      opacity: 1
    }, 200, 'swing');
    $('.animation_load span:nth-child(4)').animate({
      opacity: 0
    }, 200, 'swing');
  }, 2200);
  setTimeout(function () {
    $('.animation_load span:nth-child(2)').animate({
      opacity: 1
    }, 200, 'swing');
    $('.animation_load span:nth-child(5)').animate({
      opacity: 0
    }, 200, 'swing');
  }, 2400);
  setTimeout(function () {
    $('.animation_load span:nth-child(3)').animate({
      opacity: 1
    }, 200, 'swing');
    $('.animation_load span:nth-child(6)').animate({
      opacity: 0
    }, 200, 'swing');
  }, 2600);
  setTimeout(function () {
    $('.animation_load span:nth-child(4)').animate({
      opacity: 1
    }, 200, 'swing');
    $('.animation_load span:nth-child(7)').animate({
      opacity: 0
    }, 200, 'swing');
  }, 2800);
  setTimeout(function () {
    $('.animation_load span:nth-child(5)').animate({
      opacity: 1
    }, 200, 'swing');
  }, 3000);
  setTimeout(function () {
    $('.animation_load span:nth-child(6)').animate({
      opacity: 1
    }, 200, 'swing');
  }, 3200);
  setTimeout(function () {
    $('.animation_load span:nth-child(7)').animate({
      opacity: 1
    }, 200, 'swing');
  }, 3400);
  setTimeout(function () {
    $('.animation_load').css("display", "none");
  }, 3400);
  setTimeout(function () {
    $('.animation').animate('tile', {
      "duration": 1500,
      "rows": 10,
      "cols": 10,
    });
  }, 3400);
  setTimeout(function () {
    $(".animation").stop().animate({ opacity: '0' }, 300);
  }, 4900);
  setTimeout(function () {
    $('.animation').css("display", "none");
  }, 5200);
  setTimeout(function () {
    $(".main_site").css("display", "block");
    $(".main_site").stop().animate({ opacity: '1' }, 1000);
  }, 5200);
});

//////////////////////////////////////////////////////
//ハンバーガーメニュー

$(function () {
  $('.hamburger_btn').click(function () {
    $(".hamburger_btn").toggleClass('open');
    $(".hamburger_inner").fadeToggle(500);
  });
  $('.hamburger_inner ul li').click(function () {
    $('.hamburger_inner').css("display", "none");
    $(".hamburger_btn").removeClass('open');
  });
  $('.hamburger_btn').hide();
  $(window).scroll(function () {
    var $offset = $('.profile').offset();
    if ($(window).scrollTop() > $offset.top) {
      $('.hamburger_btn').fadeIn(500);
    } else {
      $('.hamburger_btn').fadeOut(500);
    }
  });
});

//////////////////////////////////////////////////////
//ボックスアニメーション

$(function () {
  setInterval(function () {
    $('.header_box_1').animate({
      'top': '20%', 'left': '20%', 'opacity': '0.6'
    }, 0).animate({
      'top': '100%', 'left': '20%', 'opacity': '0'
    }, 24000).animate({
      'top': '0%', 'left': '20%', 'opacity': '0.8'
    }, 0).animate({
      'top': '20%', 'left': '20%', 'opacity': '0.6'
    }, 6000)
  }, 5200);
  setInterval(function () {
    $('.header_box_2').animate({
      'top': '60%', 'left': '60%', 'opacity': '0.7'
    }, 0).animate({
      'top': '100%', 'left': '60%', 'opacity': '0'
    }, 12000).animate({
      'top': '0%', 'left': '60%', 'opacity': '0.3'
    }, 0).animate({
      'top': '60%', 'left': '60%', 'opacity': '0,7'
    }, 18000)
  }, 5200);
  setInterval(function () {
    $('.header_box_3').animate({
      'top': '0%', 'left': '40%', 'opacity': '0.8'
    }, 0).animate({
      'top': '100%', 'left': '40%', 'opacity': '0'
    }, 30000).animate({
      'top': '0%', 'left': '40%', 'opacity': '0.8'
    }, 0)
  }, 5200);
  setInterval(function () {
    $('.header_box_4').animate({
      'top': '50%', 'left': '10%', 'opacity': '0.9'
    }, 0).animate({
      'top': '0%', 'left': '10%', 'opacity': '0'
    }, 15000).animate({
      'top': '100%', 'left': '10%', 'opacity': '0'
    }, 0).animate({
      'top': '50%', 'left': '10%', 'opacity': '0.9'
    }, 15000)
  }, 5200);
  setInterval(function () {
    $('.header_box_5').animate({
      'top': '20%', 'left': '90%', 'opacity': '0.8'
    }, 0).animate({
      'top': '0%', 'left': '90%', 'opacity': '0'
    }, 6000).animate({
      'top': '100%', 'left': '90%', 'opacity': '0'
    }, 0).animate({
      'top': '20%', 'left': '90%', 'opacity': '0.8'
    }, 24000)
  }, 5200);
  setInterval(function () {
    $('.header_box_6').animate({
      'top': '70%', 'left': '70%', 'opacity': '0.9'
    }, 0).animate({
      'top': '0%', 'left': '70%', 'opacity': '0.3'
    }, 21000).animate({
      'top': '100%', 'left': '70%', 'opacity': '0'
    }, 0).animate({
      'top': '70%', 'left': '70%', 'opacity': '0.9'
    }, 9000)
  }, 5200);
  setInterval(function () {
    $('.header_box_7').animate({
      'top': '10%', 'left': '10%', 'opacity': '0.7'
    }, 0).animate({
      'top': '10%', 'left': '100%', 'opacity': '0.3'
    }, 36000).animate({
      'top': '10%', 'left': '0%', 'opacity': '0.9'
    }, 0).animate({
      'top': '10%', 'left': '10%', 'opacity': '0.7'
    }, 4000)
  }, 5200);
  setInterval(function () {
    $('.header_box_8').animate({
      'top': '50%', 'left': '40%', 'opacity': '0.9'
    }, 0).animate({
      'top': '50%', 'left': '100%', 'opacity': '0.3'
    }, 24000).animate({
      'top': '50%', 'left': '0%', 'opacity': '0.3'
    }, 0).animate({
      'top': '50%', 'left': '40%', 'opacity': '0.9'
    }, 16000)
  }, 5200);
  setInterval(function () {
    $('.header_box_9').animate({
      'top': '40%', 'left': '70%', 'opacity': '1'
    }, 0).animate({
      'top': '40%', 'left': '100%', 'opacity': '0.5'
    }, 12000).animate({
      'top': '40%', 'left': '0%', 'opacity': '0.7'
    }, 0).animate({
      'top': '40%', 'left': '70%', 'opacity': '1'
    }, 28000)
  }, 5200);
  setInterval(function () {
    $('.header_box_10').animate({
      'top': '85%', 'left': '20%', 'opacity': '1'
    }, 0).animate({
      'top': '85%', 'left': '0%', 'opacity': '0.3'
    }, 8000).animate({
      'top': '85%', 'left': '100%', 'opacity': '0.8'
    }, 0).animate({
      'top': '85%', 'left': '20%', 'opacity': '1'
    }, 32000)
  }, 5200);
  setInterval(function () {
    $('.header_box_11').animate({
      'top': '25%', 'left': '50%', 'opacity': '0.7'
    }, 0).animate({
      'top': '25%', 'left': '0%', 'opacity': '0.3'
    }, 20000).animate({
      'top': '25%', 'left': '100%', 'opacity': '1'
    }, 0).animate({
      'top': '25%', 'left': '50%', 'opacity': '0.8'
    }, 20000)
  }, 5200);
  setInterval(function () {
    $('.header_box_12').animate({
      'top': '75%', 'left': '30%', 'opacity': '0.7'
    }, 0).animate({
      'top': '75%', 'left': '0%', 'opacity': '0.3'
    }, 12000).animate({
      'top': '75%', 'left': '100%', 'opacity': '1'
    }, 0).animate({
      'top': '75%', 'left': '30%', 'opacity': '0.8'
    }, 28000)
  }, 5200);
});
//////////////////////////////////////////////////////
//スライダー
$(function () {
  $('.work_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    autoplay: true,
    centerPadding: '0',
    autoplaySpeed: 3000,
    speed: 1000,
    cssEase: 'ease-in-out',
    lazyLoad: 'ondemand',
    arrows: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        }
      }
    ]
  })
  $(".slider_pure").css("display", "none");
  $(".btn_web").click(function () {
    //            線の表示を切り替える
    $(".btn_web").removeClass("work_btn");
    $(".btn_pure").addClass("work_btn");
    $(".slider_web").css("display", "block");
    $(".slider_pure").css("display", "none");

  });
  $(".btn_pure").click(function () {
    //            線の表示を切り替える
    $(".btn_pure").removeClass("work_btn");
    $(".btn_web").addClass("work_btn");
    $(".slider_pure").css("display", "block");
    $(".slider_web").css("display", "none");
  });
});

//////////////////////////////////////////////////////

//スクロールアニメーション
$(function () {
  $('.scroll_profile').click(function () {
    $("html,body").animate({ scrollTop: $('.profile').offset().top }, 500);
  });
  $('.scroll_skill').click(function () {
    $("html,body").animate({ scrollTop: $('.skill').offset().top }, 600);
  });
  $('.scroll_work').click(function () {
    $("html,body").animate({ scrollTop: $('.work').offset().top }, 700);
  });
});

//////////////////////////////////////////////////////

//スクロールフェードイン
$(function () {
  $('.fadein').css("opacity", "0.1");
  $('.fadein').css("transform", "translate(0,100px)");
  $('.fadein').css("-webkit-transform", "translate(0,100px)");
  $('.fadein').css("-moz-transform", "translate(0,100px)");

  $(window).scroll(function () {
    $('.fadein').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });
});