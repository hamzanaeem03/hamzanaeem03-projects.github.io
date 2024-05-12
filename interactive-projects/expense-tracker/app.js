
let savings = 0;

function updateSavings() {
  document.getElementById('display-savings').innerText = `Savings: $${savings}`;
}

function addIncome() {
  const amount = parseFloat(document.getElementById('input-box').value);
    savings += amount;
    updateSavings();
  document.getElementById('input-box').value = " ";

}

function addExpense() {
  const amount = parseFloat(document.getElementById('input-box').value);
    savings -= amount;
    updateSavings();
  document.getElementById('input-box').value = " ";


}
// function clearInput() {
//   document.getElementById("input-box").value = ""; 
// }


