var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

var str = "It's";

if(MINUTE > 30){
    var str = str + " almost " + (HOUR+1);
}else{
    var str = str + " just after " + HOUR;
}

if(PERIOD=="AM"){
    var str = str + " in the morning.";
}else{
    var str = str + " in the evening.";
}

console.log(str);

//BONUS SECTION//

var hour = 8;
var min = 0;
var period = "AM";

var str = "It's ";

if(min > 30 && min < 45){
    var str = str + "almost a quarter to " + (hour+1);
}else if(min > 45 & min < 60){
    var str = str + "almost " + (hour+1);
}else if(min > 15 && min < 30){
    var str = str + "almost a half past " + hour;
}else if(min > 0 && min < 15){
    var str = str + "almost a quarter past " + hour;
}else if(min == 15){
    var str = str + "it's a quarter after " + hour;
}else if(min == 30){
    var str = str + "it's a half past " + hour;
}else if(min == 45){
    var str = str + "it's a quarter till " + (hour+1);
}else{
    var str = str + hour + " o'clock";
}

if(period=="AM" && hour >= 7 && hour < 11){
    var str = str + " in the morning.";
}else if(period=="AM" && hour < 7 && hour >= 1){
    var str = str + " in the early morning.";
}else if(period=="AM" && hour == 12){
    var str = str + "midnight";
}else if(period=="PM" && hour >= 1 && hour <= 5){
    var str = str + "in the afternoon";
}else if(period=="PM" && hour > 5 && hour <= 8){
    var str = str + "in the evening";
}else{
    var str = str + "at night";
}

console.log(str);