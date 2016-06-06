$(document).ready(function() {
  console.log('JS ready');

var getA = $('a');
var getID = $('#logo');
var getAllPost = $('.post');
var getFirstPost = $('.post')[0];
var getSecondPost = $('.post')[1];
var getContent = $('a')[0].innerHTML;
var thirdPost = $('.post:nth-child(3)');
// var fourthImg = $('img')[3];
var fourthImg = $('.post:nth-child(4)');

console.log(getA);
console.log(getID);
console.log(getAllPost);
console.log(getFirstPost);
console.log(getSecondPost);
console.log(getContent);
console.log(thirdPost);
console.log(fourthImg);


// After lunch work.
$('<p style="color:red" class="mate-div">Hello Mate</p>').appendTo('div');
$('img').after('<div class"image-quote" style="color:blue">This image is very unique.</div>');
$('p').after( $("#logo") );



});


