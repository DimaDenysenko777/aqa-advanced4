function checkOrder(available, ordered) {
    if (ordered > available) {
        return "Your order is too large, we don't have enough goods.";
    } else if (ordered === 0) {
        return "Your order is empty.";
    } else {
        return "Your order is accepted.";
    }
}
console.log(checkOrder(100, 120)); // Your order is too large
console.log(checkOrder(100, 0));   // Your order is empty
console.log(checkOrder(100, 50));  // Your order is accepted
