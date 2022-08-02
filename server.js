const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

process.on('uncaughtException', err => {
    // console.log(err.name);
    console.log(err.message);
    console.log('UNCAUGHT EXCEPTION! Shutting down...');
    process.exit(1);

})

console.log(`Environment: ${process.env.NODE_ENV}`);

const port = process.env.PORT || 3000;
//Server start
const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});


process.on('unhandledRejection', err => {
    console.log(err.name);
    console.log(err.message);
    console.log('UNHANDLED REJECTION! Shutting down...');
    //CLOSE SERVER AT FIRST SO THAT ALL PENDING TASKS ARE COMPLETED AND PROCESS EXITS GRACEFULLY
    server.close(() => {
        process.exit(1);
    }); 
})
