const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fullstack-review-3');

module.exports = mongoose;