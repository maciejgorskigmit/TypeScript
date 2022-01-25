function showTypes(b: boolean, n: number, s: string, arr: number[] = []){
    console.log("The Boolean b is: " + b +
                "\nThe Number n value is: " + n +
                "\nThe String s is: " + s +
                "\nThe Array arr is: " + arr)
    }

    let boolValue: boolean = true;
    let numValue: number = 42;
    let strValue: string = "This is a String";
    let arrValue: number[] = [1, 2, 3];

    showTypes(boolValue, numValue, strValue, arrValue);

    let multitypearray:any[] = [7,42,"Blaze", false];
    console.log(multitypearray)
    console.log(arrValue)