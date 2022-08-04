import { useParams } from 'react-router-dom';
const Details = () => {
    const {owner,repo} = useParams
    console.log(owner,"owner")

    return(
        <div className="container">
            <h1>Details page</h1>
            {/* <h3>{owner} {repo}</h3> */}
        </div>
    )
}


export default Details