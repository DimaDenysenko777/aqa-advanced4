function recursiveFunc(num) {
    console.log(num);
    if (num > 0) {
        recursiveFunc(num - 1);
    }
}

recursiveFunc(5);
