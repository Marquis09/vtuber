document.addEventListener('DOMContentLoaded', function () {
    // Login Page Script
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form from submitting the default way
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple validation for the inputs
            if (!username || !password) {
                alert('Both fields are required.');
                return;
            }

            // Example additional validation (username alphanumeric and password length)
            const usernamePattern = /^[a-zA-Z0-9_]+$/;
            if (!usernamePattern.test(username)) {
                alert('Username must be alphanumeric.');
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }
            
            // If valid, redirect to the hub page with the username as a URL parameter
            window.location.href = 'hub.html?user=' + encodeURIComponent(username);
        });
    }

    // Hub Page Script (Handles comments and glitch effects)
    const commentSection = document.getElementById('comment-section');
    const submitButton = document.getElementById('submit-comment');
    const commentInput = document.getElementById('new-comment');

    const fakeUsernames = [
        "VTuberFan101",
        "AnonymousGamer",
        "PixelatedDream",
        "StreamerProX",
        "User_Zero",
        "TheRealDeal",
        "VirtualVibe",
        "GameMaster23",
        "ArtisticVibes",
        "FakeUser45"
    ];

    const sampleComments = [
        "You're doing amazing! Keep it up!",
        "I love your streams, you're so fun!",
        "What games are you playing next? 😊",
        "Are you planning on doing a face reveal?",
        "Why do you hide your face? You must be ugly.",
        "Why don't you show your real self? So fake.",
        "You can't keep up the act forever, can you?",
        "We all know you're not real. Stop hiding.",
        "It must be hard pretending to be someone else all the time, huh?",
        "You think we don't know? The truth will come out soon."
    ];

    let commentIndex = 0;

    // Add new comment dynamically with random fake usernames
    function addComment(text) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        
        // Assign a random fake username from the list
        const fakeUsername = fakeUsernames[Math.floor(Math.random() * fakeUsernames.length)];

        // Randomly apply the glitch effect to the comment when bad comments start
        if (commentIndex > 4) {
            commentDiv.classList.add('glitch', 'darker');
            commentDiv.setAttribute('data-text', text); // glitch effect data
        }

        // Add fake username and comment text to the comment
        commentDiv.innerHTML = `<strong>${fakeUsername}:</strong> ${text}`;

        commentSection.appendChild(commentDiv);
        commentIndex++;

        // Make the comment disappear after 5 seconds
        setTimeout(() => {
            commentDiv.style.opacity = 0;
            setTimeout(() => {
                commentDiv.remove();
            }, 1000); // Wait for 1 second before removing the element completely
        }, 5000); // Comment disappears after 5 seconds
    }

    // Add initial innocent comments
    sampleComments.slice(0, 3).forEach(comment => addComment(comment));

    // Set interval for adding new comments, simulating progression
    let intervalId = setInterval(() => {
        if (commentIndex < sampleComments.length) {
            addComment(sampleComments[commentIndex]);
        } else {
            clearInterval(intervalId);
        }
    }, 2000); // 2-second delay between comments

    // Hub Page - Handle username extraction and welcome message
    const urlParams = new URLSearchParams(window.location.search);
    const user = urlParams.get('user');

    if (user) {
        // Optionally, you can display the username on the page
        const welcomeMessage = document.getElementById('welcome-message');
        if (welcomeMessage) {
            welcomeMessage.innerText = `Welcome, ${user}!`;
        }
    }

    // Logout Button - Redirect back to login page
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            // Redirect to the login page
            window.location.href = 'index.html';
        });
    }
});
