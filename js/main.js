let elBurger = document.querySelector(".burger")
let elModalBox = document.querySelector(".modal_box")
var icon = true;

elBurger.addEventListener("click", function() {
    elModalBox.classList.toggle("modal-active");

    if (icon) {
        elBurger.src = "../images/close.svg";
        icon = false;
    } else {
        elBurger.src = "../images/burger.svg";
        icon = true;
    }
});