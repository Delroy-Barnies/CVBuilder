import { Input } from "../Input";

export function SkillsForm(props) {
    return (
        <form id={props.id} className="skills-form" onSubmit={props.onSubmit}>
            <Input maxLength="34" className="skill-name" label="Enter a skill" type="text" placeholder="UI / UX Designer" onChange={props.handleNameChange} value={props.name} />
            <div className="skill-buttons">
                <button className="submit-skill-button" type="submit">Submit</button>
                <button className="cancel-skill-button" type="button" onClick={props.handleCancelSkill}>Cancel</button>
            </div>
        </form>
    )
}