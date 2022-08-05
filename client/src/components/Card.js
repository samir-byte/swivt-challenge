import {Link} from 'react-router-dom'
import {GoEye} from "react-icons/go"

const Card = (props) => {
    const {repo} = props;
    const formattedDate = repo.last_update.split('T')[0];
    const linkState = {
        owner: repo.author,
        repo: repo.name
    }
    const str = repo.description
    
    return ( 
        <div className="col-sm-4 mt-3">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{repo.author}</h6>
                <p className="card-text">{str}</p>
                <div className="row">
                <div className='col-sm'>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo-forked mr-1">
                        <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                    </svg>
                    {repo.forks}
                    </div>
                    <div className="col-sm">
                    <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star">
                        <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                    </svg>
                    {repo.stars}
                    </div>
                </div>

                <div className='row'>
                <div className="col-sm">
                        {formattedDate}
                    </div>
                    
                    <div className="col-sm">
                        <GoEye/>
                        {repo.watchers}
                    </div>
                </div>
                <Link to={`repository/${repo.author}/${repo.name}`} state={{ ...linkState }} className="card-link">View</Link>
                
            </div>
        </div>
        </div>
    );

}

export default Card