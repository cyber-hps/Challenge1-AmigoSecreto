// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo(){
    //Capturar input
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); //.trim() se encarga de borrar los espacios que pudieran estar antes o despues del nombre
    console.log(nombre);

    //Validar que el input no este vacio
    if (nombre === ""){
        alert("Por favor, ingresa un nombre valido");
        return; //Aqui se sale de la funcion si no es valido
    }

    //Para agregar a la lista
    listaAmigos.push(nombre);

    //Para limpiar la barra de input
    input.value = "";
    input.focus(); //Para que el cursor se localice automaticamente

    //Llamar a la otra funcion que creamos para agregar el nombre a nuestra pagina
    renderLista();
    
}

function renderLista(){
    //Primeo seleccionamos el <ul> dinde mostraremos los nombres
    //<ul> unordered list, y dentro de esta lista se colocan varios <li> list items
    //https://www.youtube.com/watch?v=OJAAvRjYZyM Video explicanto <ul>, <ol> y <dt>
    let listaHTML = document.getElementById("listaAmigos");
    

    //Se limpia cualquier contenido previo
    listaHTML.innerHTML = ""; //Con .innerHTML se cambia el contenido

    listaAmigos.forEach(function(nombre){
        let li = document.createElement("li"); //Creamos un <li>
        li.textContent = nombre;               //Asignamos el nombre
        listaHTML.appendChild(li);             //Lo agregamos al <ul>
    });
};

function sortearAmigo(){
    let resultadoHTML = document.getElementById("resultado");

    //Validamos que haya nombres en la lista
    if(listaAmigos.length === 0){
        alert("No hay nombres para sortear. Agrega al menos uno");
        return;
    }
    
    //Elegimos un indice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAleatorio];

    //Mostramos el resultado en pantalla
    resultadoHTML.textContent = `El amigo secreto es ${amigoSecreto}`;
}
