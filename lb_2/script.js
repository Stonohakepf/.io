function checkEvenOdd(number) {
  const p = document.createElement("p");
  if (number % 2 === 0) {
    p.textContent = `Ваш номер ${number} — парне число.`;
    p.style.color = "green";
  } else {
    p.textContent = `Ваш номер ${number} — непарне число.`;
    p.style.color = "red";
  }
  document.body.appendChild(p);
}

function checkEvenOddPrompt() {
  const num = parseInt(prompt("Введіть ваш номер у журналі:"));
  checkEvenOdd(num);
}

function generatePassword(name, number) {
  const password = name.slice(0, 3).toLowerCase() + (number * 2);
  const div = document.createElement("div");
  div.textContent = `Ваш пароль: ${password}`;
  document.body.appendChild(div);
}

function generatePasswordPrompt() {
  const name = prompt("Введіть ваше ім’я:");
  const num = parseInt(prompt("Введіть ваш номер у журналі:"));
  generatePassword(name, num);
}

function averageGrades(number) {
  const g1 = parseFloat(prompt("Введіть першу оцінку:"));
  const g2 = parseFloat(prompt("Введіть другу оцінку:"));
  const g3 = parseFloat(prompt("Введіть третю оцінку:"));
  const avg = ((g1 + g2 + g3) / 3).toFixed(2);
  const div = document.createElement("div");
  div.id = number;
  div.textContent = `Середній бал (${g1}, ${g2}, ${g3}) = ${avg}`;
  document.body.appendChild(div);
}

function averageGradesPrompt() {
  const num = parseInt(prompt("Введіть ваш номер у журналі:"));
  averageGrades(num);
}

function enterStudents() {
  let count = parseInt(prompt("Скільки студентів у групі? (максимум 30)"));
  if (count > 30) {
    alert("Максимальна кількість студентів — 30!");
    count = 30;
  }
  for (let i = 1; i <= count; i++) {
    const name = prompt(`Введіть ім’я студента №${i}:`);
    const surname = prompt(`Введіть прізвище студента №${i}:`);
    const p = document.createElement("p");
    p.textContent = `${i}) ${surname} ${name}`;
    document.body.appendChild(p);
  }
}
