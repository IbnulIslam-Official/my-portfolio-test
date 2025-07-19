document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-response').textContent = "Thank you for reaching out! I'll get back to you soon.";
  this.reset();
});
