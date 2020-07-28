const button = document.getElementById('button');

const persona ={
    nombre: 'javier',
    edad: 25,
    email: 'gbonzi716@gmail.com'

}



/* OBJETO WINDOW -  ES EL OBJETO GLOBAL, DE EL DESCIENDEN TODOS 
   ALERT()
   PROMPT()
   CONFIRM()  
   
   */

    //alert('hola soy un alert');
    //prompt('inserte los datos');
    //confirm('desea confirmar?');



/* OBJETO CONSOLE -  ES EL OBJETO QUE CONTIENE LA CONSOLA DEL NAVEGADOR

     console.log()
     console.dir()
     console.error()
     console.table()                            */


 //muestra en forma de tabla el objeto 
 //console.table(persona);

  /* OBJETO LOCATION - ES EL OBJETO QUE CONTIENE LA BARRA DE DIRECCIONES
  
  
     https://developer.mozilla.org/es/docs/web/API/location
     
     location.href
     location.protocol
     location.host
     location.pathname
     location.hash
     location.reload*/

console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.hash);

//location.href='www.google.com';



