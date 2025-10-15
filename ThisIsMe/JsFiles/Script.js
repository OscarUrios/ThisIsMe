var checkBox = document.getElementById("darkM");
var text = document.getElementsByTagName("p");
var skillsList = document.getElementsByTagName("li");
window.onload = onPageLoad();

document.body.style.transition = "background-image 0.4s ease-in-out";
function onPageLoad() {
    checkBox.checked = false;
    updateTheme();
}

function updateTheme() {// Changes the background between dark & light mode
    if (checkBox.checked) {
        document.body.style.backgroundColor = "#dcdcdc";
        for(let i = 0; i < text.length; i++) {
            text[i].style.color = "black";
        }
        for (let i = 0; i < skillsList.length; i++) {
            skillsList[i].style.color = "black";
        }
    }
    else if (!checkBox.checked) {
        document.body.style.backgroundColor = "#323232";
        for(let i = 0; i < text.length; i++) {
            text[i].style.color = "white";
        }
        for (let i = 0; i < skillsList.length; i++) {
            skillsList[i].style.color = "white";
        }
    }
}