import PropTypes from 'prop-types';
import '../../styles/project/_project.scss';

function ProjectCard({ project }) {
    return (
        <div className="card">
            <h2 className="card__projectTitle">
                <span className="card__projectTitle--text">{project.project_name || 'Personal Project Card'}</span>
            </h2>
            <div className="card__author">
                <div
                    className="card__authorPhoto"
                    style={{
                        background: project.author_photo
                            ? `url(${project.author_photo})`
                            : null,
                    }}
                ></div>
                <p className="card__job">{project.author_job || 'Full Stack Developer'}</p>
                <h3 className="card__name">{project.author_name || 'Author Name'}</h3>
            </div>
            <div className="card__project">
                <h3 className="card__projectName">{project.project_name || 'Elegant Workspace'}</h3>
                <p className="card__slogan">{project.project_slogan || 'Exclusive Design'}</p>
                <h3 className="card__descriptionTitle">Project Description</h3>
                <p className="card__description">{project.project_description || 'No description provided.'}</p>
                <div className="card__technicalInfo">
                    <p className="card__technologies">{project.project_technologies || 'React JS - HTML - CSS'}</p>
                    <a className="icon icon__www" href={project.project_demo} target="_blank" rel="noopener noreferrer">
                        Web Link
                    </a>
                    <a className="icon icon__github" href={project.project_repo} target="_blank" rel="noopener noreferrer">
                        GitHub Link
                    </a>
                </div>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
};

export default ProjectCard;
