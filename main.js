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
  var y=$('.itembis-continer');
  y.mouseenter(function(){
    $(this).children('.itembis').show(500);
      });
      y.mouseleave(function(){
        $(this).children('.item-container').hide(500);
      });








});
