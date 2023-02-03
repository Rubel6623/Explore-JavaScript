function isLeapYear(year){
    if(year%4==0 && year%100!=0 || year%400==0){
        return true;
    }
   return false;
}
const myYear= isLeapYear(2012);
console.log('It is a leap year :',myYear);
var herYear=isLeapYear(2021);
console.log('It is a leap year :',herYear);