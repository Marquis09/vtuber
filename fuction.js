document.addEventListener('DOMContentLoaded', function() {
    // Initial Setup: Activate the landing page
    let currentPage = '#landing';
    document.querySelector(currentPage).classList.add('active');

    // Smooth transitions between pages
    const pageLinks = document.querySelectorAll('.page-link');
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Hide current page
            document.querySelector(currentPage).classList.remove('active');

            // Show new page
            currentPage = e.target.getAttribute('href');
            document.querySelector(currentPage).classList.add('active');
        });
    });

    // Unlock hidden content after certain interaction
    setTimeout(() => {
        document.getElementById('hidden-content').classList.remove('hidden');
    }, 5000); // Trigger hidden content after 5 seconds for effect
});
