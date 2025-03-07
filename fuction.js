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

    // Set default page (login page)
    showPage('login'); // Ensure that we start at the login page

    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form from submitting normally
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Validate login
            if (username === 'admin' && password === 'password123') {
                // Immediately show the hub page
                showPage('hub'); // No need to redirect to another page, simply switch to the hub page
            } else {
                alert('Invalid username or password.'); // Show alert if login fails
            }
        });
    }

    // Navigation link event
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const target = this.getAttribute('data-target');
            showPage(target); // Show the target page
        });
    });

    // Back button event
    backButtons.forEach(button => {
        button.addEventListener('click', function () {
            showPage('hub');
        });
    });

    // Poll form submission
    if (pollForm) {
        pollForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission
            const selectedOption = document.querySelector('input[name="poll"]:checked');
            if (selectedOption) {
                alert(`You voted for: ${selectedOption.value}`);
            } else {
                alert('Please select an option before submitting.');
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
