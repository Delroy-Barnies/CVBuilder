export function Input(props) {
    return (
        <div className="input-container">
            <label for={props.className}>{props.label}</label>
            <input maxLength={props.maxLength} className={props.className + " input"} name={props.className} type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} required={props.required}></input>
        </div>
    )
}

export function Textarea(props) {
    return (
        <div className="input-container">
            <label for={props.className}>Description</label>
            <textarea maxLength={props.maxLength} className={props.className + " textarea"} name={props.className} type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}></textarea>
        </div>
    )
}

export function StartToEndDate(props) {
    return (
        <div className="years-attended">
            <div className="name-input-container">
                <label for="starting-year">Starting date</label>
                <input maxLength="4" id={props.id} className="starting-year" name="starting-year" value={props.startValue} onChange={props.onStartChange} placeholder="yyyy"></input>
            </div>
            <div className="name-input-container">
                <label for="ending-year">Ending date</label>
                <input maxLength="4" id={props.id} className="ending-year" name="ending-year" value={props.endValue} onChange={props.onEndChange} placeholder="yyyy"></input>
            </div>
        </div>
    )
}