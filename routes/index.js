const router = require("express").Router();

// gets homepage (index.html)
router.get('/', (req, res) => {
    try {
      res.render('index', { 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });



  
module.exports = router;
