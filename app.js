function Scroll(el) {
let element = document.querySelector(`.${el}`)
element.scrollIntoView(false)
}
function Burger() {
    if (document.querySelector(".bg_active")) {
        document.querySelector(".bg").classList.remove("bg_active")

    }else{
        document.querySelector(".bg").classList.add("bg_active")
        document.body.style.overflow="hidden"
    }
}
let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}
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
document.querySelector(".form").addEventListener('submit',()=>{
    send()
})
 async function send() {
    let inputArr = document.querySelectorAll(".element__form")
    await axios.post("https://backendvinpromholod.onrender.com/send",
        {
              name: inputArr[0].value,
              phone:inputArr[1].value,
        }
    )
}
function modal() {
    if (document.querySelector(".modal").style.display!="none") {
        document.querySelector(".modal").style.display="none"
        document.body.style.overflow="visible"
    }else{
        document.querySelector(".modal").style.display="block"
        document.body.style.overflow="hidden"
    }
}
document.querySelector(".contact").addEventListener('click',()=>{
    modal()
})
document.querySelector(".close").addEventListener('click',()=>{
    modal()
})