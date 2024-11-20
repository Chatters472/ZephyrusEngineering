function reverse_string(string) {
  //empty return string
  var reversed_string = "";
  //starting from the end of the given string, append it to the new string
  for (let i = string.length - 1; i >= 0; i--) {
    reversed_string += string[i];
  }
  return reversed_string;
}

console.log(reverse_string("hello"));
console.log(reverse_string("world!"));
