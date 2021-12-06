document.addEventListener("DOMContentLoaded", function(event) {
    var skillsButton = document.getElementById("skills");
    var pathParts = window.location.pathname.split("/");
    if (pathParts[pathParts.length - 1] == "skills.html") {
        skillsButton.style.setProperty("--card__skills-button-rotate", "225deg");
        skillsButton.style.setProperty("--card__skills-button-hor-disp", "38%");

        addNewSkill("C#", "70%");
        addNewSkill("Java", "60%");
        addNewSkill("JavaScript", "50%");

        var addNewSkillEl = document.getElementById("addNewSkill");
        var newSkillName = document.getElementById("newSkillName");
        var newSkillValue = document.getElementById("newSkillValue");
        addNewSkillEl.onclick = function () {
            if (newSkillName.value && newSkillValue.value && newSkillValue.value >= 0 && newSkillValue.value <= 100) {
                addNewSkill(newSkillName.value, newSkillValue.value + "%");
                var cardSkillsWrapper = document.getElementById("card__skills-wrapper");
                cardSkillsWrapper.scrollTop = cardSkillsWrapper.scrollHeight;
            } else {
                alert("Incorrect input!");
            }
        }
    }

    skills.onclick = function () {
        pathParts = window.location.pathname.split("/");
        if (pathParts[pathParts.length - 1] == "skills.html") {
            window.location.href = "../index.html";
        } else if (pathParts[pathParts.length - 1] == "index.html") {
             window.location.href = "pages/skills.html";
        }
    }

    function addNewSkill(skillNameNew, skillPercentNew) {
        var skillsWrapper = document.getElementById("card__skills-wrapper");
        var skillContainer = document.createElement("div");
        skillContainer.classList.add("card__skill-container");
        var skillWrapper = document.createElement("div");
        skillWrapper.style.width = "80%";
        skillWrapper.style.margin = "10px";
        var skillName = document.createElement("div");
        skillName.innerText = skillNameNew;
        var skillProgress = document.createElement("div");
        skillProgress.classList.add("card__progress");
        skillProgress.classList.add("card__progress-moved");
        var skillProgressBar = document.createElement("div");
        skillProgressBar.classList.add("card__progress-bar");
        skillProgressBar.style.width = skillPercentNew;
        skillProgressBar.animate([ { width: "5%", backgroundColor: "#98FB98"}, { width: skillPercentNew, backgroundColor: "#006400"} ], { duration: 5000 });
        var skillPercent = document.createElement("div");
        skillPercent.classList.add("card__skill-percent");
        skillPercent.innerText = skillPercentNew;
        skillPercent.style.marginLeft = skillPercentNew;
        skillPercent.animate([{ marginLeft: "5%" },  { marginLeft: skillPercentNew }], { duration: 5000 });
        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener('click', () => { deleteButton.parentElement.remove(); });
        deleteButton.classList.add("card__skill-delete");
        skillWrapper.appendChild(skillName);
        skillProgress.appendChild(skillProgressBar);
        skillWrapper.appendChild(skillProgress);
        skillWrapper.appendChild(skillPercent);
        skillContainer.appendChild(skillWrapper);
        skillContainer.appendChild(deleteButton);
        skillsWrapper.appendChild(skillContainer);
    }
});