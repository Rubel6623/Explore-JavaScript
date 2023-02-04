function factorial(number){
    let result=1;
    for(let i=number;i>=1;i--){
            result=result*i;
    }
    return result;
}

let mynum=5;
let Factorial=factorial(mynum);
console.log('factorial of',mynum,':',Factorial);