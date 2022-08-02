const catchAsync = require("../utils/catchAsync");
const githubServices = require("../services/githubServices");
// https://api.github.com/search/repositories?q=repo1&page=1&per_page=10&sort=stars
exports.getRepositoriesController = catchAsync(async (req,res) => {
    const {queryString, page, per_page, sortString} = req.query
    const url = `${process.env.GITHUB_BASE_URL}/search/repositories?q=${queryString}&page=${page}&per_page=${per_page}&sort=${sortString}`
    const data = await githubServices.getRepositories(url)
    console.log(data,"Response from github")
    res.status(200).json({
        status: 'success',
        ...data
    })
})

exports.getRepositoryController = catchAsync(async(req, res) => {
    const {owner, repo} = req.query
    const url = `${process.env.GITHUB_BASE_URL}/repos/${owner}/${repo}`
    const data = await githubServices.getRepository(url)
    res.status(200).json({
        status: 'success',
        ...data
    })
})

exports.getMarkupController = catchAsync(async (req,res)=> {
    const {owner, repo, branch} = req.query
    const url = `${process.env.MARKUP_BASE_URL}/${owner}/${repo}/${branch}/README.md`
    const data = await githubServices.getMarkup(url)
    res.status(200).send({
        data
    })
})