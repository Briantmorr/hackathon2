
$(document).ready(initializeApp);
function initializeApp(){
    $("#mainButton1").on('click',function(){
        if(displayStage === 1){
            credit();
        }
    });
    $("#mainButton2").on('click', function(){
        if(displayStage === 1){
            debit();
        }
    });



    // //main3
    // initializeApp();
    // function initializeApp() {
        $('#handleButton').on('click', function(){
            if(displayStage === 3){
                toggleHandle();
            }
        });
        $('#unleaded').on('click', function(){
            if(handleReady && displayStage === 3) {
                selection = unleaded;
                displayStage++;
                $('.pumpButtonsContainer').addClass('noTouch');
                changeStage();
                console.log("Test");
            }
        });
        $('#plus').on('click', function(){
            if(handleReady && displayStage === 3) {
                selection = plus;
                displayStage++;
                $('.pumpButtonsContainer').addClass('noTouch');
                changeStage();
            }
        });
        $('#supreme').on('click', function() {
            if (handleReady && displayStage === 3) {
                selection = premium;
                displayStage++;
                $('.pumpButtonsContainer').addClass('noTouch');
                changeStage();
            }
         });
           //main4
                $('#pumpGasButton').mousedown(function(){
                    if(displayStage === 4){
                        pumpGas();
                    }
                });
                $('#pumpGasButton').mouseup(function(){
                    if(displayStage === 4){
                        pumpStop();
                    }
                });
                $('#handleButton').click(function(){
                    if(displayStage === 4){
                        replaceHandle();
                    }
                });

            // //main5

                $("#mainButton2").click(function(){
                    if(displayStage === 5){
                        printReceipt(total.price, total.gallons);
                    }
                });
                $("#mainButton1").click(function(){
                    if(displayStage === 5){
                        changeMD5Text();
                    }
                });

}

function changeStage() {
    console.log('in here', displayStage);
    switch(displayStage){
        case 1:
            //$('.primaryDisplay' + displayStage).addClass("show");
            break;
        case 2:
            console.log('case 2');
            $('.primaryDisplay' + (displayStage - 1)).addClass("hidden");
            $('.primaryDisplay' + displayStage).removeClass("hidden");
            break;
        case 3:
            $('.primaryDisplay' + (displayStage -1)).addClass("hidden");
            $('.primaryDisplay' + displayStage).removeClass("hidden");
            break;
        case 4:
            $('.primaryDisplay' + (displayStage -1)).addClass("hidden");
            $('.primaryDisplay' + displayStage).removeClass("hidden");
            break;
        case 5:
            $('.primaryDisplay' + (displayStage -1)).addClass("hidden");
            $('.primaryDisplay' + displayStage).removeClass("hidden");
            break;
    }

}
