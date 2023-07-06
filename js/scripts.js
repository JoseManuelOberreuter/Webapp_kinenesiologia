const submitButton = document.getElementById("submitButton");
const contactForm = document.getElementById("contactForm");
const submitSuccessMessage = document.getElementById("submitSuccessMessage");

submitButton.addEventListener("click", function() {
  contactForm.classList.add("d-none");
  submitSuccessMessage.classList.remove("d-none");
});
