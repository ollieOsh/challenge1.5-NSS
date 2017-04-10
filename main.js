var num1 = 0,
	num2 = 1,
	x = 0;

function fibonacci(num1, num2) {
	return num1 + num2;
}

document.getElementById('btn').onclick = function() {
		while (num1 < 500) {
		document.getElementById('fibo').innerHTML += num1 + " ";
		x = num1;
		num1 = num2;
		num2 = fibonacci(x, num1);
	}
}
