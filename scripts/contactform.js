function submitContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/submit-contact-form', true);  // Adjust the URL if needed
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const contactMessageElement = document.getElementById('contactMessage');
            if (contactMessageElement) {
                contactMessageElement.innerHTML = response.message;
            } else {
                console.error('Element with ID "contactMessage" not found.');
            }

            // Clear the form fields on successful submission
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            console.error('Error submitting contact form:', xhr.statusText);
        }
    };

    xhr.send(JSON.stringify(formData));
}

// Event listener to submit message when pressing Enter
document.getElementById('message').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        submitContactForm();
    }
});