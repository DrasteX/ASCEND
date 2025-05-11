const express = require('express');
const router = express.Router();
const userQuests = require('../models/userQuests.model.js');

router.get('/', async (req, res)=>{
    res.send('USERQUESTS API');
})

router.get('/find', async (req, res)=>{
    try {
        const userQuest = await userQuests.findById(req.query.id);
        res.status(200).json(userQuest);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.post('/add', async (req, res)=>{
    try {
        const userQuest = await userQuests.create(req.body);
        res.status(200).json(userQuest);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.put('/update', async (req, res)=>{
    try {
        const userQuest = await userQuests.findByIdAndUpdate(req.query.id, req.body, {new: true});
        res.status(200).json(userQuest);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router;