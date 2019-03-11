// START FUNCTION IMPLEMENTATION

// Fish random movement

function randomMovement(IdRef) {
    var positionH = $(window).height() - $(IdRef).height();
    var positionW = $(window).width() - $(IdRef).width();
    var time = Math.floor(((Math.random() * 3) +2) * 1000);
    $(IdRef).animate({left: Math.floor(Math.random() * positionW), top: Math.floor(Math.random() * positionH)}, time, function () {
        randomMovement(IdRef)});
}

randomMovement("#fish1Id");
randomMovement("#fish2Id");



//Blue fish


$('#fish2Id').mouseover(function () {
    $('#fish2Id').stop(true);
    var x = Math.floor(Math.random() * ($(window).width() - $(this).width()));
    var y = Math.floor(Math.random() * ($(window).height() - $(this).height()));

    $('#fish2Id').animate({top: y, left: x});
    randomMovement("#fish2Id");
});
		

// Red fish


$('#fish1Id').dblclick(function() {
    $('#fish1Id').stop(true).animate({height: 500, width: 500},"slow").delay(1000,function(){
     $('#fish1Id').animate({height: 250, width: 250});   
    });
    randomMovement("#fish1Id");
});


$(document).click(function(event) {
    $('#fish1Id').stop(true);
    var y = event.pageY - $('#fish1Id').height()/2;
    var x = event.pageX - $('#fish1Id').width()/2;
    $('#fish1Id').delay(40).animate({top: y, left: x});
    randomMovement("#fish1Id");
});



// BUBBLES IMPLEMENTATION

var bubbleAnimationSpeedRandom = 3000;
var bubbleAnimationSpeedStatic = 3000;
var bubbleAnimationCooldownRandom = 100;
bubbleAnimateLoop('#bubble1Id', true, -1);
bubbleAnimateLoop('#bubble2Id', true, -1);
bubbleAnimateLoop('#bubble3Id', true, -1);
$('.bubbleClass').click(function() { 
 $(this).stop(true);
 $(this).fadeOut(400, function() { bubbleAnimateLoop($(this), false); });
});

function bubbleAnimateLoop(idRef, initialDelay, hitCount)
{  
 $(idRef).show();
 //move bubbles out of the viewport
 var x = Math.floor(Math.random() * ($(window).width() - $(idRef).width()));
 var y = Math.floor($(window).height());
 $(idRef).offset({ left: x, top: y});
 
 //animate towards the top of the viewport
 var animateY = -$(idRef).height();
 if(initialDelay)
  $(idRef).delay(Math.random() * 4000);
 $(idRef).animate({
   top: animateY
  }, Math.random() * bubbleAnimationSpeedRandom + bubbleAnimationSpeedStatic, "linear", function () {
   bubbleAnimateLoop(idRef, false, 0);
  }).delay(Math.random() * bubbleAnimationCooldownRandom);
}
