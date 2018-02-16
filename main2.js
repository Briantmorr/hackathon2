$(document).ready();


var keyCodeDebit = '';
function keypadDebit(){
    var lastKey = $(this).text();
    if (lastKey === 'Clear'){
        $('.keypadDisplay').text($('.keypadDisplay').text().substring(0,$('.keypadDisplay').text().length-1));
    } else if (lastKey === 'Enter'){
        if (keyCodeDebit.length === 4){
            $('.keypadDisplay').text('');
            displayStage++;
            changeDisplay();
        }
    } else {
        keyCodeDebit += $(this).text();
        $('.keypadDisplay').text($('.keypadDisplay').text()+'*');
        console.log(keyCodeDebit);
    }
}

var keyCodeCredit = '';
function keypadCredit(){
    var lastKey = $(this).text();
    if (lastKey === 'Clear'){
        $('.keypadDisplay').text($('.keypadDisplay').text().substring(0,$('.keypadDisplay').text().length-1));
    } else if (lastKey === 'Enter'){
        if (keyCodeDebit.length === 5){
            $('.keypadDisplay').text('');
            displayStage++;
            changeDisplay();
        }
    } else {
        keyCodeDebit += $(this).text();
        $('.keypadDisplay').text($('.keypadDisplay').text()+'*');
        console.log(keyCodeDebit);
    }
}

if (paymentMethod === 'credit'){
    $('.primaryDisplayContainer').text('Please enter zip code');
    $('.keypadContainer').on('click','.row button',keypadCredit);
} else if (paymentMethod === 'debit'){
    $('.primaryDisplayContainer').text('Please enter pin');
    $('.keypadContainer').on('click','.row button',keypadDebit);
}

