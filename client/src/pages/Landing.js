import { Header,Card,Blank, Paginator } from "../components"
import { searchRepo } from "../services";
import { AppContext } from "../context/appContext";
import { useContext } from "react";

const Landing = () => {

    const {state, setState} = useContext(AppContext);
    const { data, isLoaded, error, totalCount, query } = state;

    //page count on total data
    const pageCount = Math.ceil(totalCount / 10);

    const handleSelect = async(e) => {
        // console.log(e.target.value,"Sort")
        let sort = e.target.value
        try{
            let data = await searchRepo(query,1,sort)
            // console.log(data,"data")
            setState({
                ...state,
                data:data.items,
                isLoaded: true,
                sort: sort
            })
        }
        catch(err){
            // console.log(err)
            setState({
                ...state,
                isLoaded:false,
                error:err.message
            })
        }
        
    }

    return(
        <div className="container">
            <nav className="my-5">
                <Header/>
            </nav>
            <hr/>
            {isLoaded ? (
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-sm">
                    <h4>Repositories: {totalCount} Results</h4>
                    </div>
                    <div className="col-sm">
                        <select className="form-control" onChange={handleSelect}>
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
                <Blank/> 
            )}
            
        </div>
    )
}


export default Landing