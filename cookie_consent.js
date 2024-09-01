// cookie-consent.js
function initCookieConsent() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function checkCookieConsent() {
        const consentTimestamp = getCookie('cookiesAccepted');
        if (!consentTimestamp) {
            cookieConsent.style.display = 'flex';
        } else {
            const oneYearAgo = new Date();
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
            if (new Date(parseInt(consentTimestamp)) < oneYearAgo) {
                cookieConsent.style.display = 'flex';
            } else {
                cookieConsent.style.display = 'none';
            }
        }
    }
    
    acceptCookiesButton.addEventListener('click', function() {
        setCookie('cookiesAccepted', Date.now(), 365);
        cookieConsent.style.display = 'none';
        
        // Google Analytics event tracking
        trackEvent('engagement', 'Cookie Consent Accepted');
    });

    checkCookieConsent();
}

// Call the function when the script loads
document.addEventListener('DOMContentLoaded', initCookieConsent);