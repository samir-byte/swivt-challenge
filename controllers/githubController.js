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