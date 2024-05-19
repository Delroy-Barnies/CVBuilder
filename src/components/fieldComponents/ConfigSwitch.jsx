export function ConfigSwitch(props) {
    return (
        <div className="config-switch">
            <div>
                <button className="content-button" id="content-button" onClick={props.onContentClick}>Content</button>
            </div>
            <div>
                <button className="config-button" id="config-button" onClick={props.onConfigClick}>Config</button>
            </div>
        </div>
    )
}