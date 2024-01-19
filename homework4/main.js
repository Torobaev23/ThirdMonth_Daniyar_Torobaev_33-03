// ДЗ № 1

const wrapper = document.querySelector('.wrapper')

const fileJson = new XMLHttpRequest()
fileJson.open('GET', 'persons.json')
fileJson.setRequestHeader("Content-type" ,"application/json")
fileJson.send()

fileJson.addEventListener('load' , () => {
    const valueJson = JSON.parse(fileJson.response)
    valueJson.forEach((person) => {
        const card = document.createElement('div')
        card.setAttribute('class' , 'personCard')
        wrapper.append(card)
        card.innerHTML = `
        <div class="photo">
          <img src="${person.photo}" alt="${person.name}">
        </div>

        <h1>${person.name}</h1>
        <p>magic:${person.magic}</p>
        `
    })
})

// ДЗ № 2

const myGroup = new XMLHttpRequest()
myGroup.open("GET" , "groupmates.json")
myGroup.setRequestHeader("Content_type", "application/json")
myGroup.send()

myGroup.addEventListener('load' , () => {
    const data = JSON.parse(myGroup.response)
    console.log(data)
})































































