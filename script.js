alert("Script Loaded");
emailjs.init("SpLKfuA_nR1mfy8lUh");

const contactForm = 
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_7xf3h6a",
        "template_xsqpw6o",
        this
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
