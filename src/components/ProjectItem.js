import React from 'react'
import {Link} from 'react-router-dom'

function ProjectItem({project}) {
    return (<div >
    <h4 className="text-font">{project.projectName}</h4>
    <a href={project.githubFrontend}>Github Frontend</a>
    <img className="project-img" src={project.image}/>

    <p>{project.description}</p>
    </div>
    )
}

export default ProjectItem;