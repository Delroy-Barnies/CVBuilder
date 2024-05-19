import { uniqueId } from 'lodash';

export function SkillsDisplay(props) {
    return (
        <div className="cv-skills-section">
            <h4 className='cv-h2'>SKILLS</h4>
            <ul className="cv-skills-list">
                {props.skills.map((skill) => {
                    return skill ? <li key={uniqueId()}>
                        <p className="cv-contact-elem-p">{skill.name}</p>
                    </li> : null;
                })}
            </ul>
        </div>
    )
}