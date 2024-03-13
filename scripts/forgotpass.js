// Function to open the forgot password modal
function openForgotPassword() {
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    forgotPasswordModal.style.display = 'block';
}

// Function to close the forgot password modal
function closeForgotPassword() {
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    forgotPasswordModal.style.display = 'none';
}

// Function to send reset password email
function sendResetPasswordEmail() {
    const emailInput = document.getElementById('forgotPasswordEmail');
    const forgotPasswordMessage = document.getElementById('forgotPasswordMessage');

    // Clear previous error messages
    forgotPasswordMessage.innerHTML = '';

    const email = emailInput.value.trim();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        forgotPasswordMessage.innerHTML = 'Please enter a valid email address.';
        return;
    }

    // Send reset password email to the server
    fetch('https://ecoserver-1.onrender.com/reset-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Email not found');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.message) {
                forgotPasswordMessage.innerHTML = data.message;
                console.log(data);
            } else {
                throw new Error('Unexpected response from the server');
            }
        })
        .catch(error => {
            forgotPasswordMessage.innerHTML = 'Error: ' + error.message;
            console.error('Forgot password error:', error);
        })
        .finally(() => {
            // Clear the email input after the request, regardless of success or failure
            emailInput.value = '';
        });
}

// Event listener to send reset password email when pressing Enter
document.getElementById('forgotPasswordEmail').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        sendResetPasswordEmail();
    }
});