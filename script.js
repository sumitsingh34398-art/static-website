const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeBtn.innerHTML = "☀️ Light Mode";

}else{

themeBtn.innerHTML = "🌙 Dark Mode";

}

});

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Thank You! Your message has been submitted successfully."
);

contactForm.reset();

});

window.addEventListener("load", () => {

console.log("Cloud Dashboard Loaded Successfully");

});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "translateY(-8px)";

});

card.addEventListener("mouseleave", () => {

card.style.transform = "translateY(0px)";

});

});
