$(document).ready(initApp);

var total = {
    gallons: 0,
    price: 0
};

var selection = {
    type: null,
    price: 2.99
};

var timerID = null;
var displayStage = 4;

function initApp() {
    $('#pumpGasButton').mousedown(pumpGas);
    $('#pumpGasButton').mouseup(pumpStop);
    $('#handleButton').click(replaceHandle);
}

function pumpGas(){

    timerID = setInterval(function(){
        total.gallons++;
        var num = total.gallons * selection.price;
        total.price = num.toFixed(2);
        $('#totalGallons').text(total.gallons);
        $('#totalPrice').text(total.price);
    },500);
}

function pumpStop(){
    clearInterval(timerID);
}

function replaceHandle() {
    displayStage++;
    changeDisplay();
}

function changeDisplay(){
    $('.primaryDisplay4 h1').text('Receipt? Y/N');
}