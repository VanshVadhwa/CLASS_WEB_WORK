let cart = ["shoes", "shirt", "wallets"];

function orderDetail(cart) {
    return {
        totalProducts: cart.length,
        totalPrice: cart.length * 1000
    };
}

function orderSummary(cart) {
    var order = orderDetail(cart);
    var orderId = (order.totalPrice * 101) + "####";
    return [order, orderId];
}

function paymentGateway(orderId, cart, totalPrice) {
    return {
        status: "success",
        orderId: orderId,
        products: cart,
        totalPrice: totalPrice
    };
}

function successfulOrder(paymentInfo) {
    console.log("Order Successful!");
    console.log("Order ID:", paymentInfo.orderId);
    console.log("Products:", paymentInfo.products.join(", "));
    console.log("Total Price:", paymentInfo.totalPrice);
    console.log("Payment Status:", paymentInfo.status);
}

let [order, orderId] = orderSummary(cart);
let paymentInfo = paymentGateway(orderId, cart, order.totalPrice);
successfulOrder(paymentInfo);
