const disclaimer = document.querySelector('.disclaimer')
const aboutBoxSection = document.querySelector('.about-box-section')

window.addEventListener('scroll', ()=> {
    const scrollyValue = window.scrollY

    if(scrollyValue >= 222) {
        disclaimer.classList.add('animation')
        aboutBoxSection.classList.add('animation')
    } 
})

const menu = document.querySelector('.fa-bars')
const menuClose = document.querySelector('.fa-xmark')
const menuMobile = document.querySelector('.nav-mobile')
const closeNavBW = window.screenX

menu.addEventListener('click', ()=> {
    menu.classList.remove('active')
    menu.classList.add('hide')
    menuMobile.classList.add('animation')
    menuMobile.classList.remove('fade')
    menuClose.classList.add('active')
})
menuClose.addEventListener('click', ()=> {
    menuClose.classList.remove('active')
    menuClose.classList.add('hide')
    menuMobile.classList.remove('animation')
    menuMobile.classList.add('fade')
    menu.classList.add('active')
})
