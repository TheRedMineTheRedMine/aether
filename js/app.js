// menu dans chaque pages
const header = document.querySelector('header');

const menu_toggler = document.querySelector('.menu_toggler');
const menu_carret_toggler =  menu_toggler.querySelector('i');

const menu = header.querySelector('nav.menu');
const circle_links = document.querySelector('.circle_links');

// dans "home" uniquement
// permet d'afficher les options d'un sujet
const options_toggler = document.querySelector('.result .part1 .parameters');
const options = document.querySelector('.result .part1 .options');

// activer/désactiver le menu
menu_toggler.addEventListener('click', () => {
    if (menu_carret_toggler.classList.contains('fa-bars')) {
        menu.classList.add('active');
        header.classList.add('active');
        circle_links.classList.add('active');

        menu_carret_toggler.classList.replace('fa-bars', 'fa-times');
    } else {
        menu.classList.remove('active');
        header.classList.remove('active');
        circle_links.classList.remove('active');

        menu_carret_toggler.classList.replace('fa-times', 'fa-bars');
    }
});

// options (home)
// document.addEventListener('click', () => {
//     if (options.classList.contains('active')) {
//         options.classList.remove('active');
//     }
// });

options_toggler.addEventListener('click', () => {
    options.classList.toggle('active');
});
