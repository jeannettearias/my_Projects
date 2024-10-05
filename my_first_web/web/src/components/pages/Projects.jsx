import PropTypes from 'prop-types';
import Preview from './Preview';

function Projects({ jsonData }) {
    return (
        <div>
            <h1 className='title'>Projects</h1>
            <Preview jsonData={jsonData} />

        </div>
    );
}
Projects.propTypes = {
    jsonData: PropTypes.object.isRequired,

};

export default Projects;
