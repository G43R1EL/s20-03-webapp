const router = require('express').Router();
const { userRegistration, userLogin } = require('../controllers/authController');
const responses = require('../config/responses')

router.post('/login', userLogin);

router.post('/register', userRegistration);

router.patch('/update', (req, res) => {
    res.status(responses.placeholder().status).json(responses.placeholder('You are in the update page.'))
});

router.delete('/delete', (req, res) => {
    res.status(responses.placeholder().status).json(responses.placeholder('You are in the delete page.'))
});

router.head('/authenticate', (req, res) => {
    res.status(responses.placeholder().status).json(responses.placeholder('You are in the authenticate page.'))
});

router.get('*', (req, res) => {
    res.status(responses.methodNotAllowed.status).json(responses.methodNotAllowed)
})

module.exports = router
