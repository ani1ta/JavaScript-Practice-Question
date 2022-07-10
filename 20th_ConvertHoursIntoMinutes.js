function HourMinetusIntoSeconds(hour, minutes){
    return ((hour*60)*60) + minutes*60
}

document.write(HourMinetusIntoSeconds(1, 3))