// <!-- Google tag (gtag.js) -->

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-53KWF9E97W');

// analytics.js
function trackEvent(category, label, value) {
    if (typeof gtag === 'function') {
        gtag('event', label, {
            'event_category': category,
            'event_label': label,
            'value': value
        });
    } else {
        console.warn('Google Analytics not loaded');
    }
}

// You can add more analytics-related functions here