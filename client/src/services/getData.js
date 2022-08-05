const getData = async(url) => {
    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data,"data");
        return data;
    }
    catch(err){
        console.log(err);
        return err
    }
}

export default getData;