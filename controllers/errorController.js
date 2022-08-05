//Development error handler
const sendErrorDev = (err, res) => {
    return res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    })
}

//Production error handler
const sendErrorProd = (err, res) => {
    //operational, trusted error: send message to client
    if(err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        })
    }

    //programming or other unknown error: don't leak error details
    else {
        console.error('ERROR!', err)
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong'
        })
    } 
}

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if(process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    }
    else if (process.env.NODE_ENV === 'production'){
        // let error = {...err};
        // console.log(error.name)
        // console.log(err)
        sendErrorProd(err, res);
    }
}