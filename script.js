function myFunction() {
    var no1 = parseInt(document.getElementById("no1").value);
    var no2 = parseInt(document.getElementById("no2").value);
    var no3 = parseInt(document.getElementById("no3").value);
    if (no1 <=0 || no2 <= 0|| no3 <= 0){
        document.getElementById('shape').innerHTML = ("INVALID INPUT");
    }
    else if (no1 + no2 <= no3 || no1 + no3 <= no2 || no2 + no3 <= no1){
        document.getElementById("shape").innerText=("NOT A TRIANGLE");
    }
    else if(no1===no2 && no2===no3 && no3===no1){
        document.getElementById("shape").innerText=("EQUILATERAL TRIANGLE! All sides are equal");
    }
    else if (no2 == no1 && no1 !==no3|| no2 == no3 && no2 !==no1 || no3 == no1 && no1 !==no2) {
         document.getElementById('shape').innerHTML = ("ISOSCELES TRIANGLE:Two sides are equal");
}
else if(no1 !==no3 !==no2){
    document.getElementById("shape").innerText=("SCALENE TRIANGLE! NO sides are equall")
    }
}
