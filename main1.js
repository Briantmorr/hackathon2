$(document).ready(initializeApp);
var paymentMeathod = null;
var displayStage = 0;
function initializeApp() {
    $("#mainButton1").on('click',credit);
    $("#mainButton2").on('click',debit);
}
var paymentType = null;
function credit () {
    console.log('credit');
    paymentMeathod = "credit";
    displayStage++;
    changeStage(displayStage);
}

function debit () {
    console.log('debit');
    paymentMeathod = "debit";
    displayStage++;
    changeStage(displayStage);

}