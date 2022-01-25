function showLengthCombined(s: string, b?: boolean){
    if(b){
        console.log("Length of given string is: " + s.length);
    }
    else{
        console.log("Length of given string (excluding spaces) is: " + s.replace(" ", "").length);
    }
}

    let stringCombined: string = "Given String";

    showLengthCombined(stringCombined);