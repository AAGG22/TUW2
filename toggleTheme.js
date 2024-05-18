

document.getElementById('label_toggle').addEventListener('click', function() {
    const htmlElement = document.documentElement; // Esto selecciona la etiqueta <html>
    
    if (htmlElement.hasAttribute('data-bs-theme')) {
        htmlElement.removeAttribute('data-bs-theme'); // Quita el atributo para volver a modo claro
    } else {
        htmlElement.setAttribute('data-bs-theme', 'dark'); // Añade el atributo para activar modo oscuro
    }
});
