// MODAL

const modal = document.querySelector('.modal')
const modalTriggerButton = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'

}

modalTriggerButton.onclick = () => {
    openModal()
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
    window.removeEventListener("scroll", scrollTop);
}

closeModalButton.onclick = () => {
    closeModal()
}

modal.onclick = (event) => {
    if (event.target === modal ) {
        closeModal()
    }
}

setTimeout(() => {
    openModal()
}, 10000 )



const scrollTop = () => {
    if(window.scrollY+1 >= document.documentElement.scrollHeight-document.documentElement.clientHeight)  {
        openModal();
    }
}

window.addEventListener("scroll", scrollTop);



