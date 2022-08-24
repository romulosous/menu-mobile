const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    event.currentTarget.setAttribute('aria-label', active ? 'Fechar Menu' : 'Abrir menu')
}
btnMobile.addEventListener('click', toggleMenu)