$(document).ready(initializeApp);

function initializeApp(){
    $('.keypadContainer').on('click','.row button',keypadClick);
}

var keyCode = '';
function keypadClick(){
    var lastKey = $(this).text();
    if (lastKey === 'Clear'){

        //$('.keypadDisplay').text($('.keypadDisplay').text().splice($('.keypadDisplay').text().length-2),1);
    } else if (lastKey === 'Enter'){
        if (keyCode.length >= 4){
            displayStage++;
            changeDisplay();
        }
    } else {
        keyCode += $(this).text();
        $('.keypadDisplay').text($('.keypadDisplay').text()+'*');
        console.log(keyCode);
    }
}

if (paymentMethod === 'credit'){
    $('.primaryDisplayContainer').text('Please enter zip code');
} else if (paymentMethod === 'debit'){
    $('.primaryDisplayContainer').text('Please enter pin');
}

