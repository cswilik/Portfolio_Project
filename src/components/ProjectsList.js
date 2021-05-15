import React from 'react'
import projectList from '../projects'
import ProjectItem from './ProjectItem'

function ProjectsList({props}) {
    
  let projects = projectList.map(item => {
       return <ProjectItem project={item}/>
    })

    return (<div className="About-me">
        <h1>Projects</h1>
        {projects}
       </div>)
}

export default ProjectsList;