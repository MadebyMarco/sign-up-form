

function validate() {
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");
    const notValidText = document.querySelector(".not-valid-text");

const form = document.querySelector(".form1");
    const passwordContent = form.elements[2].value;
     const confirmPasswordContent = form.elements[5].value;

if(passwordContent == confirmPasswordContent && passwordContent.length > 0) {
    password.style["border-color"] = "green";
    confirmPassword.style["border-color"] = "green";
    notValidText.classList.add("hide-text")
} else {
    password.style["border-color"] = "";
    confirmPassword.style["border-color"] = "";
    notValidText.classList.remove("hide-text")
}
}; 


const passwordContainer = document.querySelectorAll(".password-container");
passwordContainer.forEach(container => container.addEventListener('mousemove', () => validate()));