/*
	MAIN SCRIPTS - Last updated: 02-10-14
*/
//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(document).ready(function() {
	NProgress.start(); // Start preloader bar
});

window.onload = function(){
    NProgress.done();
}

//-----------------------------------------------------------------
// Kickstart Foundation / Touch Conditionals
//-----------------------------------------------------------------

var isTouchDevice = $(".touch").length;

if (isTouchDevice) {

    // Trigger hamburger by touch on mobile - this eliminates glitch with FastClick.js
    $(".hamburger").css("visibility", "visible").bind("touchstart", function() { $("#off-canvas-menu").trigger("open.mm"); });
} else {
    // Trigger hamburger with a click on desktop
    $(".hamburger").css("visibility", "visible").bind("click", function() { $("#off-canvas-menu").trigger("open.mm"); });
}

//-----------------------------------------------------------------
// 'MMenu' Settings
//-----------------------------------------------------------------

$("#off-canvas-menu").mmenu({
   "offCanvas": {
      "position": "right"
   }
});

//-----------------------------------------------------------------
// <= IE8 Caution Message
//-----------------------------------------------------------------

$('.lv-alert .close-btn').click(function(){$(this).parent().hide();});

//-----------------------------------------------------------------
// +++ HELPERS +++
//-----------------------------------------------------------------

// function trace(command){console.log(command+" ("+typeof(command)+")");}

//==================================================
// Developer: COMMAND+S for screen width
//==================================================

$(document).keypress(function(event) {
    if (event.which == 115 && (event.ctrlKey||event.metaKey)|| (event.which == 19)) {
        event.preventDefault();
        console.log("(w) "+$(window).width()+" (h) "+$(window).height());
        return false;
    }
    return true;
});

//==================================================
// Submit Search Form by Hitting Enter
//==================================================

// $("#search-form").keypress(function(event) {
//     if (event.which == 13) {
//         event.preventDefault();
//         $("#search-form").submit();
//     }
// });

//==================================================
//
//==================================================