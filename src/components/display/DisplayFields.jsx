import reactLogo from '../../assets/react.svg'
import editIcon from '../../assets/edit.svg'
import deleteIcon from '../../assets/delete.svg'
import { uniqueId } from 'lodash';
import { PersonalDetailsForm } from '../fieldComponents/PersonalDetailsForm'
import { SkillsForm } from '../fieldComponents/SkillsForm'
import { WorkExperienceForm } from '../fieldComponents/WorkExperienceForm'
import { BasicInfoForm } from '../fieldComponents/BasicInfoForm'
import { BasicInfoDisplay } from '../displayComponents/BasicInfoDisplay'
import { PersonalDetailsDisplay } from '../displayComponents/PersonalDetailsDisplay'
import { EducationDisplay } from '../displayComponents/EducationDisplay'
import { SkillsDisplay } from '../displayComponents/SkillsDisplay'
import { SummaryDisplay } from '../displayComponents/SummaryDisplay'
import { WorkExperienceDisplay } from '../displayComponents/WorkExperienceDisplay'
import { useState } from 'react'
import { EducationForm } from '../fieldComponents/EducationForm'
import { ConfigSwitch } from '../fieldComponents/ConfigSwitch';
import { Font } from './configComponents/Font';
import { BackgroundColor } from './configComponents/BackgroundColor';
import { Print } from './configComponents/Print';

export function DisplayFields() {

    const [formData, setFormData] = useState({
        firstName: "Sarah",
        lastName: "Amelia",
        cvInitials: "SA",
        titleOfPosition: "Web Developer",
        summary: "I am a qualified and professional web developer with five years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for detail.",
        number: "+2734567890",
        email: "hello@reallygreatsite.com",
        location: "123 Anywhere St., Any City",

        education: [{
            id: uniqueId(),
            qualification: "Secondary School",
            institute: "Really Great University",
            startingDate: "2010",
            endingDate: "2014"
        },
        {
            id: uniqueId(),
            qualification: "Bachelor Of technology",
            institute: "Really Great University",
            startingDate: "2014",
            endingDate: "2016"
        }],

        editEducation: { id: null, qualification: "", institute: "", startingDate: "", endingDate: "" },

        skills: [{ id: uniqueId(), name: "Web Design" },
        { id: uniqueId(), name: "Design Thinking" },
        { id: uniqueId(), name: "Wireframe Creation" },
        { id: uniqueId(), name: "Front End Coding" },
        { id: uniqueId(), name: "Backend Tech" },
        { id: uniqueId(), name: "Problem Solving" },
        { id: uniqueId(), name: "Computer Literacy" },
        { id: uniqueId(), name: "Project Management Tools" },
        { id: uniqueId(), name: "Frameworks" },
        { id: uniqueId(), name: "Strong Communication" }],
        editSkills: { id: null, name: "" },

        experience: [{
            id: uniqueId(),
            title: "Applications Developer",
            company: "Really Great Company",
            startingDate: "2016",
            endingDate: "2024",
            description: "Database administration and website design. Built the logic for a streamlined ad-serving platform that scaled. Educational institutions and online classroom management"
        },
        {
            id: uniqueId(),
            title: "Web Content Manager",
            company: "Really Great Company",
            startingDate: "2014",
            endingDate: "2016",
            description: "Database administration and website design. Built the logic for a streamlined ad-serving platform that scaled. Educational institutions and online classroom management"
        },
        {
            id: uniqueId(),
            title: "Analysis Content",
            company: "Really Great Company",
            startingDate: "2010",
            endingDate: "2014",
            description: "Database administration and website design. Built the logic for a streamlined ad-serving platform that scaled. Educational institutions and online classroom management"
        }],

        editExperience: { id: null, title: "", company: "", startingDate: "", endingDate: "", description: "" }
    });

    const [configSwitch, setconfigSwitch] = useState("content");

    function handleFirstNameChange(e) {
        const newForm = { ...formData, firstName: e.target.value };
        setFormData(newForm);
    }

    function handleLastNameChange(e) {
        const newForm = { ...formData, lastName: e.target.value };
        setFormData(newForm);
    }

    function handleTitleOfPositionChange(e) {
        const newForm = { ...formData, titleOfPosition: e.target.value };
        setFormData(newForm);
    }

    const cvInitials = formData.firstName.charAt(0) + formData.lastName.charAt(0);

    function handleSummaryChange(e) {
        const newForm = { ...formData, summary: e.target.value };
        setFormData(newForm);
    }

    function handleNumberChange(e) {
        const newForm = { ...formData, number: e.target.value };
        setFormData(newForm);
    }

    function handleEmailChange(e) {
        const newForm = { ...formData, email: e.target.value };
        setFormData(newForm);
    }

    function handleLocationChange(e) {
        const newForm = { ...formData, location: e.target.value };
        setFormData(newForm);
    }

    function handleAddEducation() {
        document.getElementById("educations-list").style.display = "none";
        document.getElementById("education-form").style.display = "flex";
        document.getElementById("add-education-button").style.display = "none";
        setFormData(formData);
    }

    function handleSubmitEducation(e) {
        e.preventDefault();

        const educationData = new FormData(e.target);
        const qualification = educationData.get("name-of-qualification");
        const institute = educationData.get("name-of-institute");
        const startingYear = educationData.get("starting-year");
        const endingYear = educationData.get("ending-year");

        formData.education.push({ id: uniqueId(), qualification: qualification, institute: institute, startingDate: startingYear, endingDate: endingYear });
        const newForm = { ...formData, education: formData.education };
        setFormData(newForm);

        document.getElementById("education-form").style.display = "none";
        document.getElementById("edit-education-form").style.display = "none";
        document.getElementById("educations-list").style.display = "flex";

        if (formData.education.length >= 2) document.getElementById("add-education-button").style.display = "none";
        else document.getElementById("add-education-button").style.display = "flex";
    }

    function ListEducations(props) {
        return (
            <ul id="educations-list" className="educations-list">
                {props.educations.map((education) => {
                    return education ? <li key={education.id}>
                        <div className="education-item">
                            <h3 className="education-item-qualification">{education.qualification}</h3>
                            <div className="education-item-icons">
                                <button className="education-item-button" onClick={handleEditEducation}><img className="education-item-icon edit-icon" id={education.id.toString()} src={editIcon} /></button>
                                <button className="education-item-button" id="edit-education-button" onClick={handleDeleteEducation}><img className="education-item-icon delete-icon" id={education.id.toString()} src={deleteIcon} /></button>
                            </div>
                        </div>
                    </li> : null;
                })
                }
            </ul >
        );
    }

    function handleCancelEducation(e) {
        document.getElementById("education-form").style.display = "none";
        document.getElementById("edit-education-form").style.display = "none";
        document.getElementById("educations-list").style.display = "flex";

        if (formData.education.length >= 2) document.getElementById("add-education-button").style.display = "none";
        else document.getElementById("add-education-button").style.display = "flex";
        setFormData(formData);
    }

    function handleDeleteEducation(e) {
        const id = Number(e.target.id);
        for (let i = 0; i < formData.education.length; i++) {
            if (Number(formData.education[i].id) === id) {
                formData.education.splice(i, 1);
            } else {
                console.log(typeof id + " " + typeof formData.education[i].id);
            }
        }

        if (formData.education.length <= 2) document.getElementById("add-education-button").style.display = "flex";
        else document.getElementById("add-education-button").style.display = "none";

        const newForm = { ...formData, education: formData.education };
        setFormData(newForm);
    }

    function handleEditEducation(e) {
        const id = Number(e.target.id);
        const educationEditForm = document.getElementById("edit-education-form");
        const addEducationButton = document.getElementById("add-education-button");
        const educationsList = document.getElementById("educations-list");

        for (let i = 0; i < formData.education.length; i++) {
            if (Number(formData.education[i].id) === id) {

                addEducationButton.style.display = "none";
                educationEditForm.style.display = "flex";
                educationsList.style.display = "none";

                formData.editEducation.id = formData.education[i].id;
                formData.editEducation.qualification = formData.education[i].qualification;
                formData.editEducation.institute = formData.education[i].institute;
                formData.editEducation.startingDate = formData.education[i].startingDate;
                formData.editEducation.endingDate = formData.education[i].endingDate;
            }
        }

        const newForm = { ...formData, editEducation: formData.editEducation };
        setFormData(newForm);
    }

    function handleSubmitEditEducation(e) {
        e.preventDefault();
        const id = Number(formData.editEducation.id);
        for (let i = 0; i < formData.education.length; i++) {
            if (Number(formData.education[i].id) === id) {

                const educationData = new FormData(e.target);
                const qualification = educationData.get("name-of-qualification");
                const institute = educationData.get("name-of-institute");
                const startingYear = educationData.get("starting-year");
                const endingYear = educationData.get("ending-year");

                const form = { id: id, qualification: qualification, institute: institute, startingDate: startingYear, endingDate: endingYear };
                formData.education.splice(i, 1, form);
            }
        }
        handleCancelEducation(e)
        const newForm = { ...formData, education: formData.education };
        setFormData(newForm);
    }

    function handleQualificationChange(e) {
        const newEditEducationForm = { ...formData.editEducation, qualification: e.target.value };
        const newForm = { ...formData, editEducation: newEditEducationForm }
        setFormData(newForm);
    }

    function handleInstituteChange(e) {
        const newEditEducationForm = { ...formData.editEducation, institute: e.target.value };
        const newForm = { ...formData, editEducation: newEditEducationForm }
        setFormData(newForm);
    }

    function handleStartDateChange(e) {
        const newEditEducationForm = { ...formData.editEducation, startingDate: e.target.value };
        const newForm = { ...formData, editEducation: newEditEducationForm }
        setFormData(newForm);
    }

    function handleEndDateChange(e) {
        const newEditEducationForm = { ...formData.editEducation, endingDate: e.target.value };
        const newForm = { ...formData, editEducation: newEditEducationForm }
        setFormData(newForm);
    }

    /*

    Skills section

    */

    function handleAddSkill() {
        document.getElementById("skills-list").style.display = "none";
        document.getElementById("skill-form").style.display = "flex";
        document.getElementById("add-skill-button").style.display = "none";
        setFormData(formData);
    }

    function handleSubmitSkill(e) {
        e.preventDefault();

        const skillData = new FormData(e.target);
        const name = skillData.get("skill-name");

        formData.skills.push({ id: uniqueId(), name: name });
        const newForm = { ...formData, skills: formData.skills };
        setFormData(newForm);

        document.getElementById("skill-form").style.display = "none";
        document.getElementById("edit-skill-form").style.display = "none";
        document.getElementById("skills-list").style.display = "flex";

        if (formData.skills.length >= 10) document.getElementById("add-skill-button").style.display = "none";
        else document.getElementById("add-skill-button").style.display = "flex";
    }

    function ListSkills(props) {
        return (
            <ul id="skills-list" className="skills-list">
                {props.skills.map((skill) => {
                    return skill ? <li key={skill.id}>
                        <div className="skill-item">
                            <h3 className="skill-item-name">{skill.name}</h3>
                            <div className="skill-item-icons">
                                <button className="skill-item-button" onClick={handleEditSkill}><img className="skill-item-icon edit-icon" id={skill.id.toString()} src={editIcon} /></button>
                                <button className="skill-item-button" id="edit-skill-button" onClick={handleDeleteSkill}><img className="skill-item-icon delete-icon" id={skill.id.toString()} src={deleteIcon} /></button>
                            </div>
                        </div>
                    </li> : null;
                })
                }
            </ul >
        );
    }

    function handleCancelSkill(e) {
        document.getElementById("skill-form").style.display = "none";
        document.getElementById("edit-skill-form").style.display = "none";
        document.getElementById("skills-list").style.display = "flex";

        if (formData.skills.length >= 2) document.getElementById("add-skill-button").style.display = "none";
        else document.getElementById("add-skill-button").style.display = "flex";
        setFormData(formData);
    }

    function handleDeleteSkill(e) {
        const id = Number(e.target.id);
        for (let i = 0; i < formData.skills.length; i++) {
            if (Number(formData.skills[i].id) === id) {
                formData.skills.splice(i, 1);
            } else {
                console.log(typeof id + " " + typeof formData.skills[i].id);
            }
        }

        if (formData.skills.length <= 10) document.getElementById("add-skill-button").style.display = "flex";
        else document.getElementById("add-skill-button").style.display = "none";

        const newForm = { ...formData, skills: formData.skills };
        setFormData(newForm);
    }

    function handleEditSkill(e) {
        const id = Number(e.target.id);
        const skillEditForm = document.getElementById("edit-skill-form");
        const addSkillButton = document.getElementById("add-skill-button");
        const skillsList = document.getElementById("skills-list");

        for (let i = 0; i < formData.skills.length; i++) {
            if (Number(formData.skills[i].id) === id) {

                addSkillButton.style.display = "none";
                skillEditForm.style.display = "flex";
                skillsList.style.display = "none";

                formData.editSkills.id = formData.skills[i].id;
                formData.editSkills.name = formData.skills[i].name;
            }
        }

        const newForm = { ...formData, editSkills: formData.editSkills };
        setFormData(newForm);
    }

    function handleSubmitEditSkill(e) {
        e.preventDefault();
        const id = Number(formData.editSkills.id);
        for (let i = 0; i < formData.skills.length; i++) {
            if (Number(formData.skills[i].id) === id) {

                const skillsData = new FormData(e.target);
                const name = skillsData.get("skill-name");

                const form = { id: id, name: name };
                formData.skills.splice(i, 1, form);
            }
        }
        handleCancelSkill(e)
        const newForm = { ...formData, skills: formData.skills };
        setFormData(newForm);
    }

    function handleNameChange(e) {
        const newEditSkillsForm = { ...formData.editSkills, name: e.target.value };
        const newForm = { ...formData, editSkills: newEditSkillsForm }
        setFormData(newForm);
    }

    /*

    Work Experience Section
    
    */

    function handleAddExperience() {
        document.getElementById("experiences-list").style.display = "none";
        document.getElementById("experience-form").style.display = "flex";
        document.getElementById("add-experience-button").style.display = "none";
        setFormData(formData);
    }

    function handleSubmitExperience(e) {
        e.preventDefault();

        const experienceData = new FormData(e.target);
        const title = experienceData.get("position-title");
        const company = experienceData.get("company-name");
        const startingYear = experienceData.get("starting-year");
        const endingYear = experienceData.get("ending-year");
        const description = experienceData.get("work-description");

        formData.experience.push({ id: uniqueId(), title: title, company: company, startingDate: startingYear, endingDate: endingYear, description: description });
        const newForm = { ...formData, experience: formData.experience };
        setFormData(newForm);

        document.getElementById("experience-form").style.display = "none";
        document.getElementById("edit-experience-form").style.display = "none";
        document.getElementById("experiences-list").style.display = "flex";

        if (formData.experience.length >= 3) document.getElementById("add-experience-button").style.display = "none";
        else document.getElementById("add-experience-button").style.display = "flex";
    }

    function ListExperiences(props) {
        return (
            <ul id="experiences-list" className="experiences-list">
                {props.experience.map((experience) => {
                    return experience ? <li key={experience.id}>
                        <div className="experience-item">
                            <h3 className="experience-item-name">{experience.title}</h3>
                            <div className="experience-item-icons">
                                <button className="experience-item-button" onClick={handleEditExperience}><img className="experience-item-icon edit-icon" id={experience.id.toString()} src={editIcon} /></button>
                                <button className="experience-item-button" id="edit-experience-button" onClick={handleDeleteExperience}><img className="experience-item-icon delete-icon" id={experience.id.toString()} src={deleteIcon} /></button>
                            </div>
                        </div>
                    </li> : null;
                })
                }
            </ul >
        );
    }

    function handleCancelExperience(e) {
        document.getElementById("experience-form").style.display = "none";
        document.getElementById("edit-experience-form").style.display = "none";
        document.getElementById("experiences-list").style.display = "flex";

        if (formData.experience.length >= 3) document.getElementById("add-experience-button").style.display = "none";
        else document.getElementById("add-experience-button").style.display = "flex";
        setFormData(formData);
    }

    function handleDeleteExperience(e) {
        const id = Number(e.target.id);
        for (let i = 0; i < formData.experience.length; i++) {
            if (Number(formData.experience[i].id) === id) {
                formData.experience.splice(i, 1);
            } else {
                console.log(typeof id + " " + typeof formData.experience[i].id);
            }
        }

        if (formData.experience.length <= 3) document.getElementById("add-experience-button").style.display = "flex";
        else document.getElementById("add-experience-button").style.display = "none";

        const newForm = { ...formData, experience: formData.experience };
        setFormData(newForm);
    }

    function handleEditExperience(e) {
        const id = Number(e.target.id);
        const experienceEditForm = document.getElementById("edit-experience-form");
        const addExperienceButton = document.getElementById("add-experience-button");
        const experiencesList = document.getElementById("experiences-list");

        for (let i = 0; i < formData.experience.length; i++) {
            if (Number(formData.experience[i].id) === id) {

                addExperienceButton.style.display = "none";
                experienceEditForm.style.display = "flex";
                experiencesList.style.display = "none";

                formData.editExperience.id = formData.experience[i].id;
                formData.editExperience.title = formData.experience[i].title;
                formData.editExperience.company = formData.experience[i].company;
                formData.editExperience.startingDate = formData.experience[i].startingDate;
                formData.editExperience.endingDate = formData.experience[i].endingDate;
                formData.editExperience.description = formData.experience[i].description;
            }
        }

        const newForm = { ...formData, editExperience: formData.editExperience };
        setFormData(newForm);
    }

    function handleSubmitEditExperience(e) {
        e.preventDefault();
        console.log(e.target);
        const id = Number(formData.editExperience.id);
        for (let i = 0; i < formData.experience.length; i++) {
            if (Number(formData.experience[i].id) === id) {

                const experienceData = new FormData(e.target);
                const title = experienceData.get("position-title");
                const company = experienceData.get("company-name");
                const startingYear = experienceData.get("starting-year");
                const endingYear = experienceData.get("ending-year");
                const description = experienceData.get("work-description");

                const form = { id: id, title: title, company: company, startingDate: startingYear, endingDate: endingYear, description: description };
                formData.experience.splice(i, 1, form);
            }
        }
        handleCancelExperience(e)
        const newForm = { ...formData, experience: formData.experience };
        setFormData(newForm);
    }

    function handleTitleChange(e) {
        const newEditExperienceForm = { ...formData.editExperience, title: e.target.value };
        const newForm = { ...formData, editExperience: newEditExperienceForm }
        setFormData(newForm);
    }

    function handleCompanyChange(e) {
        const newEditExperienceForm = { ...formData.editExperience, company: e.target.value };
        const newForm = { ...formData, editExperience: newEditExperienceForm }
        setFormData(newForm);
    }

    function handleStartDateExperienceChange(e) {
        const newEditExperienceForm = { ...formData.editExperience, startingDate: e.target.value };
        const newForm = { ...formData, editExperience: newEditExperienceForm }
        setFormData(newForm);
    }

    function handleEndDateExperienceChange(e) {
        const newEditExperienceForm = { ...formData.editExperience, endingDate: e.target.value };
        const newForm = { ...formData, editExperience: newEditExperienceForm }
        setFormData(newForm);
    }

    function handleDescriptionChange(e) {
        const newEditExperienceForm = { ...formData.editExperience, description: e.target.value };
        const newForm = { ...formData, editExperience: newEditExperienceForm }
        setFormData(newForm);
    }

    /*

    Content, Config Switch Section

    */

    function handleConfigClick(e) {
        document.getElementById("field-content").style.display = "none";
        document.getElementById("config-content").style.display = "flex";

        document.getElementById("config-button").style.backgroundColor = "#363636";
        document.getElementById("config-button").style.color = "whitesmoke";
        document.getElementById("content-button").style.backgroundColor = "whitesmoke";
        document.getElementById("content-button").style.color = "grey";

        const newConfigSwitch = "config";
        setconfigSwitch(newConfigSwitch);
    }

    function handleContentClick(e) {
        document.getElementById("config-content").style.display = "none";
        document.getElementById("field-content").style.display = "flex";

        document.getElementById("content-button").style.backgroundColor = "#363636";
        document.getElementById("content-button").style.color = "whitesmoke";
        document.getElementById("config-button").style.backgroundColor = "whitesmoke";
        document.getElementById("config-button").style.color = "grey";

        const newConfigSwitch = "content";
        setconfigSwitch(newConfigSwitch);
    }

    return (
        <section className='content'>
            <div className="fields">
                <h1 className="heading">CV BUILDER</h1>
                <p className="heading-text">
                    Dynamically build your own CV using the power of React <a href="https://react.dev/"><img className='reactLogo' src={reactLogo}></img></a> Just fill in the fields below.
                </p>

                <ConfigSwitch onContentClick={handleContentClick} onConfigClick={handleConfigClick} />

                <div className="config-content" id="config-content">
                    <BackgroundColor />
                    <Font />
                    <Print />
                </div>

                <div className="field-content" id="field-content">
                    <BasicInfoForm
                        firstName={formData.firstName} handleFirstNameChange={handleFirstNameChange}
                        lastName={formData.lastName} handleLastNameChange={handleLastNameChange}
                        titleOfPosition={formData.titleOfPosition} handleTitleOfPositionChange={handleTitleOfPositionChange}
                        summary={formData.summary} handleSummaryChange={handleSummaryChange}
                    />

                    <PersonalDetailsForm
                        number={formData.number} handleNumberChange={handleNumberChange}
                        email={formData.email} handleEmailChange={handleEmailChange}
                        location={formData.location} handleLocationChange={handleLocationChange}
                    />

                    <section className="education">
                        <h2>EDUCATION</h2>
                        <ListEducations educations={formData.education} />
                        <EducationForm
                            id="education-form"
                            className="education-form"
                            onSubmit={handleSubmitEducation}
                            handleCancelEducation={handleCancelEducation}
                        />
                        <EducationForm
                            id="edit-education-form"
                            className="education-form"
                            onSubmit={handleSubmitEditEducation}
                            handleCancelEducation={handleCancelEducation}

                            qualification={formData.editEducation.qualification} handleQualificationChange={handleQualificationChange}
                            institute={formData.editEducation.institute} handleInstituteChange={handleInstituteChange}
                            startValue={formData.editEducation.startingDate} handleStartDateChange={handleStartDateChange}
                            endValue={formData.editEducation.endingDate} handleEndDateChange={handleEndDateChange}
                        />
                        <button className="add-education-button" id="add-education-button" onClick={handleAddEducation}>Add education +</button>
                    </section>

                    <section className="skills">
                        <h2>SKILLS</h2>
                        <ListSkills skills={formData.skills} />
                        <SkillsForm
                            id="skill-form"
                            onSubmit={handleSubmitSkill}
                            handleCancelSkill={handleCancelSkill}
                        />
                        <SkillsForm
                            id="edit-skill-form"
                            onSubmit={handleSubmitEditSkill}
                            handleCancelSkill={handleCancelSkill}
                            name={formData.editSkills.name} handleNameChange={handleNameChange}
                        />
                        <button className="add-skill-button" id="add-skill-button" onClick={handleAddSkill}>Add skill +</button>
                    </section>


                    <section className="work-experience">
                        <h2>Work Experience</h2>
                        <ListExperiences experience={formData.experience} />
                        <WorkExperienceForm
                            id="experience-form"
                            className="experience-form"
                            onSubmit={handleSubmitExperience}
                            handleCancelExperience={handleCancelExperience}
                        />
                        <WorkExperienceForm
                            id="edit-experience-form"
                            className="experience-form"
                            onSubmit={handleSubmitEditExperience}
                            handleCancelExperience={handleCancelExperience}

                            title={formData.editExperience.title} handleTitleChange={handleTitleChange}
                            company={formData.editExperience.company} handleCompanyChange={handleCompanyChange}
                            startValue={formData.editExperience.startingDate} handleStartDateExperienceChange={handleStartDateExperienceChange}
                            endValue={formData.editExperience.endingDate} handleEndDateExperienceChange={handleEndDateExperienceChange}
                            description={formData.editExperience.description} handleDescriptionChange={handleDescriptionChange}
                        />
                        <button className="add-experience-button" id="add-experience-button" onClick={handleAddExperience}>Add experience +</button>
                    </section>
                </div>
            </div>

            <div className="resume-background">
                <div className="resume" id="section-to-print">
                    <BasicInfoDisplay
                        firstName={formData.firstName.toUpperCase()}
                        lastName={formData.lastName.toUpperCase()}
                        titleOfPosition={formData.titleOfPosition.toUpperCase()}
                        cvInitials={cvInitials}
                    />

                    <div className='cv-content'>
                        <div className="cv-content-left-container">

                            <PersonalDetailsDisplay
                                number={formData.number}
                                email={formData.email}
                                location={formData.location}
                            />

                            <EducationDisplay educations={formData.education} />

                            <SkillsDisplay skills={formData.skills} />

                        </div>
                        <div className="cv-content-right-container">

                            <SummaryDisplay summary={formData.summary} />

                            <WorkExperienceDisplay experience={formData.experience} />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}