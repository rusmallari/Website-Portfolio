document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburg');
    const cancel = document.querySelector('.cancel');
    const dropdown = document.querySelector('.dropdown');
    
    hamburger.addEventListener('click', function() {
        dropdown.style.display = 'block'; // Show the dropdown
        hamburger.style.opacity = '0'; // Hide hamburger
        cancel.style.opacity = '1'; // Show cancel button
        cancel.style.pointerEvents = 'visible'; // Enable cancel button
    });

    cancel.addEventListener('click', function() {
        dropdown.style.display = 'none'; // Hide the dropdown
        hamburger.style.opacity = '1'; // Show hamburger again
        cancel.style.opacity = '0'; // Hide cancel button
        cancel.style.pointerEvents = 'none'; // Disable cancel button
    });
});