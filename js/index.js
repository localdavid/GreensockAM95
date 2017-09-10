

// Moves shoe to right
window.onload = function(){
 TweenLite.to("#wrapper", 10, {left:100});
}



TweenMax.to("#stripe_3", 5, {className:"+=end"});


/*
// CSS plug in changes CSS fill on stripe to red over time
TweenLite.to("#stripe_3", 2, {css:{fill:"red"}, ease:Power2.easeOut});
*/
