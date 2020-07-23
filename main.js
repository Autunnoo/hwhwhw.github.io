let n = parseInt (
	prompt('Please enter an integer (not letters)'));		

while (isNaN(n)){
	n = parseInt (
	prompt(`You entered letters and not a number, please enter a number`)  
	);
}									

let m = parseInt(
	prompt('Please enter an integer greater than the previous one (not a letter)'));

while (isNaN(m)){
	m = parseInt (
	prompt(`You entered letters and not a number, please enter a number`)
	);
}

const isPaired = confirm(`Skip paired numbers?`);

let sum = 0;
for (let i = n; i <= m; i++) {
  if (isPaired && i % 2 === 0) {
continue;
}
  
  sum += i;
}

console.log(`Your result: ${sum}`);
