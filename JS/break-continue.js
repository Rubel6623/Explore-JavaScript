// break statement
for(var i=30;i<=86;i++){
    if(i==44){
        break;
    }
    console.log(i);
}

// continue statement

var bookPrice=[200,120,350,150,180,300,100,250];
for(i=0;i<bookPrice.length;i++){
    if(bookPrice[i]>=200){
        continue;
    }
    console.log(bookPrice[i]);
}