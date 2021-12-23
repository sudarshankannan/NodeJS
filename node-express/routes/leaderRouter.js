const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

// "/leader/" endpoint
leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end("Will send all leaders");
})
.post((req, res, next) => {
    res.end("Will add leader: " + req.body.name);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});

// "/leader/:leaderId" endpoint
leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send you leader' + req.params.leaderId);
})
.post((req, res, next) => {
    res.end('POST operation not supported for /leaders/:leaderId/');
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('Updating leader ' + + req.params.leaderId + ' with details ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting leader ' + req.params.leaderId);
});

module.exports = leaderRouter;