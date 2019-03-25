

//function displayEvenNumbers (x, y) {
//for (var i = x; i <= y; i++){
//if (i % 2 == 0) {
//console.log (i);
//}
//}
//}
//displayEvenNumbers (1, 4);
//displayEvenNumbers (3, 9);
//displayEvenNumbers (1, 11)


//function Big() {
//for (var i = 0; i < 20; i++) {
//if (i % 2 == 0) {
//var parentElem = document.body;
//var div = document.createElement('div');
//      div.style.background = 'green';
//      div.style.border = '5px solid red';
//	  div.style.height = '50px'
//	  parentElem.appendChild(div);
//	  }
//else {var parentElem = document.body;
//var div = document.createElement('div');
//      div.style.border = '5px solid blue';
//	  div.style.height = '50px'
//	  parentElem.appendChild(div);
//}
//}  
//}  
 var arr = [
	{
		"title": "First Block",
		"background": "yellow",
		"border": "7px solid black"
	},
	{
		"title": "Second Block",
		"background": "red",
		"border": "7px solid black"
	},
	{
		"title": "Third Block",
		"background": "blue",
		"border": "7px solid black"
	},
	{
		"title": "Four Block",
		"background": "green",
		"border": "7px solid black"
	},
	{
		"title": "Five Block",
		"background": "olive",
		"border": "7px solid black"
	},
	{
		"title": "Six Block",
		"background": "pink",
		"border": "7px solid black"
	},
];
 function Big() {
  var number = prompt ('Сколько блоков нужно создать? введите число от 1 до 6', ' ');
   var parentElem = document.body;
   for (var i = 0; i < number; i++) {
		var obj = arr[i];
		var newEl = document.createElement ('div');
		newEl.style.border = obj.border;
		newEl.innerHTML = obj.title;
		newEl.style.background = obj.background;
		parentElem.appendChild(newEl);
   }
 }
function Big1() {
 var number1 = prompt ('Какой блок нужно удалить? введите число от 1 до 6', ' ');
 var parentElem = document.body;
 var elements = document.getElementsByTagName('div');
 parentElem.removeChild(elements[number1 - 1]);
} 
function Big2() {
 var number2 = prompt ('Какой блок нужно выделить? введите число от 1 до 6', ' '); 
 var parentElem = document.body;
 var elements = document.getElementsByTagName('div');
 elements[number2 - 1].style.border = '12px solid olive';
}
  
  
  
  
  
  
