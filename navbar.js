document.addEventListener('DOMContentLoaded', function() {
    // Get the navbar toggler button
    var navbarToggler = document.getElementById('navbar-toggler');
    
    // Add event listener to toggle collapse state of navbar when clicked
    navbarToggler.addEventListener('click', function() {
        var navbarNav = document.getElementById('navbarNav');
        navbarNav.classList.toggle('show');
    });
});