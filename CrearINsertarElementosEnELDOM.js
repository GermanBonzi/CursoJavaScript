const days = ['lunes', 'martes','miercoles','jueves','viernes',
                'sabado', 'domingo'];

const title = document.getElementById('title');
const dayslist=document.getElementById('daylist');
const select = document.getElementById('daysSelect');


/* crear un elemento: documen.createElement(element)
    Escribir texto en un elemento: element.textContent=texto
    Escribir HTML en un elemento: element.innerHTML= codigo HTML
    
    
    Añadir un elemento al DOM: parent.appendChild(element)
    
    fragmentos de codigo: document.createDocumentFragment()
    
    
    */

//const itemList = document.createElement('LI');

//itemList.textContent='LUNES';

//console.log(itemList);

//dayslist.appendChild(itemList);

title.innerHTML='<span>DOM - crear e insertar elementos I</span> ';

// INYECTANDO EL CONTENIDO DEL ARRAY DENTRO DEL HTML Y EL DOM

const fragment = document.createDocumentFragment();
/*
for(const day of days){
    const itemList = document.createElement('LI');
    itemList.textContent=  day;
    fragment.appendChild(itemList);
}
*/

for(const dias of days){
    const itemselect= document.createElement('OPTION');
    itemselect.setAttribute('value',dias);
    itemselect.textContent=dias;
    fragment.appendChild(itemselect);
}


//dayslist.appendChild(fragment);
select.appendChild(fragment);


