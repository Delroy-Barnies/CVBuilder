import telephoneIcon from '../../assets/telephone.svg'
import messageIcon from '../../assets/message.svg'
import locationIcon from '../../assets/location.svg'

export function PersonalDetailsDisplay(props) {
    return (
        <div className="cv-contact-section">
            <h4 className="cv-h2">CONTACT</h4>
            <div className="cv-contact-elem"><img className="cv-contact-elem-icon" src={telephoneIcon}></img> <p className="cv-contact-elem-p">{props.number}</p></div>
            <div className="cv-contact-elem"><img className="cv-contact-elem-icon message-icon" src={messageIcon}></img> <p className="cv-contact-elem-p">{props.email}</p></div>
            <div className="cv-contact-elem"><img className="cv-contact-elem-icon" src={locationIcon}></img> <p className="cv-contact-elem-p">{props.location}</p></div>
        </div>
    )
}