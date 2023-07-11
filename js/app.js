// Se crea una instancia de IntersectionObserver para iterar sobre los elementos
// y poder agregar una clase de animación
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        // console.log(entrada);
        // Si solo se quiere que aparezca una sola vez hacerlo solo con un if si no agregar un else
        if(entrada.isIntersecting){
            entrada.target.classList.add('show');
        }else{
            entrada.target.classList.remove('show');
        }
    })
});

// Selecciona los elementos que tienen la clase especial .hidden para identicar los que se quieren animar
const elementosOcultos = document.querySelectorAll('.hidden');

// Itera sobre los elementos seleccionados y mandar llamar la funcion de observer declarada arriba
elementosOcultos.forEach((elemento) => {
    observador.observe(elemento)
});
/*-------------------------------------------------------------------------------------------*/
const icon_ham = document.querySelector('#icon-ham');
const menu_mobile = document.querySelector('#menu-mobile');

icon_ham.addEventListener('click', () => {
    document.body.classList.toggle('notScroll');
    menu_mobile.classList.toggle('menu-mobile--active');
})