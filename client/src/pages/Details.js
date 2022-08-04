import { useParams,useLocation } from 'react-router-dom';
const Details = () => {
    const {owner,repo} = useParams
    console.log(owner)
    // console.log(useParams,"use params")
    const location = useLocation
    console.log(location.pathname,"pathname")
    return(
        <div className="container">
            <h1>Details page</h1>
            {/* <h3>{owner} {repo}</h3> */}
        </div>
    )
}


export default Details