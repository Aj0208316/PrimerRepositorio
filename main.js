document.addEventListener('DOMContentLoaded', function() {
    const menuBurger = document.getElementById('menu_burger');
    const ulLinks = document.querySelector('.ul_links');

    // Función para cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!menuBurger.contains(event.target) && !ulLinks.contains(event.target) && menuBurger.checked) {
            menuBurger.checked = false;
        }
    });

    // Opcional: Cerrar el menú al hacer clic en un enlace
    const enlacesMenu = document.querySelectorAll('.ul_links a');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function() {
            menuBurger.checked = false;
        });
    });
});