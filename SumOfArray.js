function SumofArray(numbers){
    let sum=0;
    for(var i=0;i<numbers.length;i++){
        let index=i;
        const element=numbers[i];
        sum=sum+element;
        // console.log(i,'=',element,' ',sum);
    }
    return sum;
}
var myArray=[12,45,72,16,33,85];
let arraySum=SumofArray(myArray);
console.log('the sum of my array is :',arraySum);

// Sum oF Odd numbers
function OddNumberSumofArray(numbers1){
    sum=0;
    const OddNumbers=[];
    for(var i=0;i<numbers1.length;i++){
        const index1=i;
        const element1=numbers1[index1];
        if(element1%2!=0){
            console.log(index1,element1);
            OddNumbers.push(element1);
        }
    }
    return OddNumbers;
}

const myNumber=[22,45,78,93,14,25,30,73,41]
let oddnumbers=OddNumberSumofArray(myNumber);

const sumofOdd=SumofArray(oddnumbers);

console.log(oddnumbers);
console.log('odd number sum is : ',sumofOdd);