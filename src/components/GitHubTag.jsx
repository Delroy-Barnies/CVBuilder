import githubLogo from '../assets/github.svg';


export function GitHubTag() {
    return (
        <div className="github-tag">
            <img src={githubLogo} /> <a className="github-tag-link"
                href="https://github.com/Delroy-Barnies/CVBuilder">GitHub Repository</a>
        </div>
    )
}