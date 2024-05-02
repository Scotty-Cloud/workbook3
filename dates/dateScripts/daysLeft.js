function init(){
    const dateBtn = document.getElementById("dateBtn")
    dateBtn =.onclick
}


let startDate = new Date("July 11, 2022");
let endDate = new Date("November 11, 2022");

let msec_per_day = 1000 * 60 * 60 * 24;
let elapsedMilliseconds = endDate.getTime() - startDate.getTime();
let dayDiff = elapsedMilliseconds / msec_per_day;
let numDays = Math.round(dayDiff);

console.log(`the number o days between dates is ${numDays}`);