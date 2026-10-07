let result = document.getElementById("number");
let Increment = document.getElementById("increment");
let reset = document.getElementById("reset");
let decrement = document.getElementById("decrement");

let count = 0 ;

Increment.addEventListener("click", function(){
    count++
    result.innerText = count
})

decrement.addEventListener("click", function(){
    count--
    result.innerText = count
})

reset.addEventListener("click", function(){
    count = 0
    result.innerText = 0
})