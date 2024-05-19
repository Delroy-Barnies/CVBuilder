import { Input, StartToEndDate, Textarea } from "../Input";

export function WorkExperienceForm(props) {
    return (
        <form id={props.id} className={props.className} onSubmit={props.onSubmit}>
            <Input maxLength="35" className="position-title" label="Position title" type="text" placeholder="UX / UI Designer" value={props.title} onChange={props.handleTitleChange} />
            <Input maxLength="40" className="company-name" label="Company name" type="text" placeholder="Unox Software Solutions" value={props.company} onChange={props.handleCompanyChange} />
            <StartToEndDate id="company" startValue={props.startValue} endValue={props.endValue} onStartChange={props.handleStartDateExperienceChange} onEndChange={props.handleEndDateExperienceChange} />
            <Textarea maxLength="250" className="work-description" label="Description" type="text" placeholder="" value={props.description} onChange={props.handleDescriptionChange} />
            <div className="experience-buttons">
                <button className="submit-experience-button" type="submit">Submit</button>
                <button className="cancel-experience-button" type="button" onClick={props.handleCancelExperience}>Cancel</button>
            </div>
        </form>
    )
}