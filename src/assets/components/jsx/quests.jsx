import React from 'react'
import '../css/quests.css'
// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { UserContext } from '../../userContext.js';


export default function Quests() {
  const navigate = useNavigate();
  // const API = 'https://ascend-mauve.vercel.app'
  // const username =JSON.parse(sessionStorage.getItem('whoami')).username;

  const { userQuests, questlib } = useContext(UserContext);



  

  return (
    <div>
      <h1 className="quests_title">Quests</h1>
      <div className='quests_container'>
        {

          Object.entries(userQuests?.availableQuests || {}).map(([id,progress]) => {
            
            const quest = questlib.find(quest => quest._id === id);
            return (
              <div className="quest_item" key={id} onClick={() => navigate(`/questinfo/${id}`)}>
                <span className='quest_titletxt'>{quest?.questTitle || "Unknown Quest"}</span>
                <span className='quest_rewardtxt'>Reward : {quest?.questReward || "No Reward"} </span>
                <div className="quest_progressbar">
                  <div className="quest_progressbar_fill" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
            );
          })

        }

        {
          userQuests?.completedQuests?.map((id, index) => {
            const quest = questlib.find(quest => quest._id === id);
            return (
              <div className="quest_item" key={id} onClick={() => window.location.href = `/questinfo/${id}`}>
                <span className='quest_titletxt'>{quest?.questTitle || "Unknown Quest"}</span>
                <span className='quest_rewardtxt'>Reward : {quest?.questReward || "No Reward"} </span>
                <div className="quest_progressbar">
                  <div className="quest_progressbar_fill" style={{ width: `100%` }}></div>
                </div>
              </div>
            );
          })
        }

        

        
      </div>

    </div>
  )
}
