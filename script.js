document.addEventListener("DOMContentLoaded", function () {
    // Add a greeting alert when the page loads
    alert("Welcome to my resume page!");

    // Change background color when clicking the header
    document.querySelector(".header").addEventListener("click", function () {
        this.style.backgroundColor = "#ff6600"; // Change to a different color
    });

    // Highlight skills on hover
    let skills = document.querySelectorAll(".skills ul li");
    skills.forEach(skill => {
        skill.addEventListener("mouseover", function () {
            this.style.backgroundColor = "black";
        });
        skill.addEventListener("mouseout", function () {
            this.style.backgroundColor = "#007bff";
        });
    });
});
