import { forEach } from 'lodash';
import { useState } from 'react'

export function BackgroundColor(props) {

    const [backgroundColor, setBackgroundColor] = useState("#F4EAE9");
    const root = document.querySelector(":root");

    function handleBackgroundColorChange(e) {
        const newBackgroundColor = e.target.value;
        root.style.setProperty("--contentLeftContainer", newBackgroundColor);
        root.style.setProperty("--initials", newBackgroundColor);
        root.style.setProperty("--fieldBackgroundColor", newBackgroundColor);
        root.style.setProperty("--favcolor", newBackgroundColor);
        setBackgroundColor(newBackgroundColor);
    }

    return (
        <div className="background-color">
            <h2 className="background-color-heading">Accent Color</h2>
            <div className="background-color-picker">
                <label for="favcolor"></label>
                <input type="color" id="favcolor" name="favcolor" value="#F4EAE9" onChange={handleBackgroundColorChange} />
            </div>
        </div>
    )
}