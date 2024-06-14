import react from "react"
import user from "../data/user";

function Links({ github, linkedin}){
    return(
        <div>
            <h3>Links</h3>
            <a href={github}>{user.links.github}</a>
            <a href={linkedin}>{user.links.linkedin}</a>
        </div>
    );
}

export default Links;