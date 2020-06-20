function fadeout(){
    $(".preload").fadeOut(1000);
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

