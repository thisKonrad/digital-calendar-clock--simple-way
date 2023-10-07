/* :: >> basic digital_calendar_clock main JS << :: */ 

(function(){

/* full year */
function calendarYear(){

    const calYear = new Date().getUTCFullYear();

    const writeYear = document.querySelector('.date-year')
    .innerText = calYear;

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
        [1,'mon'], 
        [2,'tue'], 
        [3,'wed'],
        [4,'thu'], 
        [5,'fri'], 
        [6,'sat'],
        [0,'sun']
    ]);

    /* fallback if iterated over index of 7 */
    dateMap.set( 7,'no data' ); 

    /* write day or error message(if any connection fails) */
    dayWrite.innerText = dateMap.get(dateDay || 'no data');

}
calendarDay();


/* current month */
function calendarMonth(){

    const monthWrite = document.querySelector('.date-month');

    const dateMonth = new Date().getMonth();

    let monthMap = new Map([
        [1,'february'], 
        [2,'march'], 
        [3,'april'],
        [4,'may'], 
        [5,'june'], 
        [6,'july'], 
        [7,'august'], 
        [8,'september'],
        [9,'october'], 
        [10,'november'], 
        [11,'december'],
        [0,'january']
    ]);

    monthMap.set( 12,'no data' );

    monthWrite.innerText = monthMap.get(dateMonth || 'no data');

}
calendarMonth();
    

/* :: >> main function << :: */
function getTime(){

    let dateTime = new Date();
    
    let hourCount = dateTime.getHours();
    let minuteCount = dateTime.getMinutes();
    let secondCount = dateTime.getSeconds();

    const clockHour = document.querySelector('.digital-hour');
    const clockMinute = document.querySelector('.digital-minute');
    const clockSecond = document.querySelector('.digital-second');
            
    /* write numbers < 10 like: 01 not like: 1 */
    hourCount < 10 ? clockHour.innerText =`0${hourCount}`:
    clockHour.innerText =`${hourCount}`;

    minuteCount < 10 ? clockMinute.innerText =`0${minuteCount}`:
    clockMinute.innerText =`${minuteCount}`;

    secondCount < 10 ? clockSecond.innerText =`0${secondCount}`:
    clockSecond.innerText =`${secondCount}`;
 
   
    /* :: am to pm session :: */
    const session = document.querySelector('.session');

    if( hourCount >= 12){

        session.innerText = 'PM';

    }
    else if( hourCount <=12 ){ 

        session.innerText = 'AM';

    }

};

setInterval(getTime, 10);


/* :: display switch light on / off function :: */
const lightBtn = document.querySelector('#switchLight');
const clockDisplay =  document.querySelector('.display');
const span = document.querySelectorAll('span');

function lightSwitch(){

    clockDisplay.classList.toggle('lightSwitch')
    lightBtn.firstChild.classList.toggle('buttonOn');

    span.forEach((e)=> {
        e.style.backgroundColor = 'transparent';
    });

}

lightBtn.addEventListener('click', lightSwitch);

    
}());
