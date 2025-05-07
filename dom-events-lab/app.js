/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let storedNumber = [[], []];
let currentNum = 0;
let currentOperator = "";
let result = 0;

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll(".button");
const calcDisplayElement = document.querySelector(".display");

/*----------------------------- Event Listeners -----------------------------*/
// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     console.log(event.target.innerText);
//     // Future logic to capture the button's value would go here...
//     storedNumber[currentNum].push(event.target.innerText);
//     calcDisplayElement.textContent = storedNumber[currentNum].join("");
//   });
// });

calculator.addEventListener("click", (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText);

  // Example
  if (event.target.classList.contains("number")) {
    // Do something with a number
    let x = event.target.innerText;
    if (x < 1 && storedNumber[currentNum].length < 1) {
      calcDisplayElement.textContent = "";
    } else {
      storedNumber[currentNum].push(x);
      calcDisplayElement.textContent = storedNumber[currentNum].join("");
    }
  }

  // Example

  if (event.target.innerText === "C") {
    // Do something with this operator
    storedNumber = [[], []];
    currentNum = 0;
    currentOperator = "";
    calcDisplayElement.textContent = "";
  }

  if (event.target.innerText === "*") {
    // Do something with this operator
    currentNum++;
    calcDisplayElement.textContent = "";
    currentOperator = "*";
  }

  if (event.target.innerText === "/") {
    currentNum++;
    calcDisplayElement.textContent = "";
    currentOperator = "/";
  }

  if (event.target.innerText === "-") {
    currentNum++;
    calcDisplayElement.textContent = "";
    currentOperator = "-";
  }

  if (event.target.innerText === "+") {
    currentNum++;
    calcDisplayElement.textContent = "";
    currentOperator = "+";
  }

  if (event.target.innerText === "=") {
    {
      if (currentOperator === "+") {
        let result =
          Number(storedNumber[0].join("")) + Number(storedNumber[1].join(""));
        calcDisplayElement.textContent = result;
      } else if (currentOperator === "-") {
        let result =
          Number(storedNumber[0].join("")) - Number(storedNumber[1].join(""));
        calcDisplayElement.textContent = result;
      } else if (currentOperator === "*") {
        let result =
          Number(storedNumber[0].join("")) * Number(storedNumber[1].join(""));
        calcDisplayElement.textContent = result;
      } else if (currentOperator === "/") {
        let result =
          Number(storedNumber[0].join("")) / Number(storedNumber[1].join(""));
        calcDisplayElement.textContent = result;
      }
      currentNum = 0;
      storedNumber = [[], []];
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code.includes("Digit")) {
    let x = 0;
    x = Number(event.key);
    if (x < 1 && storedNumber[currentNum].length < 1) {
      calcDisplayElement.textContent = "";
    } else {
      storedNumber[currentNum].push(x);
      calcDisplayElement.textContent = storedNumber[currentNum].join("");
    }
  } else if (
    event.key === "=" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/"
  ) {
    currentNum++;
    calcDisplayElement.textContent = "";
    currentOperator = event.key;
  }
});

// document.addEventListener("keydown", (event) => {
//   console.log(event);
// });
//   if (typeof i === "number") {
//     if (i === 0 && storedNumber[currentNum].length < 1) {
//       calcDisplayElement.textContent = "";
//     } else {
//       storedNumber[currentNum].push(i);
//       calcDisplayElement.textContent = storedNumber[currentNum].join("");
//     }
//   }
// });
// This log is for testing purposes to verify we're getting the correct value
// You have to click a button to see this log

/*-------------------------------- Functions --------------------------------*/
