var check = false;

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

min.onclick = function() {
	input.value = input.value + "-";
};

divi.onclick = function() {
	input.value = input.value + "/";
};

pls.onclick = function() {
	input.value = input.value + "+";
};

cls.onclick = function() {
	input.value = null;
};

equal.onclick = function() {
	var result = eval(input.value);
	input.value = result;
	check = true;
};

function updateScreen(key) {
	if (check == true) {
		input.value = key;
		check = false;
	} else {
		input.value += key;
	}
};