

const input = document.getElementById('input');
const form = document.getElementById('form');
const button = document.getElementById('button')


//input.addEventListener('keyup', (e)=>{
    //console.log(e);
    //console.log(e.key); /*muestra la letra que se esta pulsando en el input*/
    //console.log(e.explicitOriginalTarget.attributes[0].nodeValue) /* se utiliza para trabajar
    //con apis, para acceder a los valores que nos devuelve la api que consultamos */ 
//})


/*button.addEventListener('click',(e)=>{
    console.log(e.target);
})*/

const gallery = document.getElementById('gallery');

/*gallery.addEventListener('click',(e)=>{
    console.log(e.target.textContent); //localiza el numero que estamos clickeando de los 9 divs
})
*/


const link = document.getElementById('link');
link.addEventListener('click',(e)=>{
    e.preventDefault();
    button.click();

})
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("el formulario se ha enviado");
})

button.addEventListener('click',(e)=>{
    input.value='has hecho click';
})