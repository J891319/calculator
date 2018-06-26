//used for equal button

var check = false;

//numbers

btn1.onclick = function() {
	updateScreen(1);
};

btn2.onclick = function() {
	updateScreen(2);
};

btn3.onclick = function() {
	updateScreen(3);
};

btn4.onclick = function() {
	updateScreen(4);
};

btn5.onclick = function() {
	updateScreen(5);
};

btn6.onclick = function() {
	updateScreen(6);
};

btn7.onclick = function() {
	updateScreen(7);
};

btn8.onclick = function() {
	updateScreen(8);
};

btn9.onclick = function() {
	updateScreen(9);
};

btn0.onclick = function() {
	updateScreen(0);
};

//operations

mod.onclick = function() {
	input.value = input.value + "%";
};

multi.onclick = function() {
	input.value = input.value + "*";
};

min.onclick = function() {
	input.value = input.value + "-";
};

divi.onclick = function() {
	input.value = input.value + "/";
};

pls.onclick = function() {
	input.value = input.value + "+";
};

//other buttons

cls.onclick = function() {
	input.value = null;
};

equal.onclick = function() {
	var result = eval(input.value);
	input.value = result;
	check = true;
};

//makes the equal button clear the screen

function updateScreen(key) {
	if (check == true) {
		input.value = key;
		check = false;
	} else {
		input.value += key;
	}
};

//allows for keyboard input

window.onkeypress = function(event) {
	console.log(event.code);
	if (event.code == "Digit1") {
		btn1.click();
	}
	else if (event.code == "Digit2") {
		btn2.click();
	}
	else if (event.code == "Digit3") {
		btn3.click();
	}
	else if (event.code == "Digit4") {
		btn4.click();
	}
	else if (event.code == "Digit5") {
		btn5.click();
	}
	else if (event.code == "Digit6") {
		btn6.click();
	}
	else if (event.code == "Digit7") {
		btn7.click();
	}
	else if (event.code == "Digit8") {
		btn8.click();
	}
	else if (event.code == "Digit9") {
		btn9.click();
	}
	else if (event.code == "Digit0") {
		btn0.click();
	}
	else if (event.code == "Enter") {
		equal.click();
	}
	else if (event.code == "Equal") {
		pls.click();
	}
	else if (event.code == "Slash") {
		divi.click();
	}
	else if (event.code == "Minus") {
		min.click();
	}
	else if (event.code == "Backspace") {
		cls.click();
	}
};
