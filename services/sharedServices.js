const fetch = require('node-fetch')

exports.getData = async(url,headers) => {
    return await fetch(url,{
        method: 'GET',
        headers: headers
    })
}