const validCredentials = [
    { email: 'shubham.mis@klhomeappliances.com', password: 'Shubham@123' },
    { email: 'another.email@example.com', password: 'AnotherPassword' }
    // Add more valid credentials as needed
];

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value.toLowerCase();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    const isValid = validCredentials.some(credential => 
        credential.email.toLowerCase() === email && credential.password === password
    );
    
    if (isValid) {
        window.location.href = 'https://www.google.com';
    } else {
        errorMessage.textContent = 'Invalid email or password';
        errorMessage.style.display = 'block';
    }
}
