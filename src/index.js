module.exports = function toReadable (number) {
  let words = {
  	"1": {
  		0: "zero",
	  	1: "one",
	  	2: "two",
	  	3: "three",
	  	4: "four",
	  	5: "five",
	  	6: "six",
	  	7: "seven",
	  	8: "eight",
	  	9: "nine",
	  	10: "ten"
  	},
  	"2": {
  		11: "eleven",
  		12: "twelve",
  		13: "thirteen",
  		14: "fourteen",
  		15: "fifteen",
  		16: "sixteen",
  		17: "seventeen",
  		18: "eighteen",
  		19: "nineteen",
  		1: "ten",
  		2: "twenty",
  		3: "thirty",
  		4: "forty",
  		5: "fifty",
  		6: "sixty",
  		7: "seventy",
  		8: "eighty",
  		9: "ninety",
  	},
  	"3": "hundred",
  	"4": "thousand"
  }

  if (number <= 10) {
  	return words["1"][number];
  }

  else if (number >= 11 && number <= 19) {
  	return words["2"][number];
  }

  else if (number >= 20 && number <= 99) {
  	let units = number % 10;
  	let tens = Math.trunc(number / 10);

  	if(number % 10 === 0) {
  		return `${words["2"][tens]}`;
  	}

  	else {
  		return `${words["2"][tens]} ${words["1"][units]}`;
  	}

  }

  else if (number >= 100 && number <= 999) {
  	let units = number % 10;
  	let tens = Math.trunc((number / 10)) % 10;
  	let thousands = Math.trunc(number / 100);

  	let decade = number % 100;

  	if(tens === 0 && units === 0) {
  		return `${words["1"][thousands]} hundred`;
  	}

  	else if (tens === 0 && units !== 0) {
  		return `${words["1"][thousands]} hundred ${words["1"][units]}`;
  	}

  	else if (tens !== 0 && units === 0) {
  		return `${words["1"][thousands]} hundred ${words["2"][tens]}`;
  	}

  	else if (tens !== 0 && units !== 0 && decade >= 10 && decade <= 19) {
  		return `${words["1"][thousands]} hundred ${words["2"][decade]}`;
  	}

  	else {
  		return `${words["1"][thousands]} hundred ${words["2"][tens]} ${words["1"][units]}`;
  	}
  }
}

