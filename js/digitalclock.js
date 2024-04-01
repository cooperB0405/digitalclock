function currentTime() {
    let theTime= new Date();

    let theDayNum = theTime.getDay();

    let theHour = theTime.getHours();

    let theMins = theTime.getMinutes();

    let theSecs = theTime.getSeconds();

    
    let theDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    let amPm = "AM";
    if(theHour>=12){
        amPm = "PM";
    }

    if(theHour>12){
        theHour = theHour % 12;
    }

    if(theHour<10){
        theHour = "0" + theHour;
    }

    if(theMins<10){
        theMins = "0" + theMins;
    }

    if(theSecs<10){
        theSecs = "0" + theSecs;
    }

    document.getElementById("day").innerHTML = theDay[theDayNum];
    document.getElementById("hour").innerHTML = theHour;
    document.getElementById("minute").innerHTML = theMins;
    document.getElementById("seconds").innerHTML = theSecs;
    document.getElementById("amPm").innerHTML = amPm;

    let evenSecs = theSecs % 2;
    if(evenSecs === 0){
        document.getElementById("colonOne").style.color = "red";
        document.getElementById("colonTwo").style.color = "red";
    }
    else{
        document.getElementById("colonOne").style.color = "black";
        document.getElementById("colonTwo").style.color = "black";
    }
    
}
setInterval(() => {
    currentTime();
}, 1000);