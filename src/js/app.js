const mobileBtn = document.querySelector('[data-mobile-btn]')
const headerNav = document.querySelector('[data-header-nav]')
const closeBtn = document.querySelector('[data-close-btn]')
mobileBtn.addEventListener('click', () => {
    headerNav.classList.add('active')
    // mobileBtn.classList.toggle('active')
    document.body.classList.toggle('no-scroll')
})
closeBtn.addEventListener('click', () => {
    headerNav.classList.remove('active')
    document.body.classList.remove('no-scroll')
})