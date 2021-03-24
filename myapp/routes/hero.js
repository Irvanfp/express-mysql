const express = require('express');
const heroController = require('../controllers/Hero');
const routes = express();

routes.get('/', heroController.get);
routes.post('/', heroController.post);

module.exports = routes;
