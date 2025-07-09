let cart = ["shoes","shirt","wallets"];

function orderDetail(cart) {
    // 1. total number of products
    // return [cart.length,cart.length*1000];
    // total amount of products no. * 1000
    return {
        totalProducts: cart.length,
        totalPrice: cart.length * 1000 
    };
}

function orderSummary() {
    // total price and total product
    // then generate orderId

    var order = orderDetail[cart];
    var orderId = (order[1]*101) + "####";
    return [order,orderId];
}

function paymentGateway(orderId, cart, totalPrice) {
    // order id, product details and price ... payment is successful
    return {
        orderId: orderId,
        products: cart,
        totalPrice: totalPrice
    }
}

function successfulOrder(paymentInfo) {
    // it will display all the details about the payment product names
    console.log("Order Successful!");
    console.log("Order ID:", paymentInfo.orderId);
    console.log("Products:", paymentInfo.products.join(", "));
    console.log("Total Price:", paymentInfo.totalPrice);
    console.log("Payment Status:", paymentInfo.status);
}

let [order, orderId] = orderSummary(cart);
let paymentInfo = paymentGateway(orderId, cart, order.totalPrice);
successfulOrder(paymentInfo);

Array.prototype.filerRep = function (logic) {
    let output = [];
    for (var i = 0; i < this.length; i++) {
        if (logic(this[i])) {
            output.push(this[i]);
        }
    }
    return output;
}

let arr = [1, 2, 3, 4, 5];
function odd(x) {
    if (x % 2 == 0) {
        return x;
    }
}

let result = arr.filerRep(odd);
console.log(result);
function msdhoni() {}