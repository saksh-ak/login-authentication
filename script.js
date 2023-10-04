document.getElementById('login').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('loginUser').value;
  var password = document.getElementById('Password').value;

  // Check if username and password are valid
  if (username === 'sakshi' && password === 'password') {
    // Successful login
    alert('Login Successful');
    window.location.assign("main1.html");
  } else {
    // Invalid login
    alert('Invalid username or password');
  }
});

