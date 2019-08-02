document.getElementById("submitSubscription").onclick = function() {
	if (document.getElementById("firstName").value == "") {
		document.getElementsByClassName("error")[0].innerHTML = "Please enter a First Name";
		document.getElementsByClassName("error")[0].style.display = "block";
		return false;
	} else if (document.getElementById("lastName").value == "") {
		document.getElementsByClassName("error")[0].innerHTML = "Please enter a Last Name";
		document.getElementsByClassName("error")[0].style.display = "block";
		return false;
	} else if (document.getElementById("email").value == "") {
		document.getElementsByClassName("error")[0].innerHTML = "Please enter an Email Address";
		document.getElementsByClassName("error")[0].style.display = "block";
		return false;
	} else if (document.getElementById("address").value == "") {
		document.getElementsByClassName("error")[0].innerHTML = "Please enter an address";
		document.getElementsByClassName("error")[0].style.display = "block";
		return false;
	} else if (document.getElementById("city").value == "") {
		document.getElementsByClassName("error")[0].innerHTML = "Please enter a city";
		document.getElementsByClassName("error")[0].style.display = "block";
		return false;
	} else if (document.getElementById("state").value == "") {
		document.getElementsByClassName("error")[0].innerHTML = "Please select a state";
		document.getElementsByClassName("error")[0].style.display = "block";
		return false;
	} else if (document.getElementById("zip").value == "") {
		document.getElementsByClassName("error")[0].innerHTML = "Please enter a zip";
		document.getElementsByClassName("error")[0].style.display = "block";
		return false;
	} else if (document.getElementById("creditName").value == "") {
		document.getElementsByClassName("error")[0].innerHTML = "Please enter a Credit Card Name";
		document.getElementsByClassName("error")[0].style.display = "block";
		return false;
	} else if (document.getElementById("creditNum").value == "") {
		document.getElementsByClassName("error")[0].innerHTML = "Please enter a Credit Card Number";
		document.getElementsByClassName("error")[0].style.display = "block";
		return false;
	} else if (document.getElementById("expiration").value == "") {
		document.getElementsByClassName("error")[0].innerHTML = "Please enter an expiration";
		document.getElementsByClassName("error")[0].style.display = "block";
		return false;
	} else if (document.getElementById("cvv").value == "") {
		document.getElementsByClassName("error")[0].innerHTML = "Please enter a CVV";
		document.getElementsByClassName("error")[0].style.display = "block";
		return false;
	} 
};