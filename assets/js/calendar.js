window.onload = function() {
	
	var d = new Date();
	
	var beginningMonth = new Date(d.getFullYear(), d.getMonth(), 1);
	
	var upperLimit;
	
	if (beginningMonth.getMonth() == 0 || beginningMonth.getMonth() == 2 || beginningMonth.getMonth() == 4 || beginningMonth.getMonth() == 6 || beginningMonth.getMonth() == 7 || beginningMonth.getMonth() == 9 || beginningMonth.getMonth() == 11) {
		upperLimit = 31;
	} else if (beginningMonth.getMonth() == 1) {
		if (beginningMonth.getFullYear % 4) {
			upperLimit = 29;
		} else {
			upperLimit = 28;
		}
	} else {
		upperLimit = 30;
	}
	
	var monthLabel = document.getElementsByClassName("month");
	
	if (d.getMonth() == 0) {
		monthLabel[0].innerHTML = "January";
	} else if (d.getMonth() == 1) {
		monthLabel[0].innerHTML = "February";
	} else if (d.getMonth() == 2) {
		monthLabel[0].innerHTML = "March";
	} else if (d.getMonth() == 3) {
		monthLabel[0].innerHTML = "April";
	} else if (d.getMonth() == 4) {
		monthLabel[0].innerHTML = "May";
	} else if (d.getMonth() == 5) {
		monthLabel[0].innerHTML = "June";
	} else if (d.getMonth() == 6) {
		monthLabel[0].innerHTML = "July";
	} else if (d.getMonth() == 7) {
		monthLabel[0].innerHTML = "August";
	} else if (d.getMonth() == 8) {
		monthLabel[0].innerHTML = "September";
	} else if (d.getMonth() == 9) {
		monthLabel[0].innerHTML = "October";
	} else if (d.getMonth() == 10) {
		monthLabel[0].innerHTML = "November";
	} else if (d.getMonth() == 11) {
		monthLabel[0].innerHTML = "December";
	}
	
	var daySquares = document.getElementsByClassName("daysquare");
	
	var j = 1;
	
	for (var i = beginningMonth.getDay(); i < upperLimit; i++) {
		daySquares[i].innerHTML = j;
		j++;
	}
	
	
	
	
	var row4 = document.getElementsByClassName("row4");
	
	var row5 = document.getElementsByClassName("row5");
	
	
	if (upperLimit == 28 && beginningMonth().getDay() == 0) {
		row4[0].style.display = "none";
		row5[0].style.display = "none";
	} else if (upperLimit + beginningMonth.getDay() < 36) {
		row5[0].style.display = "none";
	}
};