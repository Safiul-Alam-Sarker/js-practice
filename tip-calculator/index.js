const calculateBtn = document.getElementById("calculate");
const billVal = document.getElementById("bill");
const tipVal = document.getElementById("tip");
const totalVal = document.getElementById("total");


function calculateTotal(){
    total = billVal.value *(1+  tipVal.value/100);
    
    totalVal.innerText = total.toFixed(2);
}

calculateBtn.addEventListener("click",calculateTotal);