const preloader = document.querySelector('.preloader')
const switchBtn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')
// preloader
window.addEventListener('load', function () {
    preloader.classList.add('hide-preloader')
})

// switch
switchBtn.addEventListener('click', function () {
    if(switchBtn.classList.contains('slide')){
        switchBtn.classList.remove('slide')
        video.play()
    }else{
        switchBtn.classList.add('slide')
        video.pause()
    }
})