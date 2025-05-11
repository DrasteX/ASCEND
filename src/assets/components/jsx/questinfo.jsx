import React from 'react'
import '../css/questinfo.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function QuestInfo() {
    // Get the quest ID from the URL parameters
    const {questid} = useParams();
    const [questData, setQuestData] = useState({});

    const [questImages, setQuestImages] = useState([]);
    const [userQuests, setUserQuests] = useState({});
    const username =JSON.parse(sessionStorage.getItem('whoami')).username;

    useEffect(() => {
        // Fetch quest data from the server
        fetch(`http://192.168.1.196:3000/api/questlib/find?id=${questid}`)
            .then(response => response.json())
            .then(data => {
                setQuestData(data);
            })
            .catch(error => {
                console.error('Error fetching quest data:', error);
            });
        
        fetch(`http://192.168.1.196:3000/api/userquests/find?id=${username}`)
            .then(response => response.json())
            .then(data => {
            setUserQuests(data);
            })
            .catch(error => {
            console.error('Error fetching user quests:', error);
            });
    }, []);


    const handleUpload = (event) => {
        setQuestImages((prevState)=> [event.target.files[0], ...prevState]);
    }
    
    
    const isCompleted = userQuests?.completedQuests?.includes(questid)
  return (
    <div>
        <h1 className="quests_title">Quest Info</h1>
        <div className='questinfo_container'>
            <span className='quest_title'>[     {questData.questTitle?.toLocaleUpperCase() || "Untitled Quest"}     ]</span>
            <span className='quest_description'>{questData.questDescription || "No Description"}</span>
            <span className='quest_objective_title'>OBJECTIVES</span>
            <span className='quest_objective_list'>{questData.questObjective?.map((obj, idx)=>(
                <span key={idx} className='quest_objective_list'>{obj}</span>
            )) || "???"}</span>
            <span className='quest_reward_title'>REWARDS</span>
            <span className='quest_reward_list'>{questData.questReward || "???"}</span>
        </div>

            {
                isCompleted ? (
                        <div className='quest_completed'>
                            <span className='quest_completed_title'>Quest Completed</span>
                            
                        </div>
                    ) : (
                    <div className='questVerification'>
                        <span className='quest_verification_title'>VERIFICATION</span>
                        <span className='quest_verification_explanation'>The pictures you upload will be reviewed by our system and once verified, your Quest Progression will increase.</span>
                        {questImages.map((image, index) => (
                            <div key={index} className='quest_verification_image_container'>
                                <img src={URL.createObjectURL(image)} alt={`Quest Verification ${index}`} className="quest_verification_image" />
                            </div>
                        ))}
                        <label htmlFor="ver_input" className='upload_verification_button'>Upload Photos</label>
                        <input onChange={handleUpload} id="ver_input" style={{display: 'none'}} type="file" className='upload_verification_input' accept="image/*" />
                    </div>
                    )
                
                
                }

            


    </div>
  )
}
