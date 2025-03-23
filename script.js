// Sélectionner tous les éléments avec la classe "has-submenu"
const menuItems = document.querySelectorAll('.left-menu .has-submenu');

// Ajouter un écouteur d'événements pour chaque élément
menuItems.forEach((menuItem) => {
    const submenu = menuItem.querySelector('.submenu');

    // Au survol de l'élément parent
    menuItem.addEventListener('mouseenter', () => {
        submenu.classList.add('active'); // Ajouter la classe "active"
    });

    // Quand la souris quitte l'élément parent
    menuItem.addEventListener('mouseleave', () => {
        submenu.classList.remove('active'); // Retirer la classe "active"
    });
});
