import React from 'react'
import { BookCheck, ArrowBigUpDash } from 'lucide-react'
import '../css/home.css'
import { useContext, useEffect} from 'react';
import { UserContext } from '../../userContext.js';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const { userQuests, questlib, userInfo, loading } = useContext(UserContext);

    // const API = 'https://ascend-mauve.vercel.app'

    const username =JSON.parse(sessionStorage.getItem('whoami')).username;

    // Check if the user has filled the UserInfo form
    useEffect(() => {
        if (!loading && !userInfo?.userRealName) {
            navigate('/userinfo');
        }
    }, [loading, userInfo, navigate]);

  return (
    <div>
        <button onClick={()=>{sessionStorage.setItem('whoami', JSON.stringify({username: '', isLoggedIn: false})); window.location.reload()}}  className="hpage_log_btn">Logout</button>
        <h1 className="homepage_title">ASCEND</h1>
        <h4 className="homepage_subtitle">Level Up in LIFE</h4>

        <div className="homepage_status">
            <div className="hpage_status_nametitle">
                <div className="hpage_status_lvlnum">
                    01
                </div>
                <div className="hpage_status_userinfo">
                    <span> <span>NAME : </span> {username?.toLocaleUpperCase()}</span>
                    <span> <span>TITLE : </span> NO TITLE EQUIPPED</span>
                </div>
                <div className="hpage_status_lvltxt"><span>LEVEL</span></div>
                <div className="hpage_lvl_progressbar">
                    <div className="hpage_lvl_progressbar_fill" style={{width: '0%'}}></div>
                </div>
            </div>

            <div className="hpage_status_stats">
                <h2 className="hpage_stats_title">Stats</h2>
                <div className='hpage_stats_list'>
                    <div className="hpage_stat_item">
                        <ArrowBigUpDash size={25}/>
                        <div>
                            <span className='hpage_stat_titletxt'> Level : </span>
                            <span className='hpage_stat_value'>01</span>
                        </div>
                        
                    </div>
                    <div className="hpage_stat_item">
                        <BookCheck size={25}/>  
                        <div>
                            <span className='hpage_stat_titletxt'> Quests Completed : </span>
                            <span className='hpage_stat_value'>0</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            
        </div>
        
        
    {
        userQuests?.availableQuests && Object.keys(userQuests?.availableQuests).length > 0 &&
      
        <div className="homepage_quests">
            <h2 className="homepage_quests_title">Active Quests</h2>
            <div className="hpage_quests_list">
                {

                    Object.entries(userQuests?.availableQuests || {}).map(([id,progress]) => {
                        
                        const quest = questlib.find(quest => quest._id === id);
                        return (
                        <div className="hpage_quest_item" key={id} onClick={() => navigate(`/questinfo/${id}`)}>
                            <span className='hpage_quest_titletxt'>{quest?.questTitle || "Unknown Quest"}</span>
                            <span className='hpage_quest_rewardtxt'>Reward : {quest?.questReward || "No Reward"} </span>
                            <div className="hpage_quest_progressbar">
                            <div className="hpage_quest_progressbar_fill" style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                        );
                    })

                    }
                
            </div>

        </div>
        
    }

    </div>
  )
}
