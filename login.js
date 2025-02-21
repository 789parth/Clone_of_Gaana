document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    document.getElementById('usernameError').innerText = '';
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

    const password = document.getElementById('password').value.trim();
    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required.';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    if (isValid) {
        alert('Login successful!');
    }
});