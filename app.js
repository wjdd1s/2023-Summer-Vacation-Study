const btn = document.querySelector("button");


function handleTitleClick(){
    btn.classList.toggle("clicked");
    if(btn.innerText === "확인"){
        btn.innerText = "취소";
    } else{
        btn.innerText = "확인";
    }
}


btn.addEventListener("click", handleTitleClick);