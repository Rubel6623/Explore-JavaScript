// convert Inch to Feet
function isFeet(inch){
    const feet=inch/12;
    return feet;
}

var myInch=isFeet(70);
console.log(myInch);

// convert miles to kilometer 
function isKilometer(miles){
    const kiloMeter=miles*1.609344;
    return kiloMeter;
}
var kilometer=isKilometer(12);
console.log(kilometer,'Km');