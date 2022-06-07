const form = document.getElementById("f0");
const inputName = document.getElementById("f1");
localStorage.setItem("f1", inputName.value);
const storedValue = localStorage.getItem("f1");

const inputEmail = document.getElementById("f2");
localStorage.setItem("f2", inputEmail.value);
const keptValue = localStorage.getItem("f2");

const inputMessage = document.getElementById("f3");
localStorage.setItem("f3", inputMessage.value);
const newValue = localStorage.getItem("f3");

function store() {
  let message = document.getElementById("f3");
  localStorage.setItem("f3", message.value);
}
