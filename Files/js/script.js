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
    window.location.hash = '';
    //console.log(hash);
    if(hash.charAt(1)=='1'){
      hash='#'+hash.substr(2);
    }
    if (hash !== "#") {
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          //window.location.hash = hash;
        });
      }
}
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        var hash = this.hash;
        if(hash.charAt(1)!='1'){
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          //window.location.hash = hash;
        });
      }
      }
    });
  });
var isVisible = false;
$('#fixedbutton1').hide();
$(window).scroll(function(){
      var shouldBeVisible = $(window).scrollTop()>200;
      if (shouldBeVisible && !isVisible) {
          isVisible = true;
          $('#fixedbutton1').show();
      } else if (isVisible && !shouldBeVisible) {
          isVisible = false;
          $('#fixedbutton1').hide();
    }
});
let root = document.documentElement;
function changeColor(color) {
  root.style.setProperty('--main-color', color);
}
$(document).ready(function(){
  $("#fixedbutton2").click(function(){
    $("#box").slideToggle();
  });
});