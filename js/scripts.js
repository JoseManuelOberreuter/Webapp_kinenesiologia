const submitButton = document.getElementById("submitButton");
const contactForm = document.getElementById("contactForm");
const submitSuccessMessage = document.getElementById("submitSuccessMessage");
const titulo_form = document.getElementById("titulo_form");

submitButton.addEventListener("submit", function() {
  contactForm.classList.add("d-none");
  titulo_form.classList.add("d-none");
  submitSuccessMessage.classList.remove("d-none");
});
