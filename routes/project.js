const express = require('express');
const router = express.Router();

const Projects = require('../models/project');

// Will show all projects
router.get('/', (req, res) => {
    Projects.find({}, (err, projects) => {
        if(err) {
            throw err;
        } else {
            res.render("project/index", {
                projects,
            });
        }
    });
});

// Will show project of particular by username
router.get('/:name', (req, res) => {
    Projects.find({ name: req.params.name }, (err, project) => {
        if(err) {
            throw err;
        } else {
            res.render("project/show", {
                project
            });
        }
    });
});

module.exports = router;