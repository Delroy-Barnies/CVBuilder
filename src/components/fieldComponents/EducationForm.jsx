import { Input, StartToEndDate } from "../Input";

export function EducationForm(props) {
    return (
        <form id={props.id} className={props.className} onSubmit={props.onSubmit}>
            <Input maxLength="23" className="name-of-qualification" label="Name of qualification" type="text" placeholder="Degree in Computer Science" value={props.qualification} onChange={props.handleQualificationChange} required />
            <Input maxLength="34" className="name-of-institute" label="Name of institiute" type="text" placeholder="Durban University Of Technology" value={props.institute} onChange={props.handleInstituteChange} required />
            <StartToEndDate id="institute" startValue={props.startValue} endValue={props.endValue} onStartChange={props.handleStartDateChange} onEndChange={props.handleEndDateChange} />
            <div className="education-buttons">
                <button className="submit-education-button" type="submit">Submit</button>
                <button className="cancel-education-button" type="button" onClick={props.handleCancelEducation}>Cancel</button>
            </div>
        </form>
    )
}