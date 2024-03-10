// Function to open the registration modal
function openRegister() {
    const registrationModal = document.getElementById('registrationModal');
    registrationModal.style.display = 'block';
}

// Function to close the registration modal
function closeRegister() {
    const registrationModal = document.getElementById('registrationModal');
    registrationModal.style.display = 'none';
}

// Event listener to use Enter key for registration
document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        if (document.activeElement.id === 'registerUsername' || document.activeElement.id === 'registerEmail' || document.activeElement.id === 'registerPassword' || document.activeElement.id === 'confirmPassword') {
            register();
        }
    }
});

// Function to handle registration with Google
function registerWithGoogle(email) {
    // Perform registration logic here using the provided email
    console.log('Registering user with email:', email);
    openRegister();
}

// Registration function
function register() {
    // Get input values
    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const registrationMessage = document.getElementById('registrationMessage');

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        registrationMessage.innerHTML = 'Please enter a valid email address.';
        return;
    }

    // Validate password complexity
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
        registrationMessage.innerHTML = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
        return;
    }

    // Validate matching passwords
    if (password !== confirmPassword) {
        registrationMessage.innerHTML = 'Passwords do not match.';
        return;
    }

    // Check for empty input fields
    if (!username || !email || !password || !confirmPassword) {
        registrationMessage.innerHTML = 'Please fill in all fields.';
        return;
    }

    // Display loading message
    registrationMessage.innerHTML = 'Processing...';

    // Send registration data to the server
    fetch('https://ecoserver-i4v6.onrender.com:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Username or email already exists');
            }
            return response.json();
        })
        .then(data => {
            registrationMessage.innerHTML = data.message;
            console.log(data);
        })
        .catch(error => {
            registrationMessage.innerHTML = 'Error: ' + error.message;
            console.error('Registration error:', error);
        });
}