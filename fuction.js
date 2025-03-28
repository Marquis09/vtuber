document.addEventListener('DOMContentLoaded', function () {
    // Theme Switcher
    const themeButton = document.createElement('button');
    themeButton.innerText = 'Switch Theme';
    themeButton.id = 'theme-switcher';
    themeButton.style.position = 'fixed';
    themeButton.style.top = '20px';
    themeButton.style.right = '20px';
    themeButton.style.padding = '10px';
    themeButton.style.borderRadius = '8px';
    themeButton.style.border = 'none';
    themeButton.style.cursor = 'pointer';
    themeButton.style.fontSize = '1rem';
    themeButton.style.background = '#75497A';
    themeButton.style.color = '#fff';
    document.body.appendChild(themeButton);

    let darkMode = false;
    const colors = ["#855A7D", "#A69282", "#75497A", "#584139", "#242232"];
    
    themeButton.addEventListener('click', function () {
        darkMode = !darkMode;
        
        // Apply new glitch effect
        document.body.classList.add('glitch-new'); // Add glitch effect to body
        
        // Remove glitch effect after animation completes (0.6s)
        setTimeout(() => {
            document.body.classList.remove('glitch-new'); // Remove glitch effect
        }, 600); // Time must match the glitch animation duration

        document.body.classList.toggle('glitch-mode', darkMode);
        if (darkMode) {
            document.body.style.background = colors[4];
            document.body.style.color = colors[1];
            document.querySelector('header').style.background = colors[3];
            document.querySelector('.hub-container').style.background = colors[2];
            document.querySelectorAll('.grid-item').forEach(item => {
                item.style.background = colors[0];
                item.style.color = '#fff';
            });
        } else {
            document.body.style.background = '';
            document.body.style.color = '';
            document.querySelector('header').style.background = '';
            document.querySelector('.hub-container').style.background = '';
            document.querySelectorAll('.grid-item').forEach(item => {
                item.style.background = '';
                item.style.color = '';
            });
        }
    });

    // Existing Code...
    
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (!username || !password) {
                alert('Both fields are required.');
                return;
            }
            const usernamePattern = /^[a-zA-Z0-9_]+$/;
            if (!usernamePattern.test(username)) {
                alert('Username must be alphanumeric.');
                return;
            }
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }
            window.location.href = 'hub.html?user=' + encodeURIComponent(username);
        });
    }

    const commentSection = document.getElementById('comment-section');
    const submitButton = document.getElementById('submit-comment');
    const commentInput = document.getElementById('new-comment');

    const fakeUsernames = ["VTuberFan101", "AnonymousGamer", "PixelatedDream", "StreamerProX", "User_Zero"];
    const sampleComments = [
        "You're doing amazing! 😄",
    "I love your streams! Keep it up! 🌟",
    "What games are next? 😊",
    "I can’t get enough of your content! 🔥",
    "Your streams make my day better! 💖",
    "Your energy is contagious, love it! 🙌",
    "More cat content, please! 🐱",
    "Can you do a Q&A session soon? 🤔",
    "Your art is amazing! Keep going! 🎨",
    "Your sense of humor is on point! 😂",
    "This is the content I needed today. Thank you! 🌈",
    "More collaborations with other VTubers, please! 🤝",
    "Loved the recent game choice, more of that! 🎮",
    "Are you ever going to stream during the day? 🌞",
    "I’ve been following you since your first stream, keep it up! 👏",
    "You’re my new favorite VTuber! 🏆",
    "The vibe today was perfect, really calming. ✨",
    "I’m here for the lore and story, love it! 📖",
    "This stream is the highlight of my week! 🎉",
    "I think your streams could be a bit more interactive. 💬",
    
    // Negative (Bad) Comments
    "The quality is terrible today. 😡",
    "Can you stop talking so much? It's annoying. 🙄",
    "I expected more from this stream... 😔",
    "The audio is awful, can't hear anything clearly. 🎧",
    "You missed so many good moments in the game. 🤦‍♂️",
    "This was a waste of time. I’m leaving. 👋",
    "Can you play something other than this? This is painful. 😫",
    "Why is everything so laggy? 😩",
    "Your mic keeps cutting out... Can you fix it? 🎤",
    "Not sure why people like this, it's so uninteresting. 😒",
    "The pacing is so slow, I almost fell asleep. 😴",
    "Can you improve your gameplay, it’s frustrating to watch. 😬",
    "I don’t get the hype around your streams. 🤔",
    "This is the worst content I've ever seen. 😡",
    "Your energy today is so off. 😕",
    "Not impressed, you could do so much better. 😔",
    "Why do you keep making the same mistakes? It's annoying. 😑",
    "This game is so outdated, why are you still playing it? 😕",
    "You need to interact with the chat more, it feels so one-sided. 👎"

    ];
    let commentIndex = 0;

    // Glitch effect for the comment input box
    commentInput.addEventListener('focus', function() {
        commentInput.classList.add('glitch');
    });
    commentInput.addEventListener('blur', function() {
        commentInput.classList.remove('glitch');
    });

    // Function to add a comment with fade-out effect
    function addComment(text) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        const fakeUsername = fakeUsernames[Math.floor(Math.random() * fakeUsernames.length)];
        commentDiv.innerHTML = `<strong>${fakeUsername}:</strong> ${text}`;
        commentSection.appendChild(commentDiv);
        commentIndex++;

        // Fade in
        commentDiv.style.opacity = 0;
        setTimeout(() => {
            commentDiv.style.transition = "opacity 1s ease";
            commentDiv.style.opacity = 1;
        }, 0);

        // Fade out after 5 seconds
        setTimeout(() => {
            commentDiv.style.transition = "opacity 1s ease";
            commentDiv.style.opacity = 0;
            setTimeout(() => { commentDiv.remove(); }, 1000);
        }, 5000);
    }

    // Add sample comments (good and bad) one by one
    sampleComments.forEach((comment, idx) => {
        setTimeout(() => addComment(comment), idx * 2000); // Add each comment with a 2-second delay
    });

    // Handling the user login in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const user = urlParams.get('user');
    if (user) {
        const welcomeMessage = document.getElementById('welcome-message');
        if (welcomeMessage) {
            welcomeMessage.innerText = `Welcome, ${user}!`;
        }
    }

    // Logout button event
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }
});
