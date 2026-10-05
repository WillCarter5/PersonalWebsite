function copyText(textToCopy) {
    // Get the text value from the element

    // Use the Clipboard API to write the text
    // Source: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Alert user on copy
        alert("Copied the text: " + textToCopy);
    }).catch(err => {
        // Log error if error caught :)
        console.error('Failed to copy text: ', err);
    });
}

const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
    const themeLabel = themeToggle.querySelector('span:last-child');
    const themeIcon = themeToggle.querySelector('.theme-switch__icon');

    function setHomeTheme(theme, persist = false) {
        const isDark = theme === 'dark';
        document.documentElement.dataset.homeTheme = theme;
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeLabel.textContent = isDark ? 'Dark mode on' : 'Dark mode';
        themeIcon.textContent = isDark ? '◑' : '◐';

        if (persist) {
            try {
                localStorage.setItem('home-theme', theme);
            } catch (error) {
                // The theme still changes for this page view when storage is unavailable.
            }
        }
    }

    setHomeTheme(document.documentElement.dataset.homeTheme || 'light');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.dataset.homeTheme;
        setHomeTheme(currentTheme === 'dark' ? 'light' : 'dark', true);
    });
}