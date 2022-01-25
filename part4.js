function showTypes(b, n, s, arr) {
    if (arr === void 0) { arr = []; }
    console.log("The Boolean b is: " + b +
        "\nThe Number n value is: " + n +
        "\nThe String s is: " + s +
        "\nThe Array arr is: " + arr);
}
var boolValue = true;
var numValue = 42;
var strValue = "This is a String";
var arrValue = [1, 2, 3];
showTypes(boolValue, numValue, strValue, arrValue);
var multitypearray = [7, 42, "Blaze", false];
console.log(multitypearray);
console.log(arrValue);
