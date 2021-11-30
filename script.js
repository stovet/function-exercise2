
1 //DIMENSIONAL CHARACTER MOVING GAME
{
    let direction = 0;
    let location = 0;
function moveForward(distance){
    if(direction % 2 === 0){
        location += distance;
    } else {
        location -= distance;
    }
    
}
function moveBackward(distance){
    if(direction % 2 === 0){
        location -= distance;
    } else {
        location += distance;
    }
}
function turnAround(){
    direction++;
}
function printLocation(){
    console.log(location);
}

}