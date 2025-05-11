const express = require('express');
const router = express.Router();
const UserInfo = require('../models/userinfo.model.js');

router.post('/', async (req, res)=>{
    res.send('USERINFO API');
})

router.post('/add', async (req, res)=>{
    try {
        const userInfo = await UserInfo.create(req.body);
        res.status(200).json(userInfo);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/listall', async (req, res)=>{
    try {
        const userInfo = await UserInfo.find();
        res.status(200).json(userInfo);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/find', async (req, res)=>{
    try {
        const userInfo = await UserInfo.findById(req.query.id);
        res.status(200).json(userInfo);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.put('/update', async (req, res)=>{
    try {
        const userInfo = await UserInfo.findByIdAndUpdate(req.query.id, req.body, {new: true});
        res.status(200).json(userInfo);
    }  
    catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.delete('/delete', async (req, res)=>{
    try {
        const userInfo = await UserInfo.findByIdAndDelete(req.query.id);
        res.status(200).json(userInfo);
    }  
    catch (err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router;