var shopingCard={
    pen: 45,
    notebook: 15,
    pencil: 12,
    mouse: 5,
    keyboard: 1
}
var keys=Object.keys(shopingCard);
console.log(keys);
for(var i=0;i<keys.length;i++){
    var propertyName=keys[i];
    var propertyValue=shopingCard[propertyName];
    console.log(propertyName,'=',propertyValue);
}

// for in loop

for(var propertyName in shopingCard){
    const value=shopingCard[propertyName];
    console.log(propertyName,value);
}