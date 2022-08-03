import { Header,Card } from "../components"

const Landing = () => {


    return(
        <div className="container">
            <nav>
                <Header/>
            </nav>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm">
                        <h4>Repositories: 2022 Results</h4>
                    </div>
                    <div className="col-sm">
                        <select className="form-control">
                            <option>Sort By: Best match</option>
                            <option value="stars">Stars</option>
                            <option value="forks">Forks</option>
                            <option value="updated">Updated</option>
                            <option value="help-wanted-issues">Help wanted</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Landing