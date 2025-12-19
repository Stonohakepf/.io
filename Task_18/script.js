const fullNameInput = document.getElementById("fullName");
const surnameInput = document.getElementById("surname");
const nameInput = document.getElementById("name");
const patronymicInput = document.getElementById("patronymic");

fullNameInput.addEventListener("blur", function () {
    const parts = fullNameInput.value.trim().split(" ");

    surnameInput.value = parts[0] || "";
    nameInput.value = parts[1] || "";
    patronymicInput.value = parts[2] || "";
});
