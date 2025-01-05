(() => {
  // ../custom_app_ethiotop/custom_app_ethiotop/public/js/custom-web.js
  document.addEventListener("DOMContentLoaded", function() {
    let emailFieldDiv = document.querySelector(".email-field");
    if (emailFieldDiv) {
      let inputElement = emailFieldDiv.querySelector("input");
      if (inputElement) {
        let svgElement = emailFieldDiv.querySelector("svg");
        if (svgElement) {
          svgElement.remove();
        }
        inputElement.classList.add("form-control-lg");
        inputElement.classList.remove("form-control");
        inputElement.placeholder = "Email";
      }
    }
    let passwordFieldDiv = document.querySelector(".password-field");
    if (passwordFieldDiv) {
      let inputElement = passwordFieldDiv.querySelector("input");
      if (inputElement) {
        let svgElement = passwordFieldDiv.querySelector("svg");
        if (svgElement) {
          svgElement.remove();
        }
        inputElement.classList.add("form-control-lg");
        inputElement.classList.remove("form-control");
        inputElement.placeholder = "Password";
      }
    }
  });
})();
//# sourceMappingURL=custom-web.bundle.3LD5IJQ4.js.map
