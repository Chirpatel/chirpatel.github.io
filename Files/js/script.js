var colorpage="#00e5e5";

function fadeout(){
    color();
    $(".preload").fadeOut(1000);
    $('body,html').css('overflow','visible');
    move();
}
function toggle(){
    $(".fa-bars").toggleClass("fa-times");
}
const colors = ["#00e5e5","#42f940","#ff6ec7","#FFF857","#FD1C03","#BE00FE"]
function color(){
  var hash = '#'+window.location.hash.substr(1);
  var l = hash.split('#')
  if(colors.includes('#'+l[1])){
    //console.log("Color Changed to: ",l[1]);
    colorpage = '#'+l[1];
    window.location.hash = '';
  }
  else if(colors.includes('#'+l[2])){
    //console.log("Color Changed to: ",l[2]);
    colorpage = '#'+l[2];
    window.location.hash = l[1];
  }
  //console.log("Color",colorpage);
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
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        var hash = this.hash;
        //console.log(hash);
        if(hash.charAt(1)!='1'&& hash!='#palette'){
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          //window.location.hash = hash;
        });
      }
      else{
        event.preventDefault();
        //console.log(event.target.href+colorpage);
        //console.log(event);
        if(event.originalEvent.path[0].href==undefined)
          window.location.href = event.originalEvent.path[1].href+colorpage;
        else
          window.location.href = event.originalEvent.path[0].href+colorpage;
      }
      }
      else{
        event.preventDefault();
        //console.log(event.target.href+colorpage);
        //console.log(event.originalEvent.path[0].href);
        //console.log(event.originalEvent.path[1].href);
        if(event.originalEvent.path[0].href==undefined)
          window.location.href = event.originalEvent.path[1].href+colorpage;
        else
          window.location.href = event.originalEvent.path[0].href+colorpage;
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
  //window.location.hash = color;
  colorpage = color;
  root.style.setProperty('--main-color', colorpage);
}
$(document).ready(function(){
  $("#fixedbutton2").click(function(){
    $("#box").slideToggle();
  });
});