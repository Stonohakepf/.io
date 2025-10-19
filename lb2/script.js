function task1() {
  let userName = "Богдан";
  if (true) {
    let userName = prompt("Введіть інше ім’я:");
    console.log("Ім’я всередині if:", userName);
  }
  console.log("Глобальне ім’я:", userName);
}

function task2() {
  let name = prompt("Введіть ваше ім’я:");
  let age = prompt("Введіть ваш вік:");
  let confirmMessage = confirm(`Hello, ${name}! Your age is ${age}. Continue?`);
  if (confirmMessage) {
    alert("Welcome!");
  } else {
    alert("Goodbye!");
  }
}

function task3() {
  let number = parseInt(prompt("Введіть число:"));
  if (number % 2 === 0) {
    alert("Number is even");
  } else {
    alert("Number is odd");
  }
}
