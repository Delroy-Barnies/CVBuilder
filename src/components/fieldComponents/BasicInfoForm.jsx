import { useState } from "react";
import { Input, Textarea } from "../Input";

export function BasicInfoForm(props) {
    return (
        <section className="basic-info">
            <h2>BASIC INFO</h2>
            <form className="basic-info-form">

                <div className="name-and-surname">
                    <div className="name-input-container">
                        <label for="name">Name</label>
                        <input maxLength="8" className="name" name="name" placeholder="John" value={props.firstName} onChange={props.handleFirstNameChange}></input>
                    </div>
                    <div className="name-input-container">
                        <label for="surname">Surname</label>
                        <input maxLength="9" className="surname" name="surname" placeholder="Valentine" value={props.lastName} onChange={props.handleLastNameChange}></input>
                    </div>
                </div>

                <Input maxLength="30" className="title-of-position" label="Title of position" type="text" placeholder="Fullstack Frontend Developer"
                    value={props.titleOfPosition} onChange={props.handleTitleOfPositionChange} />
                <Textarea maxLength="300" className="short-summary" label="A short summary of you" type="text" placeholder="" value={props.summary} onChange={props.handleSummaryChange} />
            </form>
        </section>
    );
}