import { Header,Card,Alert, Paginator } from "../components"
import { AppContext } from "../context/appContext";
import { useContext } from "react";

const Landing = () => {

    const {state, setState} = useContext(AppContext);
    console.log(state);
    const { data, isLoaded, error, totalCount } = state;
    const pageCount = Math.ceil(totalCount / 10);
    return(
        <div className="container">
            <nav className="my-5">
                <Header/>
            </nav>
            {isLoaded ? (
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-sm">
                    <h4>Repositories: {totalCount} Results</h4>
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
                {/* <div className="row mt-3"> */}
                    <div className="row justify-content-md-center mt-3">
                        {data.map((repo) => {
                            return (
                                <Card key={repo.id} repo={repo}/>
                            )
                        })}
                    </div>
                {/* </div> */}
                <Paginator
                    pageCount={pageCount}
                />
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