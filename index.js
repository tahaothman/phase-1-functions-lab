// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if(location>42){
        return location-42;
    }else {
        return 42-location;
    }

}

function distanceFromHqInFeet(distination){
    let distance = distanceFromHqInBlocks(distination);

    return((distance)*264);

}

function distanceTravelledInFeet(start, end){
    if(end>start){
    return (end-start)*264;
    }else if (start>end){
        return (start-end)*264;
    }
}
function calculatesFarePrice(start, destination){
    let totalFeet = distanceTravelledInFeet(start,destination);

    if(totalFeet <= 400){
        return 0;

    }else if (totalFeet > 400 && totalFeet <=2000){
        return (totalFeet - 400) * 0.02;
    }else if (totalFeet > 2000){
        if(totalFeet<2500){
            return 25;
        }else {
            return 'cannot travel that far'
        }
        
    }


}