const express = require('express');
const { getCourses } = require('../controllers/courses');

const router = express.Router({ mergeParams: true }); // To use other resources after reroute

router.route('/').get(getCourses);

module.exports = router;
