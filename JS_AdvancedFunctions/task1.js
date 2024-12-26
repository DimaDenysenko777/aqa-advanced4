function handleNum(num, handleEven, handleOdd) {
    if (num % 2 === 0) {
        handleEven(num);
    } else {
        handleOdd(num);
    }
}

function handleEven(num) {
    console.log(`number is even`);
}

function handleOdd(num) {
    console.log(`number is odd`);
}

handleNum(5, handleEven, handleOdd);
handleNum(4, handleEven, handleOdd);
