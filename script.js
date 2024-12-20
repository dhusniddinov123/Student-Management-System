function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Simple regex for email validation
  
    // Reset previous errors
    emailField.style.borderColor = "#ccc";
    passwordField.style.borderColor = "#ccc";
  
    // Validate email and password
    if (!emailPattern.test(email)) {
      showModal("Please enter a valid email address (e.g., example@gmail.com).");
      emailField.style.borderColor = "red";
      return false;
    }
  
    if (password.length < 8) {
      showModal("Password must be at least 8 characters long.");
      passwordField.style.borderColor = "red";
      return false;
    }
  
    if (email === '' || password === '') {
      showModal("Both email and password are required.");
      return false;
    }
  
    // Form is valid
    return true;
  }
  
  // Show modal function
  function showModal(message) {
    const modal = document.getElementById("error-modal");
    const modalMessage = document.getElementById("modal-message");
    modalMessage.textContent = message;
    modal.style.display = "block"; // Display the modal
  }
  
  // Close the modal when the user clicks the close button
  document.getElementById("modal-close").onclick = function() {
    document.getElementById("error-modal").style.display = "none";
  }
  
  // Close the modal when the user clicks anywhere outside the modal content
  window.onclick = function(event) {
    const modal = document.getElementById("error-modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  