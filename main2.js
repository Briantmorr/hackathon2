$(document).ready(creditOrDebit);


var keyCodeDebit = '';
function keypadDebit(){
    var lastKey = $(this).text();
    if (lastKey === 'Clear'){
        $('.keypadDisplay').text($('.keypadDisplay').text().substring(0,$('.keypadDisplay').text().length-1));
        keyCodeDebit = keyCodeDebit.substring(0,keyCodeDebit.length-1);
    } else if (lastKey === 'Enter'){
        if (keyCodeDebit.length === 4){
            $('.keypadDisplay').text('');
            keyCodeDebit='';
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
        keyCodeCredit = keyCodeCredit.substring(0,keyCodeCredit.length-1);
    } else if (lastKey === 'Enter'){
        if (keyCodeCredit.length === 5){
            $('.keypadDisplay').text('');
            keyCodeCredit='';
            displayStage++;
            changeDisplay();
        }
    } else {
        keyCodeCredit += $(this).text();
        $('.keypadDisplay').text($('.keypadDisplay').text()+lastKey);
        console.log(keyCodeDebit);
    }
}


function creditOrDebit(){
    if (paymentMethod === 'credit'){
        $('.primaryDisplayContainer').text('Please enter zip code');
        $('.keypadContainer').on('click','.row button',keypadCredit);
    } else if (paymentMethod === 'debit'){
        $('.primaryDisplayContainer').text('Please enter pin');
        $('.keypadContainer').on('click','.row button',keypadDebit);
    }
}