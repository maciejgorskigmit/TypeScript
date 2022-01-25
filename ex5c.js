function showLengthCombined(s, b) {
    if (b) {
        console.log("Length of given string is: " + s.length);
    }
    else {
        console.log("Length of given string (excluding spaces) is: " + s.replace(" ", "").length);
    }
}
var stringCombined = "Given String";
showLengthCombined(stringCombined);
