// Check if the user is signed in (you can implement your own logic)
const isSignedIn = false; // Set to true if the user is signed in

// Function to toggle the Sign Up and Profile options based on user authentication
function toggleSignInStatus() {
    const signUpOption = document.querySelector('.sign-up');
    const profileDropdown = document.querySelector('.profile-dropdown');

    if (isSignedIn) {
        signUpOption.style.display = 'none';
        profileDropdown.style.display = 'block';
    } else {
        signUpOption.style.display = 'block';
        profileDropdown.style.display = 'none';
    }
}

// Call the function to set the initial state
toggleSignInStatus();

document.getElementById('login-toggle').addEventListener('click', function () {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    this.classList.add('active');
    document.getElementById('signup-toggle').classList.remove('active');
});

document.getElementById('signup-toggle').addEventListener('click', function () {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    this.classList.add('active');
    document.getElementById('login-toggle').classList.remove('active');
});
