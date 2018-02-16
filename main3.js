

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

