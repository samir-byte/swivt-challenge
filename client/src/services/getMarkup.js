import { BASE_URL } from '../config/env';
import { getData } from "./";

const getMarkup = async (owner,repo,branch) => {
    let url = `${BASE_URL}/repositories/README.md?owner=${owner}&repo=${repo}&branch=${branch}`;
    try{
        console.log("url",url)
        let data = await getData(url);
        return data;
    }
    catch(err){
        console.log(err);
    }
    
}

export default getMarkup;