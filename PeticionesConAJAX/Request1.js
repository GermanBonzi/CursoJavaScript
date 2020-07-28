const button = document.getElementById('button');




button.addEventListener('click', (e)=>{
    let xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest(); //creo el objeto para guardar los datos de la peticion
    }
    else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }   

    xhr.open('GET','https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load',(data)=>{
       const dataJSON = JSON.parse(data.target.response); //JSON.parse convierte en json los datos recibidos
       const list = document.getElementById('list');

        //recorro el objeto dataJSON para colocar los elementos en el html
       for(const datos of dataJSON){
        const listitem=document.createElement('LI');
        listitem.textContent= `${datos.id}- ${datos.name}`;
        list.appendChild(listitem);
        }
    })
   
   
    xhr.send();
})