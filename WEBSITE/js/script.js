// Hamburger handler
const hamburger = document.querySelector(".hamburger");
const nav_list = document.querySelector(".nav-list");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("clicked");
  nav_list.classList.toggle("active");
});

// Change Menu Image
const special_card_list = document.getElementsByClassName("special");
for (let i = 0; i < special_card_list.length; i++) {
  let special_card = special_card_list[i];
  let image_name = special_card.getAttribute("data-img");
  special_card.style.backgroundImage =
    "url(../assets/coffee/" + image_name + ")";
}

// Enter handling on input field
const input_list = document.querySelectorAll(".register-form-input");
for (let i = 0; i < input_list.length; i++) {
  input_list[i].addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
      e.preventDefault();
      let next_input = document.querySelector(
        '[tabindex="' + (this.tabIndex + 1) + '"]'
      );
      // back to tabindex=1 input field
      if (next_input === null) {
        next_input = document.querySelector('[tabindex="1"]');
      }
      next_input.focus();
    }
  });
}

// Register checkbox
const privacy_agreements = document.getElementById("privacy-terms");
const privacy_agreements_label = document.querySelector(".privacy-label");
const send_newsletter = document.getElementById("send-newsletter");
const send_newsletter_label = document.querySelector(".newsletter-label");

privacy_agreements.addEventListener("click", function () {
  privacy_agreements.classList.toggle("checked");
});

privacy_agreements_label.addEventListener("click", function () {
  privacy_agreements.classList.toggle("checked");
});

send_newsletter.addEventListener("click", function () {
  send_newsletter.classList.toggle("checked");
});

send_newsletter_label.addEventListener("click", function () {
  send_newsletter.classList.toggle("checked");
});

// Register submit handler
const form = document.querySelector(".register-form");
form.addEventListener("submit", function (e) {
  const formElement = document.forms.RegistForm;
  const formData = new FormData(formElement);
  if (!privacy_agreements.classList.contains("checked")) {
    window.alert("You must agree to the Terms & Privacy Policy");
    e.preventDefault();
  } else if (formData.get("password") !== formData.get("conf-password")) {
    window.alert("Password doesn't match");
    e.preventDefault();
  } else {
    window.alert("Data successfully registered!!!");
  }
});
