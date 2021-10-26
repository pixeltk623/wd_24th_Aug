// var 

// let 

// const

// for(var i = 0; i<=10; i++) {
// 	console.log(i);
// }

// console.log(i); 


// {
// 	var i = 25;

// 	console.log(i);
// }

// console.log(i);

// {
// 	let i = 25;

// 	console.log(i);
// }

// console.log(i);



// for(let i = 0; i<=10; i++) {
// 	console.log(i);
// }

// console.log(i);

// let x = 15

// x = 25

// console.log(x);

// const a = 5

// a = 8;

// console.log(a)


// function expression
// let x = function(x, y) {

//   	return x * y;

// }

// console.log(x(5,10));


// const x = (x,y) => {
// 	return x * y;
// }

// console.log(x(8,9));


// function addTwoNumber(x,y) {
// 	return x*y;
// }

// addTwoNumber(5,9)


// let y = () => {

// }

// let x = function() {
// 	return x*y;
// }

// JS Control Flow


// if (true) {}

// if (true) {} else {}

// if (true) {} else if {} else {}

// switch() {}

// let employeeStatus = false;

//console.log(employeeStatus);

// if(employeeStatus) {
// 	console.log('Yes I am Employee of Tops');
// }

// if (employeeStatus) {
// 	console.log('Yes I am Employee of Tops');
// } else {
// 	console.log('Yes I am Employee of vTech');
// }


let ourPocketMoneyIsGivenByPapa = 5000;

// if (ourPocketMoneyIsGivenByPapa>=5000 && ourPocketMoneyIsGivenByPapa<8000) {
// 	console.log('Will Go for dinner in Welcome Hotel');
// } else if(ourPocketMoneyIsGivenByPapa>=8000 && ourPocketMoneyIsGivenByPapa<10000) {
// 	console.log('Will Go for dinner in Welcome Hotel Dubai');
// } else if(ourPocketMoneyIsGivenByPapa>=10000 && ourPocketMoneyIsGivenByPapa<15000) {
// 	console.log('Will Go for dinner in Welcome Hotel USA');
// } else {
// 	console.log('Will Go for dinner in Ramdev Hotel');
// }



// switch(ourPocketMoneyIsGivenByPapa) {

// 	case 5000:
// 		console.log('Will Go for dinner in Welcome Hotel');
// 		break;
// 	case 8000:
// 		console.log('Will Go for dinner in Welcome Hotel');
// 		break;
// 	case 9000:
// 		console.log('Will Go for dinner in Welcome Hotel');
// 		break;
// 	case 10000:
// 		console.log('Will Go for dinner in Welcome Hotel');
// 		break;
// 	case 15000:
// 		console.log('Will Go for dinner in Welcome Hotel');
// 		break;
// 	default:
// 		console.log('Koi Nahi Mila');
// 		break;

// }

// let divSelction = document.getElementsByTagName("div");



// divSelction[0].style.cssText = `
//   color: red; 
//   background-color: black;
// `;
// console.log(divSelction[0].innerHTML = "Humlog Js Dusri baar pad rahe hai");

// divSelction[0].style.fontSize = "100px"

function makeCal() {
	
	// document.getElementsByName()
	// document.getElementsByClassName()
	// document.getElementsByTagName()
	// document.getElementById()

	//let number1 = document.getElementsByName("Number1");

	// let number1 = document.getElementsByClassName("Number1");

	//let number1 = document.getElementsByTagName("input");

	//let number1 = document.getElementById("Number1");

	//console.log(number1[0].value);

	let Number1 = parseInt(document.getElementById("Number1").value);
	let Number2 = parseInt(document.getElementById("Number2").value);
	let op = document.getElementById("op").value;
	let result = 0;

	//console.log(Number1 + Number2 + op);

	// console.log(typeof(Number1));

	// console.log(Number1+Number2);

	//console.log(Number1);

	if (isNaN(Number1)) {
		console.log('Number1 Can not be blank');
		document.getElementById("e1").innerHTML = "Number1 Can not be blank";
		document.getElementById("e1").style.color = "red";
	} else {
		console.log('Number1 is There');
		document.getElementById("e1").innerHTML = "";
	}

	if (isNaN(Number2)) {
		console.log('Number2 Can not be blank');
		document.getElementById("e2").innerHTML = "Number2 Can not be blank";
		document.getElementById("e2").style.color = "red";
	} else {
		console.log('Number2 is There');
		document.getElementById("e2").innerHTML = "";
	}

	if (op=='') {
		console.log('OP is Not Selected');
		document.getElementById("e3").innerHTML = "OP is Not Selected";
		document.getElementById("e3").style.color = "red";
	} else {
		console.log('Selected');
		document.getElementById("e3").innerHTML = "";
	}


	if (!isNaN(Number1) &&  !isNaN(Number2) && op!='') {


		switch(op) {

			case '+':
				result = Number1 + Number2;
				break;
			case '-':
				result = Number1 - Number2;
				break;
			case '*':
				result = Number1 * Number2;
				break;
			case '/':
				result = Number1 / Number2;
				break;
			default:
				result = "Kuch Galat Hua Hai";
				break;
		}

		console.log(result);

		document.getElementById("res").innerHTML = result;

	} 
	return false;
}