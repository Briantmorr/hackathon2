
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
            changeStage();
        }
    } else {
        keyCodeDebit += $(this).text();
        $('.keypadDisplay').text($('.keypadDisplay').text()+'*');
        console.log(keyCodeDebit);
    }
}



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
            changeStage();
        }
    } else {
        keyCodeCredit += $(this).text();
        $('.keypadDisplay').text($('.keypadDisplay').text()+lastKey);

    }
}


function creditOrDebit(){
    console.log('in credit');
    if (paymentMethod === 'credit'){
        $('.primaryDisplay2 > h1').text('Please enter zip code');
        $('.primaryDisplay2 > .primaryButtonText > h2').text('Use keypad to enter zip code');
        $('.keypadContainer').on('click','.row button',keypadCredit);
    } else if (paymentMethod === 'debit'){
        $('.primaryDisplay2 > h1').text('Please enter pin');
        $('.primaryDisplay2 > .primaryButtonText > h2').text('Use keypad to enter pin');
        $('.keypadContainer').on('click','.row button',keypadDebit);
    }
}