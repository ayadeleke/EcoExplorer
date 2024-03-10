
// Function to clear email and password fields
function clearLoginFields() {
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
}

// Function to open the login modal
function openLogin() {
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'block';

 // Clear the login fields when opening the modal
    clearLoginFields();
}
// Function to close the login modal
function closeLogin() {
    console.log('Closing login modal.');  // Add this line for debugging
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'none';
}

// Event listener to close modals when clicking outside the modal content
document.addEventListener('click', function (event) {
    const loginModal = document.getElementById('loginModal');
    const registrationModal = document.getElementById('registrationModal');

    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    } else if (event.target === document.getElementById('openLoginBtn')) {
        loginModal.style.display = 'block';
    } else if (event.target === document.getElementById('openRegisterBtn')) {
        registrationModal.style.display = 'block';
    }
});

// Event listener to close the login modal when pressing Enter and login
document.getElementById('loginPassword').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        login();
    }
});

function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const email = profile.getEmail();
    console.log('Google Sign-In successful. Email:', email);

    // Initialize the Google API Library with your client ID
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: '136593872334-tqi8g521263spopua88h8q20st28k7ea.apps.googleusercontent.com',
        }).then(() => {

            registerWithGoogle(email);
        });
    });
}


// Function to handle user login
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Send login data to the server
    fetch('https://ecoserver-1.onrender.com:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier: username, password }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Invalid credentials');
            }
            return response.json();
        })
        .then(data => {
            const loginMessage = document.getElementById('loginMessage');
            loginMessage.innerHTML = data.message;
            console.log(data);

            // Check if login was successful
            if (data.success) {
                // Close the login modal only if the login is successful
                closeLogin();
                // Clear the login fields after successful login
                clearLoginFields();
            }
        })
        .catch(error => {
            const loginMessage = document.getElementById('loginMessage');
            loginMessage.innerHTML = 'Error: ' + error.message;
            console.error('Login error:', error);
        });
}

