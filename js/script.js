
// efeito de maquina de escrever
// --------------------------------------------------------------------

function maquina(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }

  const titulo = document.querySelector('[data-anima="maquina"]');
  maquina(titulo);


// scroll suave
// --------------------------------------------------------------------

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    // section.scrollIntoView()



    const topo = section.offsetTop;
    window.scrollTo({
        top: topo,
        behavior: 'smooth'
    })
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
})




