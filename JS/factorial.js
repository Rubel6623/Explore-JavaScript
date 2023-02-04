function Factorial(number){
    result=1;
    let i=number;
    while(i>=1){
        result=result*i;
        i--;
    }
    return result;
}
let num=7;
let fact=Factorial(num);
console.log('factorial of',num,':',fact);