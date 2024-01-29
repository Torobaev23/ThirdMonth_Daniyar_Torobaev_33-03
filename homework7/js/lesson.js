// PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NO OK'
        phoneResult.style.color = 'red'
    }
}

// TAB SLIDER

const tabContents = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')
const hideTabContent = () => {
    tabContents.forEach( (tabBlock)=> {
        tabBlock.style.display = 'none'
    })
    tabItems.forEach((tab)=> {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContents[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem , tabIndex) => {
            if (event.target === tabItem) {
                hideTabContent()
                currentTub = tabIndex
                showTabContent(currentTub)
            }
        })
    }
}


let currentTub = 0
const autoSlider = () => {
    hideTabContent()
    currentTub = (currentTub + 1) % tabItems.length
    showTabContent(currentTub)
}
setInterval(autoSlider ,2000)


// CONVERTER

const  somInput = document.querySelector('#som')
const  usdInput = document.querySelector('#usd')
const  eurInput = document.querySelector('#eur')
const  aedInput = document.querySelector('#aed')


const converter = (element , targetElement ,targetElement2 , targetElement3 , currentValue) => {
    element.oninput = async () => {
        try {
            const request = await fetch(`../data/converter.json`)
            const response = await request.json()
            switch (currentValue)  {
                case 'som' :
                    targetElement.value = (element.value / response.usd).toFixed(2)
                    targetElement2.value = (element.value / response.eur).toFixed(2)
                    targetElement3.value = (element.value / response.aed).toFixed(2)
                    break
                case 'usd' :
                    targetElement.value = (element.value * response.usd).toFixed(2)
                    targetElement2.value = (element.value / 1.09).toFixed(2)
                    targetElement3.value = (element.value / 0.27).toFixed(2)
                    break
                case 'eur' :
                    targetElement.value = (element.value * response.eur).toFixed(2)
                    targetElement2.value = (element.value / 0.92).toFixed(2)
                    targetElement3.value = (element.value / 0.25).toFixed(2)
                    break
                case 'aed' :
                    targetElement.value = (element.value * response.aed).toFixed(2)
                    targetElement2.value = (element.value / 3.67).toFixed(2)
                    targetElement3.value = (element.value / 4).toFixed(2)
                    break

                default:
                    break
            }
            element.value === '' && (targetElement.value = '')
            element.value === '' && (targetElement2.value = '')
            element.value === '' && (targetElement3.value = '')
        } catch (e) {
            console.log(e)
        }
    }
}

converter (somInput , usdInput , eurInput , aedInput,'som')
converter(usdInput , somInput , eurInput , aedInput,'usd')
converter(eurInput , somInput , usdInput , aedInput,'eur')
converter(aedInput , somInput , usdInput , eurInput,'aed')


// CARD SWITCHER

const card = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')
let count = 1


const cardFetcher = async (id) => {
    try {
        const todos = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const data = await todos.json()
        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
            `
    } catch (e) {
        console.log(e)
    }

}

cardFetcher(count)


btnNext.onclick = () => {
    count++
    if (count > 200) {
        count = 1
    }
    cardFetcher(count)
}

btnPrev.onclick = () => {
    count--
    if (count < 1) {
        count = 200
    }
    cardFetcher(count)
}


// ДЗ №6 PART 2 (отдельный fetch запрос)

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data))



//  WEATHER

const citySearchInput = document.querySelector('.cityName')
const cityName = document.querySelector('.city')
const cityTemp = document.querySelector('.temp')
const URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'
const citySearch = () => {
        citySearchInput.oninput = async (event) => {
            try {
                const link =  await fetch (`${URL}?q=${event.target.value}&appid=${API_KEY}`)
                const response = await link.json()

                cityName.innerHTML =  response.name || 'Город не найден...'
                cityTemp.innerHTML = response?.main?.temp ? `${Math.round(response?.main?.temp - 273) }&deg;C` : '...'
            } catch (e) {
                console.log(e)
            }
        }
}

citySearch()

// OPTIONAL CHAINING = ?.


