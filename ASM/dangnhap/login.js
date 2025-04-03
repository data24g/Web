document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === "" || password === "") {
        alert("Please fill in all data.");
        return;
    }
    
    // Submit form to PHP for server-side validation
    this.submit();
});