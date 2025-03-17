// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Lista_amigos = [];
let ultimoAmigoSorteado = null; // Variable para guardar el último amigo sorteado

function agregarAmigo() {
// Obtener el elemento input por su ID
    let Nombre_ingresado = document.getElementById("amigo");
// Obtener lo que el usuario escribio en el input
    let nombreDelAmigo = Nombre_ingresado.value;

//validación de datos ...si el campo está vacío
if (nombreDelAmigo === "") {
  alert("Por favor inserte un nombre");
  return; // Detiene la función si el nombre está vacío
}
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

function sortearAmigo() {

  let indiceAleatorio;
  let amigoSecreto;

  // Intentar seleccionar un amigo diferente al último sorteado (hasta 10 intentos para evitar bucles infinitos)
  for (let i = 0; i < 10; i++) {
    indiceAleatorio = Math.floor(Math.random() * Lista_amigos.length);
    amigoSecreto = Lista_amigos[indiceAleatorio];
    if (amigoSecreto !== ultimoAmigoSorteado) {
      break; // Encontramos un amigo diferente
    }
    // Si después de varios intentos no se encuentra uno diferente, se selecciona uno al azar de todas formas
    if (i === 9) {
      indiceAleatorio = Math.floor(Math.random() * Lista_amigos.length);
      amigoSecreto = Lista_amigos[indiceAleatorio];
    }
  }

  ultimoAmigoSorteado = amigoSecreto; // Actualizar el último amigo sorteado
  mostrarResultadoSorteo(amigoSecreto);
}


function mostrarResultadoSorteo(amigo) {
  const resultadoDiv = document.getElementById("resultado");  
  if (resultadoDiv) {
    resultadoDiv.innerHTML = ""; // Limpiar resultados anteriores
    const mensaje = document.createElement("p");
    mensaje.textContent = `¡El amigo secreto seleccionado es: ${amigo}!`;
    resultadoDiv.appendChild(mensaje);
  }
}


   
  
    



