const express = require('express');
const router = express.Router();
const {addQuest, getAllQuests, getQuestById, updateQuest, deleteQuest} = require('../controllers/questlib.controller.js');





router.post('/add', addQuest);

router.get('/all', getAllQuests);

router.get('/find', getQuestById);

router.put('/update', updateQuest);

router.delete('/delete', deleteQuest);

module.exports = router;