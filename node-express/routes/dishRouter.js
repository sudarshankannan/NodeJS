const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

// "/dishes" endpoint
dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});

// "dishes/:dishId" endpoint
dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send this dish to you: ' + req.params.dishId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported for /dishes/:dishId/");
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('Updating dish ' + + req.params.dishId + ' with details ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});

module.exports = dishRouter;