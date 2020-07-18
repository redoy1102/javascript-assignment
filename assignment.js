//feetToMile
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var nanafeet = feetToMile(10560);
console.log(nanafeet);

//woodcalculator
function woodCalculator(chair,table,bed){
var chairCount = chair * 1;
var tableCount = table * 3;
var bedCount = bed * 5;
var totalWood = chairCount + tableCount + bedCount;
return totalWood;
}
var woodresult = woodCalculator(5,2,3);
console.log(woodresult);

//brickCalculator
function brickCalculator(floor){
    let bricks = 0;
    if(floor <= 10){
        bricks = floor*1000*15;
        return bricks; 
    }
    else {
        bricks = 10*15*1000;
        floor = floor - 10;
        if(floor <= 10){
            bricks = bricks + floor*1000*12;
            return bricks;}
        else{
            bricks = bricks + 10*12*1000;
            floor = floor - 10;
            bricks = bricks + floor*1000*10;
            return bricks;
        }
    }
}

//tinyfriend
function tinyFriend(names){
    var small = names[0];
    for(var i = 0; i<names.length; i++)
    var currentsmall = names[i].length;
    if(currentsmall < small){
        currentsmall = small;
    }
    return currentsmall;
}
var tinyFriendName = tinyFriend(['Shakil','mim']);
console.log(tinyFriendName);
