const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const contents = document.querySelectorAll(".content")

// about.addEventListener('click', function (e) {
//     const id = e.target.dataset.id
//     if (id) {
//         btns.forEach(function (btn) {
//             btn.classList.remove('active')
//         })
//         contents.forEach((content) => {
//             content.classList.remove('active')
//         })
//         e.target.classList.add('active')
//         const element = document.getElementById(id)
//         element.classList.add('active')
//     }
// })

btns.forEach((btn) => {
    btn.addEventListener('click', function () {
        btns.forEach((e) => {
            e.classList.remove('active')
        })
        contents.forEach((content) => {
            content.classList.remove('active')
        })
        btn.classList.add('active')
        const element = document.getElementById(btn.dataset.id)
        element.classList.add('active')
    })
})