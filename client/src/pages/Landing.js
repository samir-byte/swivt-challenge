import { Header,Card,Alert, Paginator } from "../components"
import { useState } from "react";

const Landing = () => {

    const [isLoaded, setisLoaded] = useState(true);
    return(
        <div className="container">
            <nav className="mb-3">
                <Header/>
            </nav>
            {isLoaded ? (
                <div className="container mt-3">
                <div className="row">
                    <div className="col-sm">
                        <h4>Repositories: 2022 Results</h4>
                        <Card />
                        
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
                <Paginator/>
            </div>
            ):(
                <Alert 
                    alertType="danger"
                    alertText="Please search above"
                />
            )}
            
        </div>
    )
}


export default Landing