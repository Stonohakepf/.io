function getStudentInfo() {
  let name = prompt("Введіть ім’я студента:");
  let score = parseInt(prompt("Введіть бал (0–12):"));
  return { name, score };
}

function checkGrade(score) {
  if (score >= 10 && score <= 12) return "Excellent";
  else if (score >= 7) return "Good";
  else if (score >= 4) return "Satisfactory";
  else return "Fail";
}

function showResult(name, grade) {
  document.getElementById("output").innerHTML = `Student: ${name}<br>Grade: ${grade}`;
}

function main() {
  const student = getStudentInfo();
  const grade = checkGrade(student.score);
  showResult(student.name, grade);
}
