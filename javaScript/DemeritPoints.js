
let val =prompt('Enter your speed ');
const speed= parseInt(val);
checkSpeed(speed);

function checkSpeed (speed){
    const speedLimiit=70;
    const kmPerPoint=5;

    if( speed< speedLimiit +kmPerPoint ){
        console.log("OK");
        return;
    }
    const points= Math.floor((speed-speedLimiit)/kmPerPoint);
    if(points>=12)
          console.log('License suspended');
    else
          console.log('Points', points);
    
}