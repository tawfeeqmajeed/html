// Different ways to print in JavaScript
// console.log("Hello world")
// alert("Hello world")
// document.getElementById("txt").innerText = "Hello world"

// let age = document.getElementById("txt").innerText

// if (age >= 18) {
//     console.log("You are an adult")
// } else {
//     console.log("You are a minor")
// }

// a = document.getElementById("txt").innerText
// console.log(a)

// a = document.getElementsByTagName("body")[0]

// // using for loop to add 5 paragraphs
// for (let i = 0; i < 100; i++) {
//     a.innerHTML += "<p>" + (i + 1) + "</p>"
// }

let btn = document.getElementById("btn")
btn.addEventListener("click", function() {
    btn.style.backgroundColor = "red"
})