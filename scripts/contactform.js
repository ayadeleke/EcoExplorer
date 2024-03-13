function submitContactForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate input fields
    if (!name || !email || !message) {
        console.error('Please fill in all fields.');
        return;
    }

    const formData = {
        name: name,
        email: email,
        message: message
    };

    fetch('https://ecoserver-1.onrender.com/submit-contact-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to submit contact form');
        }
        return response.json();
    })
    .then(data => {
        const contactMessageElement = document.getElementById('contactMessage');
        if (contactMessageElement) {
            contactMessageElement.innerHTML = data.message;
        } else {
            console.error('Element with ID "contactMessage" not found.');
        }

        // Clear the form fields on successful submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    })
    .catch(error => {
        console.error('Error submitting contact form:', error.message);
    });
}

// Event listener to submit message when pressing Enter
document.getElementById('message').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        submitContactForm();
    }
});