const list = document.getElementById('list');

const nuevoelemento = document.createElement('li');

nuevoelemento.textContent='soy el elemento nuevo';


//list.appendChild(nuevoelemento); // inserta el elemento en la ultima fila de la lista

//list.insertBefore(nuevoelemento,list.children[1]);

//list.insertAdjacentElement("beforeend",nuevoelemento);
//list.insertAdjacentElement("afterbegin",nuevoelemento);
//list.insertAdjacentElement("afterend",nuevoelemento);


// reemplazar elemento existente por uno nuevo
//list.replaceChild(nuevoelemento,list.children[0]);

//elimina el hijo en la posicion que se desee
list.removeChild(list.children[1]);