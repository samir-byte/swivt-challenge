import { BASE_URL } from '../config/env';
import { getData } from "./";

const getRepo = async (owner,repo) => {
    let url = `${BASE_URL}/repositories/?owner=${owner}&repo=${repo}`;
    try{
        let data = await getData(url);
        return data;
    }
    catch(err){
        // console.log(err);
    }
    
}

export default getRepo;