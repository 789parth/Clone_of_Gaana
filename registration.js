document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    document.getElementById('usernameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    let isValid = true;

    const username = document.getElementById('username').value.trim();
    if (username === '') {
        document.getElementById('usernameError').innerText = 'Username is required.';
        isValid = false;
    } else if (username.length < 3 || username.length > 20) {
        document.getElementById('usernameError').innerText = 'Username must be between 3 and 20 characters.';
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Enter a valid email address.';
        isValid = false;
    }

    const password = document.getElementById('password').value.trim();
    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required.';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long.';
        isValid = false;
    } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        document.getElementById('passwordError').innerText = 'Password must include an uppercase letter, a lowercase letter, a number, and a special character.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});