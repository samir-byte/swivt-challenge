import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import {getMarkup, getRepo} from "../services"
import { marked } from 'marked'
import {TbUser} from 'react-icons/tb'
import { Alert } from '../components';

const Details = () => {
    const location = useLocation()
    const {owner,repo} = location.state
    // console.log(owner,repo)
    const [data,setData] = useState({})
    const [markup,setMarkup] = useState()
    const [isLoaded,setIsLoaded] = useState(false)
    // const [repoName, setRepoName] = useState()
    // const [ownerName, setOwnerName] = useState()
    // console.log("Daata",data)
    
    let branch = ''
    useEffect(() => {
        
        (async() => {
            const data = await getRepo(owner,repo)
            console.log(data, "repo data")
            if(data.status == 'error' || data.status == 'fail'){
                setIsLoaded(false)
            }
            else{
                branch = data.default_branch
            setData(data)
            const response = await getMarkup(owner,repo,branch)
            const markup = response.data
            setIsLoaded(true)
            setMarkup(marked.parse(markup))
            }
            
        })();
        
      },[])

    return(
        <div>
            {isLoaded ? (<div className="container-fluid">
            <div className='container-fluid bg-light p-2'>
            <h3>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo color-fg-muted mr-2">
                <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
            </svg> <a href="#" className="text-decoration-none">{repo}</a>
            </h3>
            <h5><TbUser/> {owner}</h5>
            <p>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline">
                <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
            </svg> Issues {data.open_issues}
            </p>
            <p>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo-forked mr-1">
                        <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                    </svg> {data.default_branch}
            </p>
            </div>
            <section className='container mt-3'>
                <h3>Readme.md</h3>
                <article dangerouslySetInnerHTML={{__html: markup}}></article>
            </section>
        </div>) : (<div class="spinner-border" role="status">
  
</div>)}
        </div>
        
    )
}


export default Details