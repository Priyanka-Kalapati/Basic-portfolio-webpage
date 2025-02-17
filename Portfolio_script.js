function toggleSkills() {
    var skills = document.getElementById("skills");
    var button = document.getElementById("toggleButton");

    if (skills.style.display === "none") {
        skills.style.display = "block";
        button.textContent = "Hide Skills";
    } else {
        skills.style.display = "none";
        button.textContent = "Show Skills";
    }
}
