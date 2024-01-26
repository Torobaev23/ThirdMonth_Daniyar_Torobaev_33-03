// MAIL CHECKER

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /\w@gmail.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NO OK'
        gmailResult.style.color = 'red'
    }
}

// SQUARE

const square = document.querySelector('.child_block')

    let positionX = 0
    let positionY = 0
    const number = 449

    const moveBlock = () => {
        if  (positionX < number && positionY === 0) {
            positionX++
            square.style.left=`${positionX}px`
            setTimeout(moveBlock  , 5)
        } else if (positionX >= number && positionY <= number) {
            positionY++
            square.style.top=`${positionY}px`
            setTimeout(moveBlock  , 5)
        } else if (positionX > 0) {
            positionX--
            square.style.left=`${positionX}px`
            setTimeout(moveBlock  , 5)
        } else if (positionY > 0) {
            positionY--
            square.style.top=`${positionY}px`
            setTimeout(moveBlock  , 5)
        }
    }
    moveBlock()

// homework 2

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
const seconds = document.querySelector('#seconds')
let intervalId
let counter = 0
start.addEventListener('click', () =>{
    clearInterval(intervalId)
        intervalId = setInterval(() => {
            counter++
            seconds.innerHTML = counter
        }, 1000);

})

stop.addEventListener('click', () =>{
    clearInterval(intervalId)
    intervalId = null
})
reset.addEventListener('click', () =>{
    clearInterval(intervalId)
    intervalId = null
    seconds.textContent = 0
})




