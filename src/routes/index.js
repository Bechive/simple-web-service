var express = require('express');
var router = express.Router();

const db = require('../queries');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/api/scc', db.getAllRecords);
router.get('/api/scc/byid/:id', db.getSingleRecord);
router.get('/api/scc/bytag/:id', db.getSingleRecordByTag);
//router.post('/api/scc', db.createPuppy);
//router.put('/api/scc/:id', db.updatePuppy);
//router.delete('/api/scc/:id', db.removePuppy);

module.exports = router;
