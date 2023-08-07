const h1 = document.querySelector(".hello h1");
let span = document.querySelector("span")

let num = 0;

function handleTitleClick(){
    num += 1;
    span.innerHTML = num;
}


h1.addEventListener("click", handleTitleClick);


