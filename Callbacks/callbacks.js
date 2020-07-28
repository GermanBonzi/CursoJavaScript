//un callback es una funcion que se ejecuta a traves de otra funcion
//los callbacks no son asincronos 
/*
const getUser = (id, cb)=>{
    const user ={
        name:'German',
        id: id
    }

    if (id==2) {cb(err,user);}
    else {cb(null,user); }
}   




getUser(1, (err,user)=>{
    if (err) { return console.log(err);}
    console.log(user.name);
});
*/

const users = [
    {
    name:'German',
    id : 1
   },
   {
    name:'Gonzalo',
    id:2   
   },
   {
    name:'Gaston',
    id:3
   },
   {
    name:'Augusto',
    id:4
   }
]


const emails=[
    {
      id:1,
      email: 'German@gmail.com'  
    },

    {
      id:2,
      email:'Gonzalo@gmail.com'
    },
    {
      id:3,
      email:'Gaston12@gmail.com'
    },

    {
      id:4,
      email:'Augusto32@gmail.com'  
    }
]


//funcion que recorre el array de objetos de usuarios, y la variable user la asigna si encuentra
const getuser = (id,cb)=>{
    const user =  users.find(user=> user.id==id);
    if(user==undefined){
        cb('no existe el usuario'+id);;
    }
    else{cb(null,user);}
}


//funcion getuser, la llamamos y definimos el callback
getuser(5,(err,user)=>{
    if (err){return console.log(err);}
    else{return console.log(user);}
});