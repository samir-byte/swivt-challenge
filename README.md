# swivt-challenge
This is challenge test for MERN



## Server side (Backend)

 1. Create config.env file and copy configuration from .env_development
 2. Change configuration if necessary or else it will run on 5000 (Note: Make sure to run on 5000 or else need to change on BASE_URL of client side)  
 3. Install dependencies i.e npm install
 4. Run the server i.e npm start

## Client side (Frontend)

 1. cd client (Change directory to client folder)
 2. Change BASE_URL in src/config/env.js if was altered in server side. default http://localhost:5000/rest/v1 
 3. Install dependencies i.e npm install
 4. Run the server i.e npm start 
 5. By default it will run on http://localhost:3000

## Technologies used

 1. Node js(Express) for server side and React for client side 
 2. Basic dependencies in server side i.e cors, node-fetch, etc
 3. For Client side: react-paginate, marked, bootstrap, react-icons, styled-components

## Thirdparty API's
 Search Repo : https://api.github.com/search/repositories?q=repo1&page=1&per_page=10&sort=best-match
 Get Repo detail: https://api.github.com/repos/:owner/:repo
 Get markup: https://raw.githubusercontent.com/{owner}/{repo}/{branch}/README.md

## Useful link
 Readme api: https://stackoverflow.com/questions/53605718/get-specific-readme-md-data-from-github-api
 Get markup in client: https://stackoverflow.com/questions/42928530/how-do-i-load-a-markdown-file-into-a-react-component

    
