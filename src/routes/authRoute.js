const router = require('express').Router();
const responses = require('../config/responses')

router.post('/login', (req, res) => {
    res.status(responses.placeholder().status).json(responses.placeholder('You are in the login page.'))
});

router.post('/register', (req, res) => {
    res.status(responses.placeholder().status).json(responses.placeholder('You are in the register page.'))
});

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
    res.status(responses.notImplemented.status).json(responses.notImplemented)
})

module.exports = router
