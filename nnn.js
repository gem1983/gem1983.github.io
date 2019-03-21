

function displayEvenNumbers (x, y) {
for (var i = x; i <= y; i++){
if (i % 2 == 0) {
console.log (i);
}
}
}
displayEvenNumbers (1, 4);
displayEvenNumbers (3, 9);
displayEvenNumbers (1, 11)


function Big() {
for (var i = 0; i < 20; i++) {
if (i % 2 == 0) {
var parentElem = document.body;
var div = document.createElement('div');
      div.style.background = 'green';
      div.style.border = '5px solid red';
	  div.style.height = '50px'
	  parentElem.appendChild(div);
	  }
else {var parentElem = document.body;
var div = document.createElement('div');
      div.style.border = '5px solid blue';
	  div.style.height = '50px'
	  parentElem.appendChild(div);
}
}  
}  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
