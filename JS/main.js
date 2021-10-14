// +
// -
// *
// /
// %
// >
// < 
// >= 
// <=
// ==
// ===
// !
// !=
// ++
// --
// +=
// -=
// *=
// /=

'use strict'

// var x = 5

// var y = parseInt("5")

// console.log(x===y)

// var isStatus =true

// console.log(x+y); // 11
// console.log(x-y); // -1
// console.log(x*y); // 30
// console.log(x/y); // 0.8333333333333334
// console.log(x%y); // 5
// console.log(x>y); // false
// console.log(x<y); // true
// console.log(x>=y); // false
// console.log(x<=y); // true
// console.log(x==y); // false
// console.log(x===y); // false
// console.log(!isStatus);
// console.log(x!=y); // // true


//alert("Hi ")

//var nameOfUser =  prompt("Enter Your Name")

// document.write("<h1>"+nameOfUser+"</h1>")

// console.log(nameOfUser);

// var a = parseInt(prompt("Enter First Number:- "))
// var b = parseInt(prompt("Enter Second Number:- "))


// console.log(a+b);

// var isStatus = confirm("Do you really want to Delete this item") 

// console.log(isStatus);

// A JavaScript function is a block of code designed to perform a particular task. 
// A JavaScript function is executed when "something" invokes it (calls it).

// two types of function
// 1. Pre-Defined or inbulit function
// 2. UserDefined Function

// function PrintMyName() {

// 	console.log('My Name is Sharvan Kumar from Bihar');
// }

// PrintMyName()

// function addTwoNumber() {
// 	console.log("My Name is Sharvan Kumar from Bihar")
// }

//.getElementsByClassName
//
// .getElementsByTagName

// var newButton = document.getElementsByClassName("newButton");

// console.log(newButton);

function getNameOfById() {


	var h1 = document.getElementById("h1");

	//console.log(h1);

	h1.style.display = "none";

	h1.innerHTML = "Sharvan Kumar";
	
	// h1.style.display = "block";
	// h1.style.backgroundColor = "black";
	// h1.style.padding = "15px";
	// h1.style.margin = "5px";
	// h1.style.color = "white";

	h1.style.cssText = `
  display: block; 
  background-color: black;
  padding: 15px;
  margin: 5px;
  color: white;
`;

	// var h1 = document.getElementsByClassName("h1Class");

	// console.log(h1[0].style.backgroundOrigin =  "red");

	// console.log(h1);

	// console.log(h1[0].offsetTop);

}

