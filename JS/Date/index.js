let dateObject = new Date()

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May',
'June', 'July', 'August', 'September', 'October',
'November','December'];

// console.log(months);
// console.log(days);
console.log(dateObject);

console.log(dateObject.getFullYear());
console.log(dateObject.getDate());
// console.log(dateObject.getDay()); // 4
// console.log(dateObject.getMonth()); //10

console.log(months[dateObject.getMonth()]);
console.log(days[dateObject.getDay()]);

console.log(dateObject.getHours());
console.log(dateObject.getMinutes());
console.log(dateObject.getSeconds());

console.log(dateObject.getHours()+":"+dateObject.getMinutes()+":"+dateObject.getSeconds());

var hours = '';

var amPm = '';

if(dateObject.getHours()>=12) {
	amPm = "PM";
} else {
	amPm = "AM";
}

//console.log(dateObject.getMinutes().toString().length);

if(dateObject.getHours()>12) {
	hours = dateObject.getHours() - 12;

	if(hours.toString().length==1) {
 		hours = "0"+hours;
	}

} else if (dateObject.getHours()==0) {
	hours = "00";
} else {
	hours = dateObject.getHours();

	if(hours.toString().length==1) {
 		hours = "0"+hours;
	}

}
let minutes = dateObject.getMinutes();
if(dateObject.getMinutes().toString().length==1) {
 	minutes = "0"+dateObject.getMinutes();
}


let seconds = dateObject.getSeconds();
if(dateObject.getSeconds().toString().length==1) {
 	seconds = "0"+dateObject.getSeconds();
}


document.getElementById("time").innerHTML = hours+ ":"+minutes+":"+seconds+" "+amPm;

console.log(hours+ ":"+minutes+":"+seconds+" "+amPm);




function getRealTime() {
	let dateObject = new Date()
	var hours = '';

	var amPm = '';

	if(dateObject.getHours()>=12) {
		amPm = "PM";
	} else {
		amPm = "AM";
	}

	//console.log(dateObject.getMinutes().toString().length);

	if(dateObject.getHours()>12) {
		hours = dateObject.getHours() - 12;

		if(hours.toString().length==1) {
	 		hours = "0"+hours;
		}

	} else if (dateObject.getHours()==0) {
		hours = "00";
	} else {
		hours = dateObject.getHours();

		if(hours.toString().length==1) {
	 		hours = "0"+hours;
		}

	}
	let minutes = dateObject.getMinutes();
	if(dateObject.getMinutes().toString().length==1) {
	 	minutes = "0"+dateObject.getMinutes();
	}


	let seconds = dateObject.getSeconds();
	if(dateObject.getSeconds().toString().length==1) {
	 	seconds = "0"+dateObject.getSeconds();
	}


	//console.log(hours+ ":"+minutes+":"+seconds+" "+amPm);
	document.getElementById("realTime").innerHTML = hours+ ":"+minutes+":"+seconds+" "+amPm;

}



setInterval(getRealTime, 1000);



const newDate = new Date("2021/01/01")

console.log(days[newDate.getDay()]);

// 

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function liveScore() {
	
	let cricData = JSON.parse(httpGet("http://localhost/php_11th_aug/api.php"));

	console.log(cricData.channel.item[13].description);
}



setInterval(liveScore, 1000);