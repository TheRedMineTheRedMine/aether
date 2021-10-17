const users = document.querySelectorAll('.sort > .member');

[].forEach.call(users, el => {
    el.addEventListener('click', () => {
        window.location.replace('../profil?id=' + el.dataset.id);
    });
});
