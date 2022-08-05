import { BASE_URL } from '../config/env';
import { getData } from "./";

const searchRepo = async (queryString,page,sort) => {
    let url = `${BASE_URL}/repositories/search?queryString=${queryString}&page=${page}&per_page=10&sortString=${sort}`;
    try{
        let data = await getData(url);
        return data;
    }
    catch(err){
        console.log(err);
    }
    
}

export default searchRepo;