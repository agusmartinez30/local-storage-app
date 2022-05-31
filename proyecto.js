const formulario = document.getElementById("formulario")
const listadoTw = document.querySelector(".lista-tw")

let tweets = []

eventListeners()

function eventListeners(){

    // agregar nuevos tweets
    formulario.addEventListener("submit", agregarTweet)

    // mostrar cuando cargue el documento
     document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem("tweets")) || [];
        console.log(tweets);

        mostrarTweets()
    }) 
}

function agregarTweet (e){
    e.preventDefault()

    // validar formulario

    // obtener el valor del textarea
    const tweet = document.getElementById("tweet").value;

    if(tweet.trim() == ""){
        mostrarError("error campos vacios");
        return
    }

    console.log("tweet agregado!");

    const tweetObj = {
        id: Date.now(),
        text : tweet
    }
    // agregando tweets a la lista
    tweets = [...tweets,tweetObj ]

    mostrarTweets()
    /* console.log(tweets); */
    formulario.reset()
  

}

// mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;

    const UIerror = document.querySelector('.error');
    UIerror.appendChild(mensajeError)

    setTimeout(()=>{
        mensajeError.remove()
    },3000)

}

function mostrarTweets(){

    limpiarHTML()

    if(tweets.length > 0){
        tweets.forEach( tweet => {

            // crear un boton eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.innerText = "X"

            // funcion eliminar tw
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id)
            };

            // crear el html
            const li = document.createElement('li');

            // añadir html
            li.innerText = tweet.text

            // AÑADIR EL BOTON
            li.appendChild(btnEliminar)

            // insertar a la lista
            listadoTw.appendChild(li)

            
        } )

    }

    sincronizarHTML()
}

// agregar los tweets al LocalStorage
function sincronizarHTML(){
    localStorage.setItem('tweets', JSON.stringify(tweets))
}
function borrarTweet(id){
    tweets = tweets.filter( tw => tw.id != id)
    console.log(tweets);
    mostrarTweets()

}

// Limpiar el HTML
function limpiarHTML(){
    while( listadoTw.firstChild ){
        listadoTw.removeChild(listadoTw.firstChild)
    }
}