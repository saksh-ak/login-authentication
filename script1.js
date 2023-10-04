ōdocument.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('Username').value;
    var email = document.getElementById('Email').value;
    var password = document.getElementById('regPassword').value;
    var confirmPassword = document.getElementById('ConfirmPassword').value;
  
    // Check if all fields are filled
    if (username && email && password && confirmPassword) {
      // Check if passwords match
      if (password === confirmPassword) {
        // Successful registration
        alert('Registration Successful');
        
        // Reset the form
        document.getElementById('registration').reset();
      } else {
        // Passwords don't match
        alert('Passwords do not match');
      }
    } else {
      // Missing fields
      alert('Please fill in all fields');
    }
  });