const btnE1 = document.getElementById("calculate");
const BillInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal(){
    const billValue = BillInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerHTML = totalValue.toFixed(2);
}

btnE1.addEventListener("click", calculateTotal);