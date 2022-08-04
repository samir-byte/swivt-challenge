import {Link} from 'react-router-dom'

const Card = () => {
    return ( 
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to='/owner1/repo1'>View Details</Link>
            </div>
        </div>
    );

}

export default Card