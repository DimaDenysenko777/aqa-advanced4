function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero");
    }
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Both arguments must be numbers");
    }
    return numerator / denominator;
}

try {
    console.log(divide(10, 2)); // Success example
    console.log(divide(10, 0)); // Error example
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Job is done");
}
