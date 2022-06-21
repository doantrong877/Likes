
function increase(e){

var likeId = e.nextElementSibling;
var num = Number(likeId.firstChild.innerText) + 1;
likeId.firstChild.innerText = num;
console.log(num);
 }