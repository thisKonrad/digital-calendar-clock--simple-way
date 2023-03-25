/* :: basic digital_calendar_clock :: main JS :: */ 
'use strict';

/* year */
function calendarYear(){
    const calYear = new Date().getUTCFullYear();
    const writeYear = document.querySelector('.date-year').innerText = calYear;
}
calendarYear();


/* day number */
function numberDay(){
    const dataDay = new Date().getDate();
    const dayNumber = document.querySelector('.number-day');
    dayNumber.innerText = dataDay;
}
numberDay();


/* day name */
function calendarDay(){
    const dayWrite = document.querySelector('.day-of-day');
    const dateDay = new Date().getDay();
    let dateMap = new Map([
    [1,'mon'], [2,'tue'], [3,'wed'],
    [4,'thu'], [5,'fri'], [6,'sat'],
    [0,'sun']]);
    dateMap.set(7,'no data'); /* error message if any connection fails */
    dayWrite.innerText = dateMap.get(dateDay || 'no data');
}
calendarDay();


/* month */
function calendarMonth(){
    const monthWrite = document.querySelector('.date-month');
    const dateMonth = new Date().getMonth();
    let monthMap = new Map([
    [1,'february'], [2,'march'], [3,'april'],
    [4,'may'], [5,'june'], [6,'july'], [7,'august'], [8,'september'],
    [9,'october'], [10,'november'], [11,'december'],
    [0,'january']]);
    monthMap.set(12,'no data');
    monthWrite.innerText = monthMap.get(dateMonth || 'no data');
}
calendarMonth();
    

/* clock :: time */
function getTime(){
    let dateTime = new Date();
    
    let hourgo = dateTime.getHours();
    let minutego = dateTime.getMinutes();
    let secondgo = dateTime.getSeconds();

    const digiclockHour = document.querySelector('.digital-hour').innerText = hourgo;
    const digiclockMinute = document.querySelector('.digital-minute').innerText = minutego;
    const digiclockSecond = document.querySelector('.digital-second').innerText = secondgo;
    

/* :: am to pm session :: */
const session = document.querySelector('.session');
  
    if( hourgo >= 12){
        session.innerText = 'PM';
    }
    else{ hourgo <=12
        session.innerText = 'AM';}
    }
    setInterval(getTime, 10);