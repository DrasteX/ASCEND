
const Questlib = require('../models/questlib.model');


const addQuest = async (req, res) => {
    try{
        const questlib = await Questlib.create(req.body);
        res.status(200).json(questlib);

    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

const getAllQuests = async (req, res) => {
    try{
        const questlib = await Questlib.find();
        res.status(200).json(questlib);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

const getQuestById = async (req, res) => {
    try{
        const {id} = req.query;
        const questlib = await Questlib.findById(id);
        res.status(200).json(questlib);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

const updateQuest = async (req, res) => {
    try{
        const {id} = req.query;
        const questlib = await Questlib.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(questlib);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

const deleteQuest = async (req, res) => {
    try{
        const id = req.query.id;
        const questlib = await Questlib.findByIdAndDelete(id);
        res.status(200).json(questlib);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

module.exports = {addQuest, getAllQuests, getQuestById, updateQuest, deleteQuest};