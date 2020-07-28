
class Libro {

    constructor(titulo, autor, anio, genero){
        this.titulo=titulo;
        this.autor=autor;
        this.anio=anio;
        this.genero=['aventuras','terror','fantasia'];
    }

  

}


//pedir 3 libros y guardarlos en un array de objetos
let books = [];
while(books.length<3){
    let tit=prompt('ingrese el titulo del libro');
    let aut= prompt('ingrese el autor del libro');
    let an = parseInt(prompt('ingrese el año del libro'));
    let gen = prompt('ingrese el genero del libro');

    if (tit!='' && aut!='' && an!='' && gen!=''){
        //introduciendo objetos a un array con sus parametros correspondientes
        books.push(new Libro(tit,aut,an,gen));
    }
}
console.log(books)






//

/*

let tit=prompt('ingrese el titulo del libro');
let aut= prompt('ingrese el autor del libro');
let an = parseInt(prompt('ingrese el año del libro'));
let gen = prompt('ingrese el genero del libro');
while((tit=='')||(aut=='')||(an=='')||(gen=='')){
    tit=prompt('dato vacio, por favor ingrese el titulo del libro')
    aut= prompt('ingrese el autor del libro');
    an = parseInt(prompt('ingrese el año del libro'));
    gen = prompt('ingrese el genero del libro');
}


libro=new Libro();

libro.titulo=tit;
libro.autor=aut;
libro.anio=an;
libro.genero=gen;
devolverdatos();*/
