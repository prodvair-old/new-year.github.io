$(document).ready(function() {
  document.getElementById('player').volume=0.2;
  $('.animate-present .snow2').addClass('bounceInUp');
  $('.animate-present .snow1').addClass('bounceInUp');
  $('.deer').addClass('fadeInDown');
  $('.mail').addClass('fadeInRight');
  setTimeout(short, 100);
  setTimeout(medium, 300);
  setTimeout(long, 400);
  function short() {
    $('.animate-present .big-present').addClass('bounceInUp');
    $('.animate-present .big-lollipop').addClass('bounceInUp');
    $('.animate-present .ball').addClass('bounceInUp');
  };
  function medium() {
    $('.animate-present .small-lollipop').addClass('bounceInUp');
    $('.animate-present .small-present').addClass('bounceInUp');
  };
  function long() {
    $('.logo').addClass('jello');
    $('.animate-present .santa').addClass('bounceInUp');
  }
  $('.logo').hover(
    function() {
      $(this).removeClass('jello');
      $(this).addClass('tada');
    },
    function() {
      $(this).removeClass('tada');
    }
  );
  $('.items-animate div').hover(
    function() {
      if (!$(this).hasClass('santa')) {
        $(this).removeClass('bounceInUp');
        $(this).addClass('tada');
      }
    },
    function() {
      $(this).removeClass('tada');
    }
  );
  if($(window).width() > 1024)
  {
      $('body').parallax({
          'elements': [
              {
                  'selector': '.snowfall',
                  'properties': {
                      'x': {
                          'background-position-x': {
                              'initial': 0,
                              'multiplier': 0.02,
                              'invert': false
                          }
                      },
                      'y': {
                          'background-position-y': {
                              'initial': 0,
                              'multiplier': 0.02,
                              'invert': false
                          }
                      }
                  }
              }
          ]
      });
  }

});

$('.mail').click(function() {
    // $('.mail-show').css("visibility","visible");
    $('.mail-show').css('display','block');
    $('.mail-show').addClass('bounceInUp');
    setTimeout("$('.mail-show__text').addClass('slideInUp')", 100);
    setTimeout(function () {
      $('.mail-show').removeClass('bounceInUp');
      $('.mail-show__text').removeClass('slideInUp');
    }, 900);
  }
);

$('.close').click(
  function() {
    $('.mail-show__text').addClass('slideOutDown');
    setTimeout("$('.mail-show').addClass('bounceOutDown')", 200);
    setTimeout(function () {
      $('.mail-show').removeClass('bounceOutDown');
      $('.mail-show__text').removeClass('slideOutDown');
      $('.mail-show').css('display','none');
      // $('.mail-show').css('visibility','hidden');
    }, 900);
  }
);

$('.mute').click(function () {
  var player = document.getElementById('player');
  if (player.paused) {
    $('.mute i').removeClass('fa-volume-off');
    $('.mute i').addClass('fa-volume-up');
    player.play();
  } else {
    $('.mute i').removeClass('fa-volume-up');
    $('.mute i').addClass('fa-volume-off');
    player.pause();
  }
});
