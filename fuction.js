document.addEventListener('DOMContentLoaded', function () {
    // Theme Switcher
    const themeButton = document.createElement('button');
    themeButton.innerText = 'Record 🔴';
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

    // Glitch Effect Variables
    let pixelatedGlitchActive = false;
    let backgroundFlickerActive = false;
    let filterGlitchActive = false;
    let textGlitchActive = false;

    // Pixelated Glitch Effect
    let pixelatedGlitchDiv;
    function togglePixelatedGlitch() {
        if (pixelatedGlitchActive) {
            pixelatedGlitchDiv.remove();
        } else {
            pixelatedGlitchDiv = document.createElement("div");
            pixelatedGlitchDiv.style.position = "fixed";
            pixelatedGlitchDiv.style.top = "0";
            pixelatedGlitchDiv.style.left = "0";
            pixelatedGlitchDiv.style.width = "100%";
            pixelatedGlitchDiv.style.height = "100%";
            pixelatedGlitchDiv.style.pointerEvents = "none";
            pixelatedGlitchDiv.style.backgroundImage = "url('https://www.transparenttextures.com/patterns/black-linen.png')";
            pixelatedGlitchDiv.style.backgroundSize = "20px 20px";
            pixelatedGlitchDiv.style.animation = "pixelate 0.2s infinite";
            document.body.appendChild(pixelatedGlitchDiv);
        }
        pixelatedGlitchActive = !pixelatedGlitchActive;
    }

    // Background Flicker Effect
    let backgroundFlickerInterval;
    function toggleBackgroundFlicker() {
        if (backgroundFlickerActive) {
            clearInterval(backgroundFlickerInterval);
        } else {
            backgroundFlickerInterval = setInterval(() => {
                document.body.style.backgroundColor = randomColor();
            }, 100); // Change every 100ms
        }
        backgroundFlickerActive = !backgroundFlickerActive;
    }

    function randomColor() {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }

    // Glitching Text Effect
    function toggleTextGlitch() {
        const elements = document.querySelectorAll('.glitch-text');
        elements.forEach(element => {
            if (textGlitchActive) {
                element.classList.remove('glitching-text');
            } else {
                element.classList.add('glitching-text');
            }
        });
        textGlitchActive = !textGlitchActive;
    }

    // Glitching Filter Effect
    function toggleFilterGlitch() {
        if (filterGlitchActive) {
            document.body.style.filter = ''; // Reset the filter
        } else {
            document.body.style.filter = 'blur(3px) saturate(1.2) contrast(1.5)';
            document.body.style.transition = 'filter 0.1s ease';
        }
        filterGlitchActive = !filterGlitchActive;
    }

    // Shaking Glitch Effect (on theme button and other elements)
    function toggleShakingGlitch() {
        // Apply shaking glitch to multiple elements
        const elementsToShake = [themeButton, document.body, document.querySelector('header'), document.querySelector('.hub-container')];
        elementsToShake.forEach(element => {
            if (element) {
                element.classList.toggle('shake-glitch');
            }
        });
    }

    themeButton.addEventListener('click', function () {
        darkMode = !darkMode;
        
        // Apply new glitch effect
        document.body.classList.add('glitch-new'); // Add glitch effect to body
        // Remove glitch effect after animation completes (0.6s)
        setTimeout(() => {
            document.body.classList.remove('glitch-new'); // Remove glitch effect
        }, 600); // Time must match the glitch animation duration

        // Apply shake effect to the theme button and other elements
        themeButton.classList.add('shake');
        setTimeout(() => {
            themeButton.classList.remove('shake');
        }, 500); // Time must match the shake animation duration

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

        // Toggle all glitch effects
        togglePixelatedGlitch();
        toggleBackgroundFlicker();
        toggleTextGlitch();
        toggleFilterGlitch();
        toggleShakingGlitch(); // Add the shaking glitch to multiple elements
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
        "Why do you always talk so much? It's annoying. 🙉",
        "Your art is amazing! Keep going! 🎨",
        "Your sense of humor is on point! 😂",
        "I just don't see why anyone would follow you, sorry. 🤷‍♀️ ",
        "More collaborations with other VTubers, please! 🤝",
        "Your streams are so predictable, it's boring. 💤",
        "Are you ever going to stream during the day? 🌞",
        "Can you please stop playing the same game every day? 🙄🎮",
        "This stream is just a waste of time, no quality here. 🕒🚫",
        "Are you even trying? This content is awful. 😕",
        "Why do you even bother streaming? You're not good at this. 🙄",
        "I don't get the hype, your content is overrated. 🤷‍♂️",
        "You're not funny at all, maybe try harder. 😒",
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

    // Floating Stickers (added at end)
    const stickerContainer = document.createElement('div');
    stickerContainer.className = 'sticker-container';
    document.body.appendChild(stickerContainer);

    const NUM_STICKERS = 30;
    const STICKER_SRC = 'cute.png'; // Replace with your actual image path

    for (let i = 0; i < NUM_STICKERS; i++) {
        const sticker = document.createElement('img');
        sticker.src = STICKER_SRC;
        sticker.classList.add('floating-sticker');
        sticker.style.left = `${Math.random() * 100}%`;
        sticker.style.animationDelay = `${Math.random() * 10}s`;
        sticker.style.animationDuration = `${10 + Math.random() * 10}s`;
        stickerContainer.appendChild(sticker);
    }
});
