const loginForm = document.getElementById("login-form");
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
        greeting.classList.remove(HIDDEN_CLASSNAME);
        loginForm.classList.add(HIDDEN_CLASSNAME);
        greeting.innerText = `Hello ${savedUserName}`;
    } else {
       alert("Please check your Id/PW!");
    }
});