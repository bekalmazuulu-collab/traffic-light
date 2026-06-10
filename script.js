// let task = document.getElementById("task")
// let taskBtn = document.getElementById("taskBtn")
// let list = document.getElementById("list")
// function addTask(){
// if (task.value === "")return    
// let itm = document.createElement("li")
// itm.textContent = task.value
// list.append(itm)
// task.value = ""
// }
// taskBtn.onclick = addTask
// task.addEventListener("keydown",
//     function(event){
//         if (event.key === "Enter"){
//             addTask()
//         }
//     }
// )
let green = document.querySelector(".green")
let number = document.querySelector(".number")
let red = document.querySelector(".red")
let timer1 = 10;
function updateTimer1() {
    timer1--;
    if (timer1 === 0) {
        timer1 = 10
        red.style.backgroundColor = red.style.backgroundColor == "black" ? "red" : "black"
        green.style.backgroundColor = green.style.backgroundColor == "green" ? "black" : "green"
    }
    number.innerHTML = timer1
}
setInterval(updateTimer1, 1000)
////
let number2 = document.querySelector(".number2")
let red2 = document.querySelector(".red2")
let green2 = document.querySelector(".green2")
let timer2 = 10;
function updateTimer2() {
    timer2--;
    if (timer2 === 0) {
        timer2 = 10
        red2.style.backgroundColor = red2.style.backgroundColor == "red" ? "black" : "red"
        green2.style.backgroundColor = green2.style.backgroundColor == "black" ? "green" : "black"
    }
    number2.innerHTML = timer2
}
setInterval(updateTimer2, 1000)
