function fizzbuzz() {
  //booleans representing the states of fizzbuzz
  let fizz = false;
  let buzz = false;
  let fizzbuzz = false;

  //checks from 1 to 100
  for (let i = 1; i <= 100; i++) {
    //Checking fizzbuzz conditions
    //if divisible by 3
    if (i % 3 == 0) {
      fizz = true;
    }

    //if divisible by 5
    if (i % 5 == 0) {
      buzz = true;
    }

    //if divisible by both 3 and 5
    if (fizz && buzz) {
      fizzbuzz = true;
    }

    //Accessing correct case for printing - used switch because cleaner / faster than if/else statements
    switch (true) {
      case fizzbuzz:
        console.log("Fizzbuzz");
        break;
      case fizz:
        console.log("Fizz");
        break;
      case buzz:
        console.log("Buzz");
        break;
      default:
        console.log(i);
        break;
    }

    //resetting fizzbuzz conditions for next loop
    fizz = false;
    buzz = false;
    fizzbuzz = false;
  }
}

fizzbuzz();
