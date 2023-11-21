const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function calculateDegrees(time) {
    const calc = (time / 60) * 360;
    return calc;
}
    
function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = (calculateDegrees(seconds)) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`
      
      
    const minutes = now.getMinutes();
    const minutesDegrees = (calculateDegrees(minutes)) + ((seconds/60)*6) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`
      
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
    }

    setInterval(setDate, 1000);
    setDate();