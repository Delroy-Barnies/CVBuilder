import { uniqueId } from 'lodash';

export function WorkExperienceDisplay(props) {
    return (
        <div className="cv-experience-section">
            <h4 className="cv-h2 cv-experience-heading">EXPERIENCE</h4>
            {props.experience.map((experience) => {
                return experience ? <li key={uniqueId()}>
                    <div className="cv-experience-container">
                        <h5 className="cv-institute">{experience.title.toUpperCase()}</h5>
                        <p className="cv-contact-elem-p">{experience.company}</p>
                        <p className="cv-years-attended">{experience.startingDate} - {experience.endingDate}</p>
                        <p className='cv-contact-elem-p'>{experience.description}</p>
                    </div>
                </li> : null;
            })}

        </div>
    )
}