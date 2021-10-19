'use strict'
// var bulb = document.getElementById("bulb");

// function onBulb() {
// 	bulb.src = "media/ONbulb.jpg";
// 	// bulb.width = "500";
// 	// bulb.height = "500";
// }

// function offbulb() {
// 	bulb.src = "media/OFFbulb.jpg";


// }

// a = 55
// b  = 13
// console.log(a>b);

// if (true) {
// 	console.log('Hello');
// }

// if (a>b) {
// 	console.log('Ok');
// } else {
// 	console.log('Hello');
// }
// a = 55

// b = 113
// c = 58
// //console.lo

// if (a>=b && a>=c) {
// 	console.log("A is bigger Number", a);
// } else if(b>=a && b>=c) {
// 	console.log("B is bigger Number", b);
// } else {
// 	console.log("C is bigger Number", c);
// }



// var a = -15

// if (a>0) {
// 	console.log('+ve Number', a);
// } else {
// 	console.log('-ve Number', a);
// }



// var x = -40


// if (x%2==0) {
// 	console.log('Even No');
// } else {
// 	console.log('Odd Number');
// }

// if (x>0) {
// 	if (x%2==0) {
// 		console.log('Even No');
// 	} else {
// 		console.log('Odd Number');
// 	}
// } else {
// 	console.log('-ve Number, pz Put +ve Number');
// }

 // 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048.

// var  year = 2012

//  if (year%4==0) {
//  	console.log('leap years');
//  } else {
//  	console.log('Not leap years');
//  }


// B = > ()  {} []
// O => Off 
// D => /
// M = *
// A = +
// S = -

// R
// u
// l
// e
// s


// var p = 100000
// var r = 15
// var t = 5

// var si = (p * r * t)/100

// console.log('IM is', si);
// console.log('Total Amount is ', p + si);


// The switch statement is used to perform different actions based on different conditions.

// The JavaScript Switch Statement

// Use the switch statement to select one of many code blocks to be executed.

// This is how it works:

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.

// If there is a match, the associated block of code is executed.

// If there is no match, the default code block is executed.

// var x = 40;

// var y = 55;

// var op = '+';
// var result;
// switch(op) {
// 	case '+':
// 		result = x+y;
// 		break;
// 	case '-':
// 		result = x-y;
// 		break;
// 	case '*':
// 		result = x*y;
// 		break;
// 	case '/':
// 		result = x/y;
// 		break;
// 	case '%':
// 		result = x%y;
// 		break;
// 	default:
// 		result = "Error";
// 		break;
// }

// console.log(result)


// Loop

 // In computer programming,

 // a loop is a sequence of instruction s that is continually repeated until
 // a certain condition is true. ...


// for loop 
// while loop 
// do while loop 

// console.log('S Kumar');

// console.log('S Kumar');

// console.log('S Kumar');

// console.log('S Kumar');

// console.log('S Kumar');

// console.log('S Kumar');

// console.log('S Kumar');

// console.log('S Kumar');

// console.log('S Kumar');

// console.log('S Kumar');

// console.log('S Kumar');

// console.log('S Kumar');

// for (var i = 1; i <= 100000000; i++) {
// 	// console.log('S Kumar', i);

// 	console.log('Paisa Kab aayega Modi G');
// }


// break 

// continue

// for (var i = 1; i <=5; i++) {
		
// 	if (i >3) {
// 		break;
// 	}

// 	console.log(i);
// }


// for (var i = 1; i <= 10; i++) {
	
// 	if (i==2 || i == 4) {
// 		continue
// 	} 

// 	console.log(i)
// }


var nameOfUser = ["Sharvan", "Dixit", "Renish", "Devin", "Sonali"];

// console.log(nameOfUser);

// console.log(nameOfUser[5]);

//console.log(nameOfUser.length);

// for (var i = 0; i < nameOfUser.length; i++) {
	
// 	console.log(nameOfUser[i]);
// }


// var user = "Sharvan"

// user += "Dixit" // user + "Dixit"

// user += "Ram" // Sharvan Dixit + Ram

// user += "Ram" // Sharvan Dixit + Ram



// console.log(user);


	
	//var html = '';


 // 	html += "<ul>";
	// 	html +=	"<li>Test</li>";
	// 	html +=	"<li>Test</li>";
	// 	html +=	"<li>Test</li>";
	// 	html +=	"<li>Test</li>";
	// 	html +=	"<li>Test</li>";
	// html += "</ul>";


	// document.getElementById("res").innerHTML = html;

	// console.log(html);

	// var html = '';

	// html += "<ul>";
	// for (var i = 0; i < nameOfUser.length; i++) {
	// 	html += "<li>"+nameOfUser[i]+"</li>";
	// }
	// html += "</ul>";


	// //console.log(html);

	// document.getElementById("res").innerHTML = html;

	// 1 - 10 

	// Even No = > green 

	// Odd No = > Red


	// var html = '';

	// html += "<ul>";
	// for (var i = 1; i <= 10; i++) {
	// 	if (i%2==0) {
	// 		html += "<li style='color:green;'>"+i+"</li>";
	// 	} else {
	// 		html += "<li style='color:red;'>"+i+"</li>";
	// 	}
		
	// }
	// html += "</ul>";


	// //console.log(html);

	// document.getElementById("res").innerHTML = html;


	// function calculateFact() {

	// 	var number = document.getElementById("number").value;
 
	// 	var fact = 1; // 5 // 20 
	// 	//console.log(number);

	// 	if (number>=0) {
			
	// 		if (number==0) {
	// 			console.log('Fact of ', number, " is ", fact);
	// 		} else {

	// 			for (var i = number; i >= 1; i--) {
					
	// 				fact = fact * i // 1 * 5

	// 				// 1 * 5 // 5
	// 				// 5 * 4 // 20
	// 				// 20 * 3 // 60
	// 				// 60 * / // 120
	// 				// 120 * 1 // 120
	// 			}

	// 			console.log(fact);
	// 			document.getElementById("res").innerHTML = fact;

	// 		}

	// 	} else {
	// 		console.log('Fact is Not Possible for -ve number');
	// 	}


	// }



// function calculatePrime() {
// 	var number = document.getElementById("number").value;
// 	var count = 0;
// 	var html = '';
// 	if (number>0) {

// 		if (number==1) {
// 			//console.log(number, 'Number is Not Prime');
// 			html = "<h2 style='color: red;'>"+number+ " Number is Not Prime</h2>";
// 		} else {
			
// 			for(var i = 1; i<=number; i++) {

// 				if (number%i==0) {
// 					count++;
// 				}

// 			}

// 			//console.log(count);

// 			if (count==2) {
// 				html = "<h2 style='color: green;'>"+number+ " Number is Prime</h2>";
// 			} else {
// 				html = "<h2 style='color: red;'>"+number+ " Number is Not Prime</h2>";
// 			}
// 		}

// 	} else {
// 		//console.log(number, ' Number is Invalid');
// 		html = "<h2 style='color: red;'>"+number+ " Number is Invalid</h2>";
// 	}

// 	//console.log(html);

// 	document.getElementById("res").innerHTML = html; 
// }

