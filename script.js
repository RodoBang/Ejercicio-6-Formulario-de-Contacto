// Funcion para validar el formulario
function validarFormulario(event){
    event.preventDefault();
    const nombre = document.getElementById("name").value.trim();
    const correo = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    
    if(!nombre || !correo || !mensaje){
        errorMessage.textContent = 'Por favor, completa todos los campos';
        return
    }
    // Si la validacion pasa, mostrar un mensaje de exito
    errorMessage.textContent = 'Enviado correctamente';
    errorMessage.style.color = 'green';
}

// Agregar el evento submit al formulario
document.getElementById('contactForm').addEventListener('submit', validarFormulario)