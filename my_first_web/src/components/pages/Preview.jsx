import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import './ProjectCard';

function Preview({ jsonData }) {
    //Check if jsonData has any meaningful content
    if (!jsonData || Object.keys(jsonData).length === 0) {
        return <div> Loading... </div>; //or any other loading indicator...
    }


    return (
        <section className="preview">
            <div className='projectImage'
                style={{ backgroundImage: jsonData.image ? `url(${jsonData.image})` : null }}></div>
            <ProjectCard jsonData={jsonData} />

        </section>
    );
}

Preview.propTypes = {
    jsonData: PropTypes.object.isRequired,

};
export default Preview;