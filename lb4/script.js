// Завдання 1
let f = document.getElementById('f');
let c = document.getElementById('c');
f.addEventListener('input', () => {
    if (f.value !== '') c.value = (5 / 9) * (f.value - 32);
});
c.addEventListener('input', () => {
    if (c.value !== '') f.value = (c.value * 9 / 5) + 32;
});

// Завдання 2
let score1 = 0, a, b;
let question1 = document.getElementById('question1');
let result1 = document.getElementById('result1');
let answer1 = document.getElementById('answer1');
function newTask1() {
    a = Math.floor(Math.random() * 9) + 1;
    b = Math.floor(Math.random() * 9) + 1;
    question1.textContent = `${a} × ${b} = ?`;
    result1.textContent = '';
    answer1.value = '';
}
document.getElementById('next1').addEventListener('click', newTask1);
document.getElementById('check1').addEventListener('click', () => {
    if (+answer1.value === a * b) {
        result1.textContent = '✅ Правильно!';
        score1++;
    } else result1.textContent = '❌ Помилка!';
    document.getElementById('score1').textContent = `Рахунок: ${score1}`;
});

// Завдання 3
let question2 = document.getElementById('question2');
let answers2 = document.getElementById('answers2');
let result2 = document.getElementById('result2');
function newTask2() {
    result2.textContent = '';
    answers2.innerHTML = '';
    a = Math.floor(Math.random() * 9) + 1;
    b = Math.floor(Math.random() * 9) + 1;
    let correct = a * b;
    question2.textContent = `${a} × ${b} = ?`;
    let arr = [correct];
    while (arr.length < 4) {
        let val = Math.floor(Math.random() * 81);
        if (!arr.includes(val)) arr.push(val);
    }
    arr.sort(() => Math.random() - 0.5);
    arr.forEach(v => {
        let label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="opt" value="${v}"> ${v}`;
        answers2.appendChild(label);
        answers2.appendChild(document.createElement('br'));
    });
    let radios = answers2.querySelectorAll('input');
    radios.forEach(r => {
        r.addEventListener('change', () => {
            result2.textContent = (+r.value === correct) ? '✅ Правильно!' : '❌ Неправильно!';
            radios.forEach(x => x.disabled = true);
        });
    });
}
document.getElementById('next2').addEventListener('click', newTask2);

// Завдання 4
let imagesArray = [
    { path: 'flower1.jpg', title: 'Троянда', description: 'Символ любові' },
    { path: 'flower2.jpg', title: 'Нарцист', description: 'Весняна краса' },
    { path: 'flower3.jpg', title: 'Соняшник', description: 'Сонячний настрій' },
    { path: 'flower4.jpg', title: 'Ромашка', description: 'Польова ніжність' }
];
function initPhotoRotator(id, arr) {
    let div = document.getElementById(id);
    let i = 0;
    let title = document.createElement('div');
    let img = document.createElement('img');
    let desc = document.createElement('div');
    let nav = document.createElement('div');
    let back = document.createElement('a');
    let next = document.createElement('a');
    back.href = '#'; next.href = '#';
    back.textContent = 'Назад'; next.textContent = 'Вперед';
    nav.append(back, document.createTextNode(' | '), next);
    div.append(title, img, desc, nav);
    function show() {
        title.textContent = `${i + 1} / ${arr.length}`;
        img.src = arr[i].path;
        desc.textContent = `${arr[i].title}: ${arr[i].description}`;
        back.style.visibility = i === 0 ? 'hidden' : 'visible';
        next.style.visibility = i === arr.length - 1 ? 'hidden' : 'visible';
    }
    back.addEventListener('click', e => { e.preventDefault(); if (i > 0) { i--; show(); } });
    next.addEventListener('click', e => { e.preventDefault(); if (i < arr.length - 1) { i++; show(); } });
    show();
}
initPhotoRotator('rotator', imagesArray);

// Завдання 5
let captchaVal;
function generateCaptcha(n) {
    captchaVal = '';
    for (let i = 0; i < n; i++) captchaVal += Math.floor(Math.random() * 10);
    document.getElementById('captcha').textContent = captchaVal;
}
generateCaptcha(5);
document.getElementById('checkCaptcha').addEventListener('click', () => {
    let val = document.getElementById('captchaInput').value;
    document.getElementById('captchaResult').textContent =
        (val === captchaVal) ? '✅ Успіх!' : '❌ Невірно!';
});
