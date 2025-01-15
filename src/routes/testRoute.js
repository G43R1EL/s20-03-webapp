const router = require('express').Router();
const { createTest, commentsTest } = require('../controllers/testController');

router.post('/create', createTest);

router.get('/comments', commentsTest);

router.get('*', (req, res) => {
    res.json({ message: 'Test route' });
});

module.exports = router;