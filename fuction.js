document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');
    const backButtons = document.querySelectorAll('.back-button');
    const loginForm = document.getElementById('login-form');
    const pollForm = document.getElementById('poll-form');
    const backToTopButton = document.getElementById('backToTop');

    // Function to show the target page
    function showPage(target) {
        pages.forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(target);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    }

    // Default page (login page)
    showPage('login');

    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'admin' && password === 'password123') {
                window.location.href = 'hub.html'; // Redirect to the hub page
            } else {
                alert('Invalid username or password.');
            }
        });
    }

    // Back-to-top button functionality
    window.addEventListener('scroll', function () {
        backToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
