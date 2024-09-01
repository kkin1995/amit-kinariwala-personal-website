// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initBackToTop();
    initNavbarTracking();
    initContactButton();
    
    // Other general page functionality can go here
});

function initBackToTop() {
    var backToTopButton = document.getElementById("back-to-top");

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.addEventListener("click", function(){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        
        // Google Analytics event tracking
        trackEvent('engagement', 'Back to Top Button Clicked');
    });
}

function initNavbarTracking() {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            var linkText = this.textContent;
            trackEvent('engagement', 'Navbar Link: ' + linkText);
        });
    });
}

function initContactButton() {
    var contactButton = document.getElementById('contact-button');
    var displayEmail = document.getElementById('display-email');
    
    function decodeEmail(encodedEmail) {
        return encodedEmail.split('').reverse().join('');
    }
    
    var encodedEmail = 'moc.alawiranik@tima';
    var decodedEmail = decodeEmail(encodedEmail);
    
    if (displayEmail) {
        displayEmail.textContent = decodedEmail;
    }
    
    if (contactButton) {
        contactButton.addEventListener('click', function(e) {
            e.preventDefault();
            var mailtoLink = 'mailto:' + decodedEmail;
            // Google Analytics event tracking
            trackEvent('engagement', 'Contact Button Clicked');
            window.open(mailtoLink, '_blank');
        });
    } else {
        console.error('Contact button not found');
    }
}