// efeito de maquina de escrever
// --------------------------------------------------------------------
function initMaquina() {
    function maquina(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
            setTimeout(() => elemento.innerHTML += letra, 75 * i);
        });
    }

    const titulo = document.querySelector('[data-anima="maquina"]');
    maquina(titulo);
}
initMaquina()


// scroll suave
// --------------------------------------------------------------------

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
}
initScrollSuave()


