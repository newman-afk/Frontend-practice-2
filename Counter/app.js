// set initial count
let count = 0

// select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList
        switch (true) {
            case styles.contains('decrease'):
                count--
                break
            case styles.contains('increase'):
                count++
                break
            default:
                count = 0
                break
        }
        switch (true) {
            case count < 0:
                value.style.color = 'red'
                break
            case count > 0:
                value.style.color = 'green'
                break
            default:
                value.style.color = 'black'
                break
        }
        value.textContent = count
    })
})