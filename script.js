//Button to change heading and text to random color
const change_heading_button = document.getElementById("button1");
//Button to reset heading to base state
const reset_heading_button = document.getElementById("button2");

change_heading_button.addEventListener("click", () => {
  let num = getRandomInt(0, 2);
  switch (num) {
    case 0:
      turn_red();
      break;
    case 1:
      turn_green();
      break;
    case 2:
      turn_blue();
      break;
  }
  return;
});

reset_heading_button.addEventListener("click", () => {
  reset();
});

//Equation for calculating random int created with help from mdn web docs
function getRandomInt(min, max) {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function turn_red() {
  document.getElementById("heading_span").className = "red";
  document.getElementById("heading_span").textContent =
    "This is the Task 4 webpage! The heading is currently red";
}

function turn_green() {
  document.getElementById("heading_span").className = "green";
  document.getElementById("heading_span").textContent =
    "This is the Task 4 webpage! The heading is currently green";
}

function turn_blue() {
  document.getElementById("heading_span").className = "blue";
  document.getElementById("heading_span").textContent =
    "This is the Task 4 webpage! The heading is currently blue";
}

function reset() {
  document.getElementById("heading_span").className = "black";
  document.getElementById("heading_span").textContent =
    "This is the Task 4 webpage! The heading is currently black";
}
