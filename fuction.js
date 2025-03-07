<!-- script.js - Functionality -->
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const logoutButton = document.getElementById('logout');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username && password) {
                window.location.href = 'hub.html?user=' + encodeURIComponent(username);
            } else {
                alert('Invalid credentials.');
            }
        });
    }
    
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }
});
