
function maquina(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }


  const titulo = document.querySelector('[data-anima="maquina"]');
  maquina(titulo);