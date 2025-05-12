const express = require('express');
const router = express.Router();
const lvlInv = require('../models/lvlInv.model.js');

router.get('/', async(req,res)=>{
    res.send('LEVELING AND INVENTORY SYSTEM API')
})

router.post('/add', async(req,res)=>{
    try {
        const li = lvlInv.create(req.body);
        res.status(200).json(li)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})
router.get('/find', async(req,res)=>{
    try {
        const li = lvlInv.findById(res.query.id);
        res.status(200).json(li)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})
router.get('/listall', async(req,res)=>{
    try {
        const li = lvlInv.find()
        res.status(200).json(li)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

router.put('/update', async(req,res)=>{
    try {
        const li = lvlInv.findByIdAndUpdate(req.query.id, req.body, {new:true});
        res.status(200).json(li)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

router.delete('/delete', async(req,res)=>{
    try {
        const li = lvlInv.findByIdAndDelete(req.query.id);
        res.status(200).json(li)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

module.exports = router