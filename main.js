const secondsHand = document.querySelector('.second-hand')
const minutesHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
const hands = document.querySelectorAll('.hand')
function setDate() {
    hands.forEach( h => {
        if(h.style.transform === `rotate(438deg)` || h.style.transform === `rotate(444deg)` || h.style.transform === `rotate(90deg)` || h.style.transform === `rotate(450deg)` ) {
            h.style.transition = '0s'
        }else {
            h.style.transition = '0.05s'
        }
    } )
    const currentTime = new Date()
    const seconds = currentTime.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) + 90
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`
    const minutes = currentTime.getMinutes()
    const minutesDegrees = ((minutes / 60) * 360) + 90
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`
    const hour = currentTime.getHours()
    const hourDegrees = ((hour / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}
setInterval(setDate, 1000);