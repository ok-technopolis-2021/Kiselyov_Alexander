import { showSkills } from './skills/skill.js'

document.addEventListener("DOMContentLoaded", function(event) {
    showSkills();
    let skills = document.getElementById("skills");
    skills.onclick = function () {
        let pathParts = window.location.pathname.split("/");
        if (pathParts[pathParts.length - 1] == "skills.html") {
            window.location.href = "../index.html";
        } else if (pathParts[pathParts.length - 1] == "index.html") {
             window.location.href = "pages/skills.html";
        }
    }
});