const loginForm = document.querySelector("#login-form");
const loginButton = document.getElementById("login-form-submit");

const HIDDEN_CLASSNAME = "hidden";
const USERID_KEY = "username";


loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    localStorage.setItem(USERID_KEY, username);
    const savedUserName = localStorage.getItem(USERID_KEY);
    

    if (savedUserName !== null) {
        loginForm.classList.add(HIDDEN_CLASSNAME);
        weather.classList.remove(HIDDEN_CLASSNAME);
        clock.classList.remove(HIDDEN_CLASSNAME);
        quote.classList.remove(HIDDEN_CLASSNAME);
        toDoForm.classList.remove(HIDDEN_CLASSNAME);
        toDoList.classList.remove(HIDDEN_CLASSNAME);
        greeting.innerText = `Hello ${savedUserName}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    } 
});