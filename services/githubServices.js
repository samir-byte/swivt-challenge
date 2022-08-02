const dataServices = require("./sharedServices")

exports.getRepositories = async(url) => {
    console.log("url",url)
    try{
        const headers = {
            'Content-type': 'application/json'
        }
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
        console.log(err)
        return err
    }
};

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
        return err
    }
}

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
        return err
    }
};