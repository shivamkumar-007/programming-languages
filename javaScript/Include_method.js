const number =[1,2,3,4];
console.log(includes(number,10));

function includes(array, searchItem){
    for (let elem of array)
        if (searchItem === elem)
         return true;
        
     return false;    
    
}