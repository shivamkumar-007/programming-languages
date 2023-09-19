let input = prompt('Enter a number');
let row = parseInt(input);

showStars(row);

function showStars(row){
    for(let i=0;i<=row;i++){
        let pattren ='';
          
        for(let j=0;j<i;j++)
             pattren += '*'
        
        console.log(pattren);
        
    }
}