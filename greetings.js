const loginForm = document.querySelector("#login-form");
const loginButton = document.getElementById("login-form-submit");

const HIDDEN_CLASSNAME = "hidden";
const USERID_KEY = "username";
const USERPW_KEY = "password";


loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    localStorage.setItem(USERID_KEY, username);
    localStorage.setItem(USERPW_KEY, password);

    const savedUserName = localStorage.getItem(USERID_KEY);
    const savedUserPw = localStorage.getItem(USERPW_KEY);

    if (savedUserName === "wjddls" && savedUserPw === "12345") {
        loginForm.classList.add(HIDDEN_CLASSNAME);
        weathers.classList.remove(HIDDEN_CLASSNAME);
        clock.classList.remove(HIDDEN_CLASSNAME);
        quotee.classList.remove(HIDDEN_CLASSNAME);
        toDoForm.classList.remove(HIDDEN_CLASSNAME);
        toDoList.classList.remove(HIDDEN_CLASSNAME);
    } else {
       alert("Please check your Id/PW!");
    }
});