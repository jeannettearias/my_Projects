import PropTypes from 'prop-types';
import '../../styles/project/_project.scss'
import '../../styles/App.scss'

function ProjectCard({ project }) {
    return (
        <article className="card">
            <h2 className="card__projectTitle">
                <span className="card__projectTitle--text">Personal project card</span>
            </h2>
            <div className="card__author" >
                <div className="card__authorPhoto" style={{ background: project.author_photo ? `url(${project.author_photo})` : null }} ></div>
                <p className="card__job">{project.author_job || 'Full Stack Developer'} </p>
                <h3 className="card__name">{project.author_name || 'Emmelie Bjôrklund'}</h3>
            </div>

            <div className="card__project">
                <h3 className="card__projectName">{project.project_name || 'Elegant Workspace'}</h3>
                <p className="card__slogan">{project.project_slogan || 'Exclusives Design'}</p>
                <h3 className="card__descriptionTitle">project Description</h3>
                <p className="card__description">{project.project_description || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione'}</p>
                <div className="card__technicalInfo" >
                    <p className="card__technologies">{project.project_technologies || 'React JS - HTML - CSS'}</p>
                    <p className="icon icon__www" href={project.project_demo} title='Click here to see the project' >Web Link</p>
                    <p className="icon icon__github" href={project.project_repo} title='Click here to see the project code' >Github Link</p>
                </div>
            </div>
        </article>

    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        idproject: PropTypes.number.isRequired,
        author_photo: PropTypes.string,
        author_job: PropTypes.string,
        author_name: PropTypes.string,
        project_name: PropTypes.string,
        project_slogan: PropTypes.string,
        project_description: PropTypes.string,
        project_technologies: PropTypes.string,
        project_demo: PropTypes.string,
        project_repo: PropTypes.string,
    }).isRequired,
};

export default ProjectCard;