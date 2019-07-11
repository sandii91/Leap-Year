function myFunction() {
    var num1 = parseInt(document.getElementById("st1").value);
    
    if (num1 % 400 == 0 || (num1 % 100 != 0 && num1 % 4 == 0)) {
        document.getElementById("leap").innerHTML = " YES ";
    }
    else {
        document.getElementById("leap").innerHTML = " NO ";
    }
}
 