document.title = "Latihan DOM"
// const body = document.body

// body.append("hello world")

// let a = "Aku mau pulang";
// console.log(a)

const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");

btn1.style.border = "none"
btn1.style.padding = "8px";
btn1.style.fontSize = "24px"
btn1.style.background = "aqua"

console.log(btn1)

function kliksaya(){
    btn1.style.background = "tomato"
}

function  ubahText(text) {
    btn2.textContent = text
    
}