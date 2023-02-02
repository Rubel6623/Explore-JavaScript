var shopingCard={
    pen: 45,
    notebook: 15,
    pencil: 12,
    mouse: 5,
    keyboard: 1
}
console.log(shopingCard);
// var pencil=shopingCard['pencil'];
var properties=Object.keys(shopingCard)
console.log(properties);
var propertiesValues=Object.values(shopingCard);
console.log(propertiesValues);
var propertyName='notebook';
var propertyvalue=shopingCard[propertyName];
console.log(propertyvalue);