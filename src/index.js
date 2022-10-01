const inputForm = document.querySelector("form");
const inputText = document.querySelector("input");
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleClick(event) {
  event.preventDefault();
  inputForm.classList.add(HIDDEN_CLASSNAME);
  const username = inputText.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //저장된 username 찾기

if (savedUsername === null) {
  //show the form
  inputForm.classList.remove(HIDDEN_CLASSNAME);
  inputForm.addEventListener("submit", handleClick);
} else {
  //show the greeting
  paintGreetings(savedUsername); // local storage에 유저정보가 있으면 거기서 유저정보를 받아서 인자로 넣어줌.
}
