import React from 'react'
import YoutubeEmbed from './YoutubeEmbed'

function ProjectItem({project}) {


    let stackElements = project.stack.map(item => {
        return <h7>{item}</h7>
    })

    return (<div >
    <h4 className="project-titles">{project.projectName}</h4>
    <YoutubeEmbed embedId={project.demo} />
    {/* <img className="project-img" src={project.image} alt="project screenshot"/><br/> */}
    <a target="_blank" rel="noreferrer" href={project.gitHubFrontend}>Github Frontend</a>  ***
    <a target="_blank" rel="noreferrer" href={project.gitHubBackend}>Github Backend</a>
    {stackElements}  
    <p>{project.description}</p>
    </div>
    )
}

export default ProjectItem;