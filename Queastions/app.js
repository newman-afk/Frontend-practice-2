const questions = document.querySelectorAll('.question')

questions.forEach(function (question) {
    question.querySelector('.question-btn').addEventListener('click', function () {
        questions.forEach(function (item) {
            if (item != question)
                item.classList.remove('show-text')
        })
        question.classList.toggle('show-text')
    })
})

// const questionsBtn = document.querySelectorAll('.question-btn')

// questionsBtn.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         let question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     })
// })