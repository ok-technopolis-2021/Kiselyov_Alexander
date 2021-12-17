import { addNewSkill } from './utils.js'

export function showSkills() {
    let pathParts = window.location.pathname.split("/");
    let skillsButton = document.getElementById("skills");
    if (pathParts[pathParts.length - 1] == "skills.html") {
        skillsButton.style.setProperty("--card__skills-button-rotate", "225deg");
        skillsButton.style.setProperty("--card__skills-button-hor-disp", "38%");

        addNewSkill("C#", "70%");
        addNewSkill("Java", "60%");
        addNewSkill("JavaScript", "50%");

        let form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let formData = new FormData(form);
            let skillName = formData.get('SkillName');
            let skillValue = formData.get('SkillValue');
            if (skillName && skillValue && skillValue >= 0 && skillValue <= 100) {
                addNewSkill(newSkillName.value, newSkillValue.value + "%");
                let cardSkillsWrapper = document.getElementById("card__skills-wrapper");
                cardSkillsWrapper.scrollTop = cardSkillsWrapper.scrollHeight;
            } else {
                alert("Incorrent input!");
            }
        });
    }
}