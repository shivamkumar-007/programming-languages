let input=prompt('Enter a number');
const limit= parseInt(input);

showNumbers(limit);

function showNumbers(limit){
    for(let i=0;i<=limit;i++){
        const check=2;
        const message= (i%check===0)?'EVEN':'ODD';
        console.log(i, message);
    }
}


 // if(i%check===0)
        //   console.log(i, 'EVEN');
        // else
        //   console.log(i, "ODD");