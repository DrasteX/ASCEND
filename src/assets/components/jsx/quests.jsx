import React from 'react'
import '../css/quests.css'
export default function Quests() {
  return (
    <div>
      <h1 className="quests_title">Quests</h1>
      <div className='quests_container'>
        <div className="quest_item">
          <span className='quest_titletxt'>Complete Physics Homework</span>
          <span className='quest_rewardtxt'>Reward : 100XP </span>
          <div className="quest_progressbar">
            <div className="quest_progressbar_fill" style={{width: '0%'}}></div>
          </div>
        </div>
        <div className="quest_item">
          <span className='quest_titletxt'>Complete Chemistry Homework</span>
          <span className='quest_rewardtxt'>Reward : 100XP </span>
          <div className="quest_progressbar">
            <div className="quest_progressbar_fill" style={{width: '0%'}}></div>
          </div>
        </div>
        <div className="quest_item">
          <span className='quest_titletxt'>Complete Maths Homework</span>
          <span className='quest_rewardtxt'>Reward : 100XP </span>
          <div className="quest_progressbar">
            <div className="quest_progressbar_fill" style={{width: '0%'}}></div>
          </div>
        </div>
        
      </div>

    </div>
  )
}
