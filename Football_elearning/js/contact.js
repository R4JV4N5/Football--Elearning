const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Display the alert message
  alert('Form submitted!');
  
  // Refresh the page after 2 seconds
  setTimeout(function() {
    location.reload();
  });
});
