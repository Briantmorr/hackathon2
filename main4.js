



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
    changeStage();
}
