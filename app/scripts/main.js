$(document).ready(function(){
    $(document).click(function () {
    var _opened = $("#js-navbar-collapse").hasClass("in");
    if (_opened === true/* && !clickover.hasClass("navbar-toggle")*/) {
      $("button.navbar-toggle").click();
    }
  });

  function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
      $('.navbar').addClass("scrolled");
    }else{
      $('.navbar').removeClass("scrolled");
    }
  }

  if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
      checkScroll();
    });
  }

  $(".nav li").click(function(){
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });
});

tiles = $(".row.faded").fadeTo(0, 0);

$(window).scroll(function(d,h) {
  tiles.each(function(i) {
    a = $(this).offset().top + $(this).height();
    b = $(window).scrollTop() + $(window).height();
    if (a < b) $(this).fadeTo(500,1);
  });
});
