const topics = document.querySelectorAll('.results > .result .re_title');
const box = document.querySelector('.box_newDiscuss');
const options_toggler = document.querySelector('.result .part1 .parameters');
const options = document.querySelector('.result .part1 .options');

[].forEach.call(topics, el => {
    el.addEventListener('click', () => {
        window.location.replace(("../topics?q=" + el.dataset.id))
    })
});

document.querySelector('.pages .text').addEventListener('click', () => { box.classList.add('active') });
box.querySelector('.fa-times').addEventListener('click', () => { box.classList.remove('active') });


// options (home)
// document.addEventListener('click', () => {
//     if (options.classList.contains('active')) {
//         options.classList.remove('active');
//     }
// });

options_toggler.addEventListener('click', () => {
    options.classList.toggle('active');
});
