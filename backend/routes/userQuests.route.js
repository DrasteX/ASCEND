const express = require('express');
const router = express.Router();
const userQuests = require('../models/userQuests.model.js');
const lvlinv = require('../models/lvlInv.model.js')
const questlib = require('../models/questlib.model.js')

router.get('/', async (req, res)=>{
    res.send('USERQUESTS API');
})

router.put('/complete', async (req, res) => {
    try {
        const { id, questId } = req.query;

        if (!id || !questId) {
            return res.status(400).json({ message: 'Missing user ID or quest ID' });
        }

        // Fetch user quest data
        const user = await userQuests.findById(id);
        if (!user) return res.status(404).json({ message: 'User not found in userQuests' });

        const { availableQuests = {}, completedQuests = [] } = user;

        if (!(questId in availableQuests)) {
            return res.status(400).json({ message: 'Quest not found in availableQuests' });
        }

        // Remove quest from availableQuests
        delete availableQuests[questId];
        user.availableQuests = availableQuests;

        // Add to completedQuests if not already present
        if (!completedQuests.includes(questId)) {
            completedQuests.push(questId);
            user.completedQuests = completedQuests;
        }

        await user.save();

        // Fetch user inventory/XP and quest info
        const [userLvlinv, questInfo] = await Promise.all([
            lvlinv.findById(id),
            questlib.findById(questId)
        ]);

        if (!userLvlinv || !questInfo) {
            return res.status(404).json({ message: 'User level/inventory or quest info not found' });
        }

        // Update XP
        userLvlinv.xp = (userLvlinv.xp || 0) + (questInfo.questRewardXP || 0);

        // Add items to inventory if defined
        if (Array.isArray(questInfo.questRewardItem)) {
            userLvlinv.inventoryItems.push(...questInfo.questRewardItem);
        } else if (typeof questInfo.questRewardItem === 'string') {
            userLvlinv.inventoryItems.push(questInfo.questRewardItem);
        }

        await userLvlinv.save();

        res.status(200).json({
            message: 'Quest marked as completed and rewards granted',
            userQuests: user,
            userLvlinv
        });

    } catch (err) {
        console.error('Error in /complete:', err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
});



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