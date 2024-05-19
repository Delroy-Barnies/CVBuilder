import { Input } from "../Input";

export function PersonalDetailsForm(props) {
    return (
        <section className="personal-details">
            <h2>PERSONAL DETAILS</h2>
            <form className="personal-details-form">
                <Input classname="number" label="Phone number" type="text" placeholder="+270728057683" value={props.number} onChange={props.handleNumberChange} />
                <Input classname="email" label="Email" type="email" placeholder="JohnValentine@gmail.com" value={props.email} onChange={props.handleEmailChange} />
                <Input classname="home-address" label="Home address" type="text" placeholder="12 Kingston Ave. Riverdale. London" value={props.location} onChange={props.handleLocationChange} />
            </form>
        </section>
    )
}