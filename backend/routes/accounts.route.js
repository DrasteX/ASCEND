const express = require('express');
const router = express.Router();
const Account = require('../models/accounts.model.js');
const UserInfo = require('../models/userinfo.model.js');
const UserQuests = require('../models/userQuests.model.js');
router.post('/', async (req, res) => {
    res.send('ACCOUNTS API');
})

router.post('/login', async (req, res) => {
    try {
        console.log('Login request received');
        console.log('Request body:', req.body);
        const body = req.body;
        const Users = await Account.find();
        const userNameExists = Users.some(user => user.username === body.username);
        if (userNameExists) {
            const user = Users.find(user => user.username === body.username);
            if (user.password === body.password) {
                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(401).json({ message: 'Invalid password' });
            }
        } else {
            const newUser = await Account.create(body);
            const userInfo = await UserInfo.create({
                _id: body.username,
            });
            const userQuests = await UserQuests.create({
                _id: body.username,
                completedQuests: [],
            });
            res.status(200).json({ message: 'User created successfully', user: newUser });
        }

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/listall', async (req, res) => {
    try {
        const users = await Account.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/delete', async (req, res) => {
    try {
        const user = await Account.findByIdAndDelete(req.query.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
);



module.exports = router;