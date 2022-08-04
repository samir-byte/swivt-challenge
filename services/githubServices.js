const AppError = require("../utils/appError");
const dataServices = require("./sharedServices")

//search repositories service
exports.searchRepositories = async(url) => {
    console.log("url",url)
    try{
        const headers = {
            'Content-type': 'application/json'
        }
        // calling shared service to fetch from server
        const response = await dataServices.getData(url,headers)
        const json = await response.json()
        console.log(json,"data")
        const items = json.items.map(items => {
            return {
                id: items.id,
                name: items.name,
                full_name: items.full_name,
                author: items?.owner?.login,
                stars: items.stargazers_count,
                watchers: items.watchers,
                forks: items.forks,
                description: items.description,
                last_update: items.updated_at
            }
        })
        return {
            total_count: json.total_count,
            items: items
        }
    }
    catch(err){
        throw new AppError('Internal server error',500)
    }
};

// get markup service
exports.getMarkup = async(url) => {
    try{
        const headers = {
            'Content-type': 'application/json'
        }
        const response = await dataServices.getData(url,headers)
        
        const data = await response.text()
        console.log(data,"markup response")
        return data
    }
    catch(err) {
        throw new AppError('Internal server error',500)
    }
}

//get repository detail service
exports.getRepository = async(url) => {
    console.log("url",url)
    try{
        const headers = {
            'Content-type': 'application/json'
        }
        const response = await dataServices.getData(url,headers)
        const json = await response.json()
        console.log(json,"data")
        return {
            owner: {
                name: json.owner.login,
                link: json.owner.html_url
            },
            repository: {
                name: json.name,
                link: json.html_url
            },
            open_issues: json.open_issues_count,
            default_branch: json.default_branch
        }
    }
    catch(err){
        console.log(err)
        throw new AppError('Internal server error',500)
    }
};