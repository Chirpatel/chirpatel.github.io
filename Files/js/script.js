function fadeout(){
    $(".preload").fadeOut(1000);
    $('body,html').css('overflow','visible');
    move();
}
function toggle(){
    $(".fa-bars").toggleClass("fa-times");
}
function move(){
    var hash = '#'+window.location.hash.substr(1);
    console.log(hash);
    if (hash !== "#") {
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
}
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });

var isVisible = false;
$('#fixedbutton').hide();
$(window).scroll(function(){
      var shouldBeVisible = $(window).scrollTop()>200;
      if (shouldBeVisible && !isVisible) {
          isVisible = true;
          $('#fixedbutton').show();
      } else if (isVisible && !shouldBeVisible) {
          isVisible = false;
          $('#fixedbutton').hide();
    }
});