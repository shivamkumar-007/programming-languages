
let input =prompt("Enter a number");
const num=parseInt(input);

console.log(sum(num));


function sum(limit){
    let sum=0;
    for (let i=0;i<=limit;i++){
        if(i%3===0 || i%5===0 )
        sum+=i;
    }
    return sum;
}


// let sumThree=0;
// let sumFive=0;
// for(let i=0;i<=limit;i++){
//     if(i%3===0)
//       sumThree+=i;
//     else if(i%5===0)
//       sumFive+=i;
// }
// return sumThree+sumFive;


