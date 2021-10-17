[].forEach.call(users, el => {
    el.addEventListener('click', () => {
        window.location.replace('../profil?id=' + el.dataset.id);
    });
});
