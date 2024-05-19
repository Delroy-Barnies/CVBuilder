import { useState } from 'react'

export function Font(props) {

    const [font, setFont] = useState("Default");

    const root = document.querySelector(":root");

    function handleLatoClicked(e) {

        removeAllFontColors()
        e.target.style.backgroundColor = "#363636";
        e.target.style.color = "whitesmoke";

        root.style.setProperty("--paragraph", "Lato");
        root.style.setProperty("--headingTwo", "Lato");
        root.style.setProperty("--institute", "Lato");
        root.style.setProperty("--titleOfPosition", "Lato");
        root.style.setProperty("--nameAndSurname", "Lato");

        const newFont = "Lato";
        setFont(newFont);
    }

    function handleRobotoClicked(e) {

        removeAllFontColors()
        e.target.style.backgroundColor = "#363636";
        e.target.style.color = "whitesmoke";

        root.style.setProperty("--paragraph", "Roboto");
        root.style.setProperty("--headingTwo", "Roboto");
        root.style.setProperty("--institute", "Roboto");
        root.style.setProperty("--titleOfPosition", "Roboto");
        root.style.setProperty("--nameAndSurname", "Roboto");

        const newFont = "Roboto";
        setFont(newFont);
    }

    function handleMonoClicked(e) {

        removeAllFontColors()
        e.target.style.backgroundColor = "#363636";
        e.target.style.color = "whitesmoke";

        root.style.setProperty("--paragraph", "Reddit Mono");
        root.style.setProperty("--headingTwo", "Reddit Mono");
        root.style.setProperty("--institute", "Reddit Mono");
        root.style.setProperty("--titleOfPosition", "Roboto");
        root.style.setProperty("--nameAndSurname", "Roboto");

        const newFont = "Reddit Mono";
        setFont(newFont);
    }

    function handleSansClicked(e) {

        removeAllFontColors()
        e.target.style.backgroundColor = "#363636";
        e.target.style.color = "whitesmoke";

        root.style.setProperty("--paragraph", "sans-serif");
        root.style.setProperty("--headingTwo", "sans-serif");
        root.style.setProperty("--institute", "sans-serif");
        root.style.setProperty("--titleOfPosition", "sans-serif");
        root.style.setProperty("--nameAndSurname", "sans-serif");

        const newFont = "sans-serif";
        setFont(newFont);
    }

    function handleLoraClicked(e) {

        removeAllFontColors()
        e.target.style.backgroundColor = "#363636";
        e.target.style.color = "whitesmoke";

        root.style.setProperty("--paragraph", "Lora");
        root.style.setProperty("--headingTwo", "Lora");
        root.style.setProperty("--institute", "Lora");
        root.style.setProperty("--titleOfPosition", "Lora");
        root.style.setProperty("--nameAndSurname", "Lora");

        const newFont = "Lora";
        setFont(newFont);
    }

    function handleKarlaClicked(e) {

        removeAllFontColors()
        e.target.style.backgroundColor = "#363636";
        e.target.style.color = "whitesmoke";

        root.style.setProperty("--paragraph", "Karla");
        root.style.setProperty("--headingTwo", "Karla");
        root.style.setProperty("--institute", "Karla");
        root.style.setProperty("--titleOfPosition", "Karla");
        root.style.setProperty("--nameAndSurname", "Karla");

        const newFont = "Karla";
        setFont(newFont);
    }

    function handleDefaultClicked(e) {

        removeAllFontColors()
        e.target.style.backgroundColor = "#363636";
        e.target.style.color = "whitesmoke";

        root.style.setProperty("--paragraph", "Lato");
        root.style.setProperty("--headingTwo", "Raleway");
        root.style.setProperty("--institute", "Raleway");
        root.style.setProperty("--titleOfPosition", "Raleway");
        root.style.setProperty("--nameAndSurname", "Lato");

        const newFont = "Karla";
        setFont(newFont);
    }

    function removeAllFontColors() {
        document.querySelectorAll(".font").forEach(fontButton => {
            fontButton.style.backgroundColor = "white";
            fontButton.style.color = "#363636";
        });
    }

    return (
        <div className="fonts">
            <h2 className="fonts-heading">Fonts</h2>
            <ul className="fonts-list">
                <li className="lato font" onClick={handleLatoClicked}>Lato</li>
                <li className="roboto font" onClick={handleRobotoClicked}>Roboto</li>
                <li className="reddit-Mono font" onClick={handleMonoClicked}>Reddit <br />Mono</li>
                <li className="sans font" onClick={handleSansClicked}>Sans</li>
                <li className="lora font" onClick={handleLoraClicked}>Lora</li>
                <li className="karla font" onClick={handleKarlaClicked}>Karla</li>
                <li className="default font" onClick={handleDefaultClicked}>Default</li>
            </ul>
        </div>
    )
}