const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');

// Handle sign-up button click
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

// Handle sign-in button click
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Handle sign-up form submission
signUpForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    window.location.href = "codecrafters.html"; // Redirect to codecrafters.html
});

// Handle sign-in form submission
signInForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    window.location.href = "codecrafters.html"; // Redirect to codecrafters.html
});
