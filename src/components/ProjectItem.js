import React from 'react'
import YoutubeEmbed from './YoutubeEmbed'

function ProjectItem({project}) {


    // let stackElements = project.stack.map(item => {
    //     return <h6 className="stack-titles">{item}</h6>
    // })

    return (<div >
        <h3 className="project-titles">{project.projectName}</h3>
        <a target="_blank" rel="noreferrer" className="github-links" href={project.gitHubFrontend}>Github Frontend</a>  
        <a target="_blank" rel="noreferrer" className="github-links" href={project.gitHubBackend}>Github Backend</a>
        <YoutubeEmbed embedId={project.demo} />
        <p className="description">{project.description}</p>
    </div>
    )
}

export default ProjectItem;