const names=['rudra', 'opi', 'jay', 'rudra','karim','opi','tuni','jay', 'karim', 'nishal'];

function removeDuplicate(names){
    const unique=[];
    for(let i=0;i<names.length;i++){
        let name=names[i];
        if(unique.includes(name)==false){
            unique.push(name);
        }
    }
    return unique;
}
let newList=removeDuplicate(names)
console.log(newList);