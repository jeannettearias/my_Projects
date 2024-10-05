import PropTypes from 'prop-types';

function ProjectCard({ jsonData }) {
    console.log(jsonData);
    const technologies = jsonData.technologies;

    console.log(technologies);

    return (
        <article>
            <h2 className="card">
                <span className="card__projectTitle--text" >Personal project cards</span>
            </h2>
            <fieldset className='card'>
                <div className="card__author">
                    <div className="card__authorPhoto"
                        style={{ backgroundImage: jsonData.photo ? `url(${jsonData.photo})` : null }} ></div>
                    <p className="card__job">
                        {jsonData.job || "Full stack Developer"}</p>
                    <h3 className="card__name">
                        {jsonData.author || "Emmelie Bjôrklund"}</h3>
                </div>

                <div className="card__project">
                    <h3 className="card__name card_name">
                        {jsonData.name || "Elegant Workspace"}</h3>
                    <h3 className="card__descriptionTitle">Product description</h3>
                    <p className="card__description">
                        {jsonData.desc || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione"} </p>
                    <div className="card__technicalInfo">
                        <p className="card__technologies">{technologies.join(' - ') || "React JS - HTML - CSS"}</p>
                        <a className="icon icon__www" href={jsonData.demo}
                            target="_blank" rel="noopener noreferrer" title="Click here to see the project online">Web link</a>
                        <a className="icon icon__github" href={jsonData.repo}
                            target="_blank" rel="noopener noreferrer" title="Click here to see the project code">GitHub link</a>

                    </div>
                </div>
            </fieldset>
        </article>
    );
}

ProjectCard.propTypes = {
    jsonData: PropTypes.object.isRequired,
};

export default ProjectCard;