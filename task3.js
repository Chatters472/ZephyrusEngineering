function even_or_odd(integer) {
  //checks if integer is divisible by 2
  if (integer % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(even_or_odd(3));
console.log(even_or_odd(8));
