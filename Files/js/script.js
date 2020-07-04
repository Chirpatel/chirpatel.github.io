var colorpage = localStorage.getItem("colorpage");
function fadeout(){
    color();
    $(".preload").fadeOut(1500);
    $('body,html').css('overflow','visible');
    move();
}
function toggle(){
    $(".fa-bars").toggleClass("fa-times");
}

function color(){
  root.style.setProperty('--main-color', colorpage);
}

function move(){
    var hash = '#'+window.location.hash.substr(1);
    window.location.hash = '';
    //console.log(hash);
    if(hash.charAt(1)=='1' ){
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
  color();
  $('.loadingio-spinner-dual-ring-vfuhar7q0dc').fadeIn(10);
    $("a").on('click', function(event) {
      if (this.hash !== "" ) {
        var hash = this.hash;
        //console.log(hash);
        //console.log(hash);
        if(this.hash=='#pallete'){
          event.preventDefault();
          window.location.hash='';
        }
        else if(hash.charAt(1)!='1'){
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
  window.location.hash = '';
  localStorage.setItem("colorpage", color);
  colorpage = color;
  root.style.setProperty('--main-color', colorpage);
}
$(document).ready(function(){
  $("#fixedbutton2").click(function(){
    window.location.hash = '';
    $("#box").slideToggle();
  });
});