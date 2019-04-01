var user = {
	n: "admin",
	p: "121212"
};


function adm() {
var admin = document.getElementById('input1').value;
var passw = document.getElementById('input2').value;
var div1 = document.getElementById('d11');
var div = document.getElementById('d1');
var btn00 = document.getElementById('btn00');
var btn0 = document.getElementById('btn0');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
if (admin == user.n, passw == user.p )
	{
	div.style.display = 'block';
	div1.style.display = 'block';
	btn00.style.display = 'inline-block';
	btn0.style.display = 'block';
	btn1.style.display = 'block';
	btn2.style.display = 'block';
	btn3.style.display = 'block';
	} else {
alert('Неверный логин или пароль')
	}
}	
function adm1() {
	var Sc1 = document.getElementById('currencyCode').value;
	var h3a =  document.getElementById('h3a');
	var h3b =  document.getElementById('h3b');
	var h3c =  document.getElementById('h3c');
if (Sc1 == 'USD') {
		h3a.innerHTML = '244 USD';
		h3b.innerHTML = '281 USD';
		h3c.innerHTML = '207 USD';
}
		else if (Sc1 == 'UAN') {
		h3a.innerHTML = '6599 UAN';
		h3b.innerHTML = '7599 UAN';
		h3c.innerHTML = '5599 UAN';
					
}
}
//добавить логику проверки на совпадения логина и пароля
//если 100% совпадение есть, покажем или табличку, или текст
//если совпадения нет, покажем сообщение (функция алерт) -  проверьте логин или пароль