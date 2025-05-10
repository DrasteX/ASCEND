import React from 'react'
import { BookCheck, ArrowBigUpDash } from 'lucide-react'
import '../css/home.css'
export default function Home() {
  return (
    <div>
        <h1 className="homepage_title">ASCEND</h1>
        <h4 className="homepage_subtitle">Level Up in LIFE</h4>

        <div className="homepage_status">
            <div className="hpage_status_nametitle">
                <div className="hpage_status_lvlnum">
                    20
                </div>
                <div className="hpage_status_userinfo">
                    <span> <span>NAME : </span> DrasteX</span>
                    <span> <span>TITLE : </span> The Heaven's Equal</span>
                </div>
                <div className="hpage_status_lvltxt"><span>LEVEL</span></div>
                <div className="hpage_lvl_progressbar">
                    <div className="hpage_lvl_progressbar_fill" style={{width: '50%'}}></div>
                </div>
            </div>

            <div className="hpage_status_stats">
                <h2 className="hpage_stats_title">Stats</h2>
                <div className='hpage_stats_list'>
                    <div className="hpage_stat_item">
                        <ArrowBigUpDash size={25}/>
                        <div>
                            <span className='hpage_stat_titletxt'> Level : </span>
                            <span className='hpage_stat_value'>20</span>
                        </div>
                        
                    </div>
                    <div className="hpage_stat_item">
                        <BookCheck size={25}/>  
                        <div>
                            <span className='hpage_stat_titletxt'> Quests Completed : </span>
                            <span className='hpage_stat_value'>100</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            
        </div>
        
        <div className="homepage_quests">
            <h2 className="homepage_quests_title">Active Quests</h2>
            <div className="hpage_quests_list">
                <div className="hpage_quest_item">
                    <span className='hpage_quest_titletxt'>Complete Physics Homework</span>
                    <span className='hpage_quest_rewardtxt'>Reward : 100XP </span>
                    <div className="hpage_quest_progressbar">
                        <div className="hpage_quest_progressbar_fill" style={{width: '0%'}}></div>
                    </div>
                </div>
                <div className="hpage_quest_item">
                    <span className='hpage_quest_titletxt'>Join a Gym</span>
                    <span className='hpage_quest_rewardtxt'>Reward : 400XP + Workout and Diet Plan </span>
                    <div className="hpage_quest_progressbar">
                        <div className="hpage_quest_progressbar_fill" style={{width: '30%'}}></div>
                    </div>
                </div>
                <div className="hpage_quest_item">
                    <span className='hpage_quest_titletxt'>Plant 5 Trees</span>
                    <span className='hpage_quest_rewardtxt'>Reward : 500XP </span>
                    <div className="hpage_quest_progressbar">
                        <div className="hpage_quest_progressbar_fill" style={{width: '20%'}}></div>
                    </div>
                </div>
            </div>

        </div>


    </div>
  )
}
