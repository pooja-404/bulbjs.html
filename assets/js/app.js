let circle = document.querySelector(".circle")
let btn = document.querySelector(".btn")

let state = 1
btn.addEventListener("click", function () {
    if (state === 1) {
        circle.classList.add("on");
        btn.innerHTML = "Off";
        state = 0;
    } else {
        circle.classList.remove("on");
        btn.innerHTML = "on"
        state = 1
    }
})