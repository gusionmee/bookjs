var express = require('express');
var router = express.Router();


const {
    getallbook,
    findbook,


} = require('../controllers/Books');


/*
#swagger

*/

router.route('/all').get(getallbook)
router.route('/:id').get(findbook)

module.exports = router







