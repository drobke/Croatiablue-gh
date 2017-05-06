// COUNTDOWN
function makeTimer(){

  var now = new Date() / 1000;
  var endTime = Date.UTC(2017, 7, 31, 18) / 1000;
  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400); 
  var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
  var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
  // uncomment this if you want it to say 03 HOURS, instead of 3 HOURS
  /*
  if (hours < "10") { hours = "0" + hours; }
  if (minutes < "10") { minutes = "0" + minutes; }
  if (seconds < "10") { seconds = "0" + seconds; }
  */

  $('#countdowndays p').html(days + ' Days');
  $('#countdownhours p').html(hours + ' Hours');
  $('#countdownmins p').html(minutes + ' Minutes');
  $('#countdownsecs p').html(seconds + ' Seconds');
  
  //ADAPT FONT SIZE 
  var fontwidth1 = $('#countdowndays p').width();
  var divwidth = $('.box').width();
  var size1 = parseFloat($('#countdowndays p').css('font-size'));
  var fontsize1 = (divwidth / fontwidth1) * size1;
        
  var fontwidth2 = $('#countdownhours p').width();
  var divwidth = $('.box').width();
  var size2 = parseFloat($('#countdownhours p').css('font-size'));
  var fontsize2 = (divwidth / fontwidth2) * size2;
        
  var fontwidth3 = $('#countdownmins p').width();
  var divwidth = $('.box').width();
  var size3 = parseFloat($('#countdownmins p').css('font-size'));
  var fontsize3 = (divwidth / fontwidth3) * size3;
        
  var fontwidth4 = $('#countdownsecs p').width();
  var divwidth = $('.box').width();
  var size4 = parseFloat($('#countdownsecs p').css('font-size'));
  var fontsize4 = (divwidth / fontwidth4) * size4;
        
  $('#countdowndays p').css('font-size', fontsize1);
  $('#countdownhours p').css('font-size', fontsize2);
  $('#countdownmins p').css('font-size', fontsize3);
  $('#countdownsecs p').css('font-size', fontsize4);
}
// update every second
setInterval(function() { makeTimer(); }, 1000);

$(document).ready(function () {
    $('#welcome').ripples({

        // The width and height of the WebGL texture to render to. 
        // The larger this value, the smoother the rendering and the slower the ripples will propagate.
        resolution: 1000,

        // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
        dropRadius: 6,

        // Basically the amount of refraction caused by a ripple. 
        // 0 means there is no refraction.
        perturbance: 0,

        // Whether mouse clicks and mouse movement triggers the effect.
        interactive: true,

        // The crossOrigin attribute to use for the affected image. 
        crossOrigin: ''

    });
});

