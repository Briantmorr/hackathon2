//aaahhh so many globals haha
var keyCodeDebit = '';
var paymentMethod = null;
var displayStage = 1;
var paymentType = null;

var total = {
    gallons: 0,
    price: 0
};

var selection = {
    type: null,
    price: 2.99
};

var timerID = null;

var keyCodeCredit = '';
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



function credit () {
    console.log('credit');
    paymentMethod = "credit";
    displayStage++;
    creditOrDebit();
    changeStage();

}

function debit () {
    console.log('debit');
    paymentMethod = "debit";
    displayStage++;
    creditOrDebit();
    changeStage();


}