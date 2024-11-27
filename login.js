function validateForm() {
    const role = document.querySelector('input[name="role"]:checked').value;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Basic validation
    let valid = true;

    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    }
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        valid = false;
    }
    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required';
        valid = false;
    }

    if (!valid) return;

    // Hardcoded credentials for demo purposes
    const adminCredentials = { name: 'Admin', email: 'admin@gmail.com', password: 'admin123' };
    const userCredentials = { name: 'User', email: 'user@gmail.com', password: 'user123' };

    if (role === 'admin' &&
        name === adminCredentials.name &&
        email === adminCredentials.email &&
        password === adminCredentials.password) {
        window.location.href = 'admin.html'; // Redirect to Admin Dashboard
    } else if (role === 'user' &&
        name === userCredentials.name &&
        email === userCredentials.email &&
        password === userCredentials.password) {
        window.location.href = 'user.html'; // Redirect to User Page
    } else {
        alert('Invalid credentials. Please try again.');
    }
}
