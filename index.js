
let countEl = document.getElementById("count-el")
let saveEl=document.getElementById("save-el")

let count =0;

function increment() {

    count=count+1;
    countEl.innerText=count; 

    console.log(count)
}

function save() {
let countstr=count+"-"
saveEl.innerText +=countstr
countEl.textContent=0
console.log(count)
}
