function Scroll(el) {
let element = document.querySelector(`.${el}`)
element.scrollIntoView(false)
}
function Burger() {
    if (document.querySelector(".bg_active")) {
        document.querySelector(".bg").classList.remove("bg_active")
    }else{
        document.querySelector(".bg").classList.add("bg_active")
    }
}
function Next() {
    if (document.querySelector(".about__slider").children[0].classList[1]==("img__active")) {
        document.querySelector(".about__slider").children[0].classList.remove("img__active")
        document.querySelector(".about__slider").children[1].classList.add("img__active")
    }else{
        document.querySelector(".about__slider").children[1].classList.remove("img__active")
        document.querySelector(".about__slider").children[0].classList.add("img__active")
    }
}
setInterval(Next, 3000);