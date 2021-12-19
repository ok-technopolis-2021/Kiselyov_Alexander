let pathParts = window.location.pathname.split("/");
let skillsEl = document.getElementById("skills");
skillsEl.onclick = function () {
    if (pathParts[pathParts.length - 1] == "skills.html") {
        window.location.href = "../index.html";
    } else if (pathParts[pathParts.length - 1] == "index.html") {
         window.location.href = "pages/skills.html";
    }
}

const Skill = ( {skillName, skillPercent, deleteSkill, id} ) => {
    return (
        <div className="card__skill-container">
            <div style={ { width: "80%", margin: "10px" } }>
                <div>{ skillName }</div>
                <div className="card__progress card__progress-moved">
                    <div className="card__progress-bar" style={ { width: skillPercent + "%" } }></div>
                </div>
                <div className="card__skill-percent" style={ { marginLeft: skillPercent + "%" } }>{ skillPercent }</div>
            </div>
            <button id={ id } className="card__skill-delete" onClick={ deleteSkill }>Delete</button>
        </div>
    )
}

class SkillsForm extends React.Component {
    constructor() {
        super();
        skillsEl.style.setProperty("--card__skills-button-rotate", "225deg");
        skillsEl.style.setProperty("--card__skills-button-hor-disp", "38%");
        this.deleteSkill = this.deleteSkill.bind(this);
        var skills = [ {skillName: "C#", skillPercent: "70", id: 1}, {skillName: "Java", skillPercent: "60", id: 2}, {skillName: "JavaScript", skillPercent: "50", id: 3} ];
        this.state = { skills: skills };
        let form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let formData = new FormData(form);
            let skillName = formData.get('SkillName');
            let skillValue = formData.get('SkillValue');
            if (skillName && skillValue && skillValue >= 0 && skillValue <= 100) {
                this.addNewSkill(newSkillName.value, newSkillValue.value);
                let cardSkillsWrapper = document.getElementById("card__skills-wrapper");
                cardSkillsWrapper.scrollTop = cardSkillsWrapper.scrollHeight;
            } else {
                alert("Incorrent input!");
            }
        });
    }

    addNewSkill(skillName, skillPercent) {
        var mySkills = this.state.skills;
        if (mySkills.length == 0) {
            mySkills.push({ skillName: skillName, skillPercent: skillPercent, id: 1 });
        }
        else {
            var maxValue = mySkills.reduce((first, second) => first.id > second.id ? first : second).id + 1;
            mySkills.push( {skillName: skillName, skillPercent: skillPercent, id: maxValue} );
        }
        this.setState( {skills: mySkills} );
    }

    deleteSkill(e) {
        var mySkills = this.state.skills;
        var myId = e.target.id;
        var myIndex = mySkills.indexOf(mySkills.find(s => s.id == myId));
        if (myIndex !== -1) {
            mySkills.splice(myIndex, 1);
        }
        this.setState( {skills: mySkills} );
    }

    render() {
        var deleteSkill = this.deleteSkill;
        return (
            <div>
                {this.state.skills.map(function(s) { return (<Skill skillName={ s.skillName } skillPercent={ s.skillPercent } deleteSkill={ deleteSkill } id={ s.id } />) })}
            </div>
        )
    }
}

if (pathParts[pathParts.length - 1] == "skills.html") {
    const skillsForm = <SkillsForm />;
    ReactDOM.render(skillsForm, document.getElementById("card__skills-wrapper"));
}