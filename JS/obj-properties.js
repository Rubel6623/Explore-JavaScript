var shopingCard={
    pen: 45,
    notebook: 15,
    pencil: 12,
    mouse: 5,
    keyboard: 1
}
console.log(shopingCard);

var pencilcount=shopingCard['pencil'];
console.log(pencilcount);

var properties=Object.keys(shopingCard);
console.log(properties);

var propertiesValues=Object.values(shopingCard);
console.log(propertiesValues);

var propertyName='pen';
var propertyvalue=shopingCard[propertyName];
console.log(propertyvalue);

// update values

shopingCard.mouse=20;
console.log(shopingCard);

shopingCard['keyboard']=6;
console.log(shopingCard);