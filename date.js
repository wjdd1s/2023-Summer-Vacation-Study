const today = document.querySelector("h3#date");

function getDate() {
    const now = new Date();
    const year= String(now.getFullYear());
    const month = String(now.getMonth()+1);
    const date = String(now.getDate());


    if(month === "1"){
        mon = "Jan";
    } else if (month === "2") {
        mon = "Feb";
    } else if (month === "3") {
        mon = "Mar";
    } else if (month === "4") {
        mon = "Apr";
    } else if (month === "5") {
        mon = "June";
    } else if (month === "6") {
        mon = "July";
    } else if (month === "8") {
        mon = "Aug";
    } else if (month === "9") {
        mon = "Sep";
    } else if (month === "10") {
        mon = "Oct";
    } else if (month === "11") {
        mon = "Nov";
    } else {
        mon = "Dec";
    }

    today.innerText = `${mon} ${date}, ${year}`
}
getDate();



