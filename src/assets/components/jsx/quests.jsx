import React from 'react'
import '../css/quests.css'
import { useEffect, useState } from 'react';


export default function Quests() {
  const username =JSON.parse(sessionStorage.getItem('whoami')).username;
  const [userQuests, setUserQuests] = useState({});
  const [questlib, setQuestlib] = useState([]);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetch(`http://192.168.1.196:3000/api/userquests/find?id=${username}`)
        .then(response => response.json())
        .then(data => {
          setUserQuests(data);
        })
        .catch(error => {
          console.error('Error fetching user quests:', error);
        });
    
    fetch('http://192.168.1.196:3000/api/questlib/all', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
    })
        .then(response => response.json())
        .then(data => {
          setQuestlib(data);
        })
        .catch(error => {
          console.error('Error fetching quest library:', error);
        });
    
  }, []);





  

  return (
    <div>
      <h1 className="quests_title">Quests</h1>
      <div className='quests_container'>
        {

          Object.entries(userQuests?.availableQuests || {}).map(([id,progress]) => {
            
            const quest = questlib.find(quest => quest._id === id);
            return (
              <div className="quest_item" key={id} onClick={() => window.location.href = `/questinfo/${id}`}>
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
