$(document).ready(function() {

  var x=$('.menu');
  x.mouseenter(function(){
    $(this).children('.item-container').show(500);
    var y=$('.item-container')
    y.children('.itembis').show(500);

  });
  x.mouseleave(function(){
    $(this).children('.item-container').hide(500);
  });





    /*itemsContainer.mouseleave(function() {
        $(this).children('.item-container').hide();
    });

  $(".item").mouseleave(function(){
    $(this).children(".menu").hide();
  });

  /*$(".items").click(function(){
    $(this).children(".itembis").toggle(1000);
  });*/

});
