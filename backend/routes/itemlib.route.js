const express = require('express');
const router = express.Router();
const itemlib = require('../models/itemlib.model.js')

router.post('/add', async (req,res)=>{
    try {
        const itemInfo = await itemlib.create(req.body);
        res.status(200).json(itemInfo)
    }
    catch (err) {
        res.status(500).json({message:err.message})
    }
})

router.get('/', async (req, res)=>{
    res.send('ITEMLIB API')
})


router.get('/listall', async (req, res)=>{
    try {
        const items = await itemlib.find();
        res.status(200).json(items);
    }
    catch (err) {
        res.status(500).json({message:err.message})
    }
})

router.get('/find', async (req, res)=>{
    try {
        const item = await itemlib.findById(req.query.id);
        res.status(200).json(item);
    }
    catch (err) {
        res.status(500).json({message:err.message})
    }
})

router.delete('/delete', async (req,res)=>{
    try {
        const item = await itemlib.findByIdAndDelete(req.query.id);
        res.status(200).json(item);
    }
    catch (err) {
        res.status(500).json({message:err.message})
    }
})

router.put('/update', async (req,res)=>{
    try {
        const item = await itemlib.findByIdAndUpdate(req.query.id, req.body, {new: true});
        res.status(200).json(item);
    }
    catch (err) {
        res.status(500).json({message:err.message})
    }
});


module.exports = router;