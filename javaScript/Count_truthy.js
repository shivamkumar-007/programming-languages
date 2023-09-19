let array=[1,2,3,4,null,0,undefined,''];
countTruthy(array);

function countTruthy(array){
    let count=0;
    let index=0;
    for(let item of array){
        if(item)
          count++;
    }
    console.log(count);
}