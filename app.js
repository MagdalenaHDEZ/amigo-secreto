// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Lista_amigos = [];

function agregarAmigo() {
// Obtener el elemento input por su ID
    let Nombre_ingresado = document.getElementById("amigo");
// Obtener lo que el usuario escribio en el input
    let nombreDelAmigo = Nombre_ingresado.value;
// Agregar los nombres a la lista
    Lista_amigos.push(nombreDelAmigo);
    console.log("Lista de amigos actual:", Lista_amigos);
    mostrarListaDeAmigos();
}
// Mostar la lista de amigos
function mostrarListaDeAmigos() {
    let mostrar_lista = document.getElementById("listaAmigos"); //  "listaAmigos" en HTML
    if (mostrar_lista) {
      mostrar_lista.innerHTML = "";
      if (Lista_amigos.length > 0) {
        let listaUl = document.createElement("ul");
        Lista_amigos.forEach(amigo => {
          let nuevoLi = document.createElement("li");
          nuevoLi.textContent = amigo;
          listaUl.appendChild(nuevoLi);
        });
        mostrar_lista.appendChild(listaUl);
      } else {
        mostrar_lista.textContent = "Aún no has agregado ningún amigo.";
      }
    }
  }

document.addEventListener('DOMContentLoaded', mostrarListaDeAmigos);


   
  
    



