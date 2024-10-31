const memberInfo = {
    integrante1: {
        nombre: "Andrey Emanuel Calmo Morales",
        carne: "4490-22-17062",
        descripcion: "Este programador no se actualiza desde que terminó el tutorial de HTML. Habla de JavaScript como si fuera cosa del futuro y se resiste a aprender algo que no sea estrictamente necesario. “¿Para qué un framework si el HTML puro hace lo mismo?” Su sitio web aún usa tablas y GIFs de “En construcción”.",
    },
    // Agregar más integrantes aquí
    integrante2: {
        nombre: "Stiven Amilcar de Jesús González Matias",
        carne: "4490-22-3193",
        descripcion: "Este programador no le teme a Stack Overflow. Su editor tiene más pestañas abiertas que un navegador en modo estudiante en época de exámenes.Para él, el código perfecto es el que compila a la primera… sin importar de dónde vino. ¿Su lema? ¡Si lo copié, es mío!",
    },

    integrante3: {
        nombre: "Ronaldo Alberto Monzón de León",
        carne: "4490-22-6462",
        descripcion: "Este programador vive al filo de la entrega. Su código solo aparece cuando el reloj marca la hora cero y la adrenalina está al máximo. ¿Pruebas? No hay tiempo. ¿Comentarios? ¿Para qué? Pero, milagrosamente, funciona… hasta el próximo bug. Su frase de batalla: “Si compila cinco minutos antes de la demo, está perfecto.”",
    },

    integrante4: {
        nombre: "Josue Fernando Gómez Alonzo",
        carne: "4490-22-8454",
        descripcion: "Ningún bug es demasiado pequeño para su análisis existencial. Puede pasarse horas mirando la pantalla, pensando, “¿Quién soy? ¿Por qué falla mi código?”. Nunca faltan sus frases como “Funciona en mi máquina” o “¿Y si el bug somos nosotros?”. Le gusta más el café que solucionar problemas.",
    }

};

function openModal(memberID) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    const member = memberInfo[memberID];

    modalContent.innerHTML = `
        <h2>${member.nombre}</h2>
        <div class="carne">Carné: ${member.carne}</div>
        <div class="descripcion">${member.descripcion}</div>
    `;

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}