function copyText() {
    // Get the text value from the element
    let textToCopy = "jcarte25@nd.edu"; // my email

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