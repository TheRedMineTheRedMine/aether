const menu_toggler = document.querySelector('.menu_toggler');
const menu_carret_toggler =  menu_toggler.querySelector('i');
const menu = document.querySelector('nav.menu');

menu_toggler.addEventListener('click', () => {
    if (menu_carret_toggler.classList.contains('fa-bars')) {
        menu.classList.add('active');
        document.querySelector('header').classList.add('active');
        menu_carret_toggler.classList.replace('fa-bars', 'fa-times');
    } else {
        menu.classList.remove('active');
        document.querySelector('header').classList.remove('active');
        menu_carret_toggler.classList.replace('fa-times', 'fa-bars');
    }
});

menu_toggler.click();
