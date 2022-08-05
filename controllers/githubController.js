const catchAsync = require("../utils/catchAsync");
const githubServices = require("../services/githubServices");
const AppError = require("../utils/appError");

/* 
search repositories controller
@params req, res, next
@req queryString, page, per_page, sortString
@res data items with repositories
*/
exports.searchRepositories = catchAsync(async (req,res,next) => {
    const {queryString, page, per_page, sortString} = req.query
    const url = `${process.env.GITHUB_BASE_URL}/search/repositories?q=${queryString}&page=${page}&per_page=${per_page}&sort=${sortString}`
    
    // calling searchRepositories service
    const data = await githubServices.searchRepositories(url)
    
    console.log(data,"Response from github")
    if(data.status == 'error' || data.status == 'fail'){
        return next(new AppError("Internal server error",data.statusCode))
    }
    res.status(200).json({
    status: 'success',
    ...data
    })
 
})

//get repository details controller
exports.getRepositoryController = catchAsync(async(req, res) => {
    const {owner, repo} = req.query
    const url = `${process.env.GITHUB_BASE_URL}/repos/${owner}/${repo}`
    const data = await githubServices.getRepository(url)
    res.status(200).json({
        status: 'success',
        ...data
    })
})

//get markup readme.md content controller
exports.getMarkupController = catchAsync(async (req,res)=> {
    const {owner, repo, branch} = req.query
    const url = `${process.env.MARKUP_BASE_URL}/${owner}/${repo}/${branch}/README.md`
    const data = await githubServices.getMarkup(url)
    res.status(200).send({
        data
    })
})