// JavaScript to switch between sections
function showSection(sectionId) {
    // Hide all sections
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'none';

    // Show the selected section
    const section = document.getElementById(sectionId);
    section.style.display = 'block';

    // Scroll to the top of the section smoothly
    section.scrollIntoView({ behavior: 'smooth' });
}

// Example: Handle the form submission with validation
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Validate password match
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('repassword').value;

    if (password !== repassword) {
        alert('Passwords do not match!');
        return;
    }

    // Validate phone number format
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/; // Adjust the pattern if needed

    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // Validate file upload (if required)
    const fileInput = document.getElementById('file');
    if (fileInput.files.length === 0) {
        alert('Please upload a file.');
        return;
    }

    alert('Registration successful!');
    // Here you can send the form data to the server or handle it as needed.
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Login form submitted!');
});
