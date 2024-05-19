export function BasicInfoDisplay(props) {
    return (
        <>
            <div className="cv-header">
                <h1 className='cv-initials'>{props.cvInitials}</h1>
                <div className='cv-name-and-surname'>
                    <h2 className="cv-name">{props.firstName}</h2>
                    <h2 className="cv-surname">{props.lastName}</h2>
                </div>
                <h3 className="cv-title-of-position">{props.titleOfPosition}</h3>
            </div>
        </>
    )
}