// Wait for the entire page to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', (event) => {
        // Prevent the default form submission (which reloads the page)
        event.preventDefault();

        // Get the input fields using the IDs we added in the HTML
        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const messageInput = document.getElementById('contact-message');

        // Get the trimmed values from the fields
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // --- Form Validation ---
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all required fields: Name, Email, and Message.');
            return; // Stop the function if validation fails
        }

        // --- Email Format Validation ---
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return; // Stop the function if email format is invalid
        }

        // --- Success ---
        // If all validations pass, show a success message.
        // NOTE: This does not actually send an email. That requires a server-side backend.
        alert('Thank you, ' + name + '! Your message has been received.');

        // Clear the form fields after successful "submission"
        contactForm.reset();
    });
});