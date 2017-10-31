/*
document.getElementById("stripe_3").style.fill = "blue";

// Select #stripe3 by making it accessing it as a variable
var stripe3 = document.getElementById('stripe_3');
console.log(stripe3);

// Make a variable out of the stripe color.
var color1 = window.getComputedStyle(stripe3).getPropertyValue("fill");
console.log(color1);


// Set style property in JS
//https://www.safaribooksonline.com/library/view/pro-html5-with/9781484224632/A419240_1_En_19_Chapter.html

stripe3.style.fill = "--primary-color";


// stripe3.setProperty("fill", "green");
*/


// Done using bottom answer here
 // getComputedStyle gets all the styles for stripe3, but you are just dealing with the fill property.
window.getComputedStyle(document.stripe3).getPropertyValue('fill');

document.stripe3.setProperty('fill', '--primary-color');

