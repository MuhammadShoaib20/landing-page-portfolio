document.getElementById("contact-form").addEventListener("submit",function(event){
event.preventDefault();
alert("thank you for reaching out");
});

const toggleThemeButton = document.getElementById("toggle-theme");
toggleThemeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});