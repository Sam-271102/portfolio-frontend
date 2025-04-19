import React from 'react';

const ProjectCard = ({ project }) => (
  <div className="ProjectCard">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
    {project.link && (
      <p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </p>
    )}
  </div>
);

export default ProjectCard;
