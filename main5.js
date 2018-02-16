



function printReceipt(cost, gallons){
    var receipt = $("<div>").addClass('receipt');
    var companyName = $("<h3>").addClass('receiptTitle').text("Super Legit Gas Co.");
    var address = $("<h5>").addClass('receiptThanks').text("1600 Pennsylvania Ave");
    var gasType = $("<p>").addClass('fuel-type').text('Fuel Type: ' + selection.type);
    var rate = $("<p>").addClass('rate').text('Cost per Gallon: ' + selection.price);
    var totalCost = $("<p>").addClass('total-cost').text('Total Cost: ' + total.price);
    receipt.append(companyName, address, gasType, rate, totalCost);
    $(".screenContainer").hide();
    $(".primaryDisplay5").append(receipt);
}

function changeMD5Text(){
    $(".primaryButtonText").hide();
    $(".screenContainer > h1").text('Thank you for coming!');
}