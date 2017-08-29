/* GreenSock TweenMax
https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js
*/

// Moves shoe to right
window.onload = function(){
 TweenLite.to("#wrapper", 10, {left:600});
}


// CSS plug in changes CSS fill on stripe to red over time
TweenLite.to("#stripe_3", 2, {css:{fill:"red"}, ease:Power2.easeOut});
