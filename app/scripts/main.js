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