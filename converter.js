var arr = null;

function load() {
	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = processD;
	httpRequest.open('GET', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', true);
	httpRequest.send(null);
}
function processD() {
	if (this.readyState == 4) {
		if (httpRequest.status == 200) {
			
			var result = JSON.parse(httpRequest.responseText);
			arr = result;
		} else {
			
		}
	}
}

function get() {
	var Sc = document.getElementById("amount").value;
    var Sc1 = document.getElementById('currencyCode').value;
		for (var i = 0; i < 61; i++) {
		var obj = arr[i];
		if (obj.cc == Sc1) {
			var cof = obj.rate;
			var rez = Sc*cof;
			console.log(rez);
			document.getElementById('convertedAmount').value = rez;
		}
}
	}
	

//https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json