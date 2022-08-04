import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import {getMarkup, getRepo} from "../services"
import { marked } from 'marked'
const Details = () => {
    const location = useLocation()
    const {owner,repo} = location.state
    console.log(owner,repo)
    const [data,setData] = useState({})
    const [markup,setMarkup] = useState()
    console.log("Daata",data)
    const repoName = data.repository.name
    const ownerName = data.owner.name
    let branch = ''
    useEffect(() => {
        
        (async() => {
            const data = await getRepo(owner,repo)
            console.log(data)
            branch = data.default_branch
            setData(data)
            const response = await getMarkup(owner,repo,branch)
            const markup = response.data
            setMarkup(marked.parse(markup))
        })();
        
      },[])

    return(
        <div className="container">
            
            <h3>Name: {repoName}</h3>
            <h4>{ownerName}</h4>
            <p>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline">
                <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
            </svg> Issues {data.open_issues}
            </p>
            <p>
                Branch: {data.default_branch}
            </p>

            <section className='container'>
                <h3>Readme.md</h3>
                <article dangerouslySetInnerHTML={{__html: markup}}></article>
            </section>
        </div>
    )
}


export default Details