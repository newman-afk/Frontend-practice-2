let modalBtn = document.querySelector('.modal-btn')
let closeBtn = document.querySelector('.close-btn')

let modalOverlay = document.querySelector('.modal-overlay')

modalBtn.addEventListener('click', function () {
    modalOverlay.classList.add('open-modal')
})

closeBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('open-modal')
})