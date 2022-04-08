
function getNameOfById() {

	var h1 = document.getElementById("h1");

	h1.style.display="none";

	h1.innerHTML = "Sharvan Kumar";

	h1.style.cssText =` 
	  display: block; 
	  background-color: black;
	  padding: 15px;
	  margin: 5px;
	  color: white;
`;

}