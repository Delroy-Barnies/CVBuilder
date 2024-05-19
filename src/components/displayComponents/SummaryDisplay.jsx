export function SummaryDisplay(props) {
    return (
        <div className="cv-summary-section">
            <h4 className="cv-h2">SUMMARY</h4>
            <p className="cv-contact-elem-p">
                {props.summary}
            </p>
        </div>
    )
}