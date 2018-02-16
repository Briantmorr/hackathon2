$(document).ready(initializeApp);

var handleReady = false;
var unleaded = {
    type: 'Unleaded 87',
    price: 2.99
};

var plus = {
    type: 'Plus 89',
    price: 3.29
};

var premium = {
    type: 'Premium 93',
    price: 3.59
};
var selection;

function toggleHandle(){
    if (handleReady){
        handleReady = false;
    }
    else {
        handleReady = true;
    }
    console.log('Right now handleReady = ' + handleReady);
}

function initializeApp() {
    $('#handleButton').on('click', toggleHandle);
    $('#unleaded').on('click', function(){
        if(handleReady) {
            selection = unleaded;
            displayStage++;
            $('.pumpButtonsContainer').addClass('noTouch');
            changeDisplay();
            console.log("Test");
        }
    });
    $('#plus').on('click', function(){
        if(handleReady) {
            selection = plus;
            displayStage++;
            $('.pumpButtonsContainer').addClass('noTouch');
            changeDisplay();
        }
    });
    $('#supreme').on('click', function(){
        if(handleReady) {
            selection = premium;
            displayStage++;
            $('.pumpButtonsContainer').addClass('noTouch');
            changeDisplay();
        }
    });
}