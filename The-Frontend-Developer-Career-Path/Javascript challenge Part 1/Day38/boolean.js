let hasDiscountCode = true;

function processOrder() {
    if (hasDiscountCode) {
        console.log("Discount applied to food order")
    } else {
        console.log("NO discount applied to food order")
    }
}
processOrder();

// in js empty string is interpreted as false value