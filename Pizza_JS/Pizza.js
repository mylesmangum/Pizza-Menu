
// Checks to see what size was chosen, then it will run toppings
function getReceipt(){
    var text1 = "<h3>You Purchased:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for(var i = 0; i < sizeArray.length; i++){
        if(sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    // Change total to the cost of each pizza
    if(selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    }
    else if( selectedSize === "Small Pizza") {
        sizeTotal = 8;
    }
    else if( selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }
    else if( selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }
    else if( selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    // Check values in console
    console.log(selectedSize + " = $"+sizeTotal+ ".00");
    console.log('size text1: ' +text1);
    console.log("subtotal: $"+runningTotal+ ".00");
    // Get the size total, then run the toppings to add to running total
    getTopping(runningTotal,text1)
}

// Checks toppings selected, then adds them to the value
// Also puts on screen the cost 

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for(var i = 0; i < toppingArray.length; i++){
        if(toppingArray[i].checked) {
            selectedTopping.push(toppingArray[i].value);
            console.log("selected topping item: (" +toppingArray[i].value + ")");
            text1 = text1 + toppingArray[i].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    // 1 Free topping, make sure toppings dont go negative
    if(toppingCount > 1) {
        toppingTotal = toppingCount - 1;
    }
    else {
        toppingTotal = 0;
    }
    runningTotal = runningTotal + toppingTotal;
    console.log("total selected topping items: " +toppingCount);
    console.log(toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal+ ".00");
    // Show on screen the values being saved
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML =  "<h3>Total: <strong>$" + runningTotal + ".00 </strong></h3>";
}