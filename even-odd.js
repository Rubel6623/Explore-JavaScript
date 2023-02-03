function isEvenOrOdd(number){
    const reminder=number%2;
    if(reminder==0){
        return true;
    }
        return false;
    
}

const myNumber=isEvenOrOdd(20);
console.log(myNumber);
var myNumber2=isEvenOrOdd(29);
console.log(myNumber2);