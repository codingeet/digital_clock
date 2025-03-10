
function startClock () {
    let clockDiv = document.getElementById('clock');``
    setInterval(() => {
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let AmPm = hours >= 12 ? 'PM' : 'AM';    
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;  
        clockDiv.innerHTML = `${hours} : ${minutes} : ${seconds}  ${AmPm}`;
    }, 1000);
} 