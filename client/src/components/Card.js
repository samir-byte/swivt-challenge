import {Link} from 'react-router-dom'

const Card = (props) => {
    const {repo} = props;
    const formattedDate = repo.last_update.split('T')[0];

    return ( 
        <div className="col-sm-4">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{repo.author}</h6>
                <p className="card-text">{repo.description}</p>
                <div className="row">
                    <div className="col-sm">
                        {formattedDate}
                    </div>
                    <div className="col-sm">
                        {repo.stars}
                    </div>
                    <div className="col-sm">
                        {repo.watchers}
                    </div>
                </div>
                <Link to={`repository/${repo.author}/${repo.name}`} className="card-link">View</Link>
                
            </div>
        </div>
        </div>
    );

}

export default Card