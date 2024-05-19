import { uniqueId } from 'lodash';

export function EducationDisplay(props) {
    return (
        <div className="cv-education-section">
            <h4 className="cv-h2">EDUCATION</h4>
            <ul className="educations-list">
                {props.educations.map((education) => {
                    return education ? <li key={uniqueId()}>
                        <div className="cv-institute-container">
                            <h5 className="cv-institute">{education.qualification.toUpperCase()}</h5>
                            <p className="cv-contact-elem-p">{education.institute}</p>
                            <p className="cv-years-attended">{education.startingDate} - {education.endingDate}</p>
                        </div>
                    </li> : null;
                })}
            </ul>
        </div>
    )
}