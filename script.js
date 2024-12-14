document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburg');
    const cancel = document.querySelector('.cancel');
    const dropdown = document.querySelector('.dropdown');

    hamburger.addEventListener('click', function() {
        dropdown.style.transform = 'translateY(0px)';
        hamburger.style.opacity = '0';
        cancel.style.opacity = '1';
        cancel.style.pointerEvents = 'auto';
    });

    cancel.addEventListener('click', function() {
        dropdown.style.transform = 'translateY(-500px)';
        hamburger.style.opacity = '1';
        cancel.style.opacity = '0';
        cancel.style.pointerEvents = 'none';
    });
});
