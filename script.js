emailjs.init("SpLKfuA_nR1my8lUh");

const contactForm = 
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_7xf3h6a",
        "template_kjieehh",
        this,
        "SpLKfuA_nR1my8lUh"
    )
    .then(function() {
        alert("Message Sent Successfully!");
        contactForm.reset();
    })
    .catch(function(error) {
        alert("Failed to send message!");
        console.log(error);
    });
});
const darkModeBtn = document.getElementById("themeBtn");

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
}
console.log(darkModeBtn);
