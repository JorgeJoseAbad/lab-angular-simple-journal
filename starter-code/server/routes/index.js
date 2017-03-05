const express       = require('express');
const journalRoutes = require('./api/journal-entries');
//const indexroutes   = require('views/index');
const router        = express.Router();

console.log("estoy en /routes/index.js ");

//router.use('/',indexroutes);
router.use('/api', journalRoutes);

module.exports = router;
