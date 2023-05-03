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
console.log()
let i = 0
let interval1 = setInterval(() => {
    document.querySelectorAll(".title")[0].innerHTML=i
    i=i+10
    if(i>5000){
        clearInterval(interval1)
    }
}, 4);
let i2 = 0
let i2i = 0
let interval2 = setInterval(() => {
    document.querySelectorAll(".title")[1].innerHTML=`-${i2} - ${i2i}`
    i2=i2+1
    i2i=i2i+1
    console.log(123);
    if(i2>10){
        i2=i2-1
    }
    if(i2i>20){
        i2=i2-1
        clearInterval(interval2)
    }
}, 80);
let i3 = 0
let interval3 = setInterval(() => {
    document.querySelectorAll(".title")[2].innerHTML=i3
    i3=i3+1
    if(i3>35){
        clearInterval(interval3)
    }
}, 60);
let i4 = 0
let i4i = 0
let interval4 = setInterval(() => {
    document.querySelectorAll(".title")[3].innerHTML=`${i4}/${i4i}`
    i4=i4+1
    i4i=i4i+1
    if(i4>24){
        clearInterval(interval4)
    }
    if(i4i>7){
        i4i=i4i-1
    }
}, 75);