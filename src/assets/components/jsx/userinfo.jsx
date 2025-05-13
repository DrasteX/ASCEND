import React from 'react'
import '../css/userinfo.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserInfo() {
  const navigate = useNavigate()
  const API = 'https://ascend-mauve.vercel.app'
  const username = JSON.parse(sessionStorage.getItem('whoami'))?.username;
  

  const [userInfo, setUserInfo] = useState({
    userRealName: '',
    userAge: '',
    userAddress: '',
    userHobbies: '',
    userSkills: '',
    userInterests: '',
    userAbout: '',
    userStudent: 'No',
    userProfessional: false
  });

  useEffect(()=>{
    fetch(`${API}/api/userinfo/find?id=${username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((response) => response.json())
      .then((data) => {
       setUserInfo({
        userRealName: data.userRealName || '',
        userAge: data.userAge || '',
        userAddress: data.userAddress || '',
        userHobbies: data.userHobbies || '',
        userSkills: data.userSkills || '',
        userInterests: data.userInterests || '',
        userAbout: data.userAbout || '',
        userStudent: data.userStudent || 'No',
        userProfessional: data.userProfessional || false
       });
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }, [username])

  const handleChange = (e) => {
  const { id, value } = e.target;

  let newValue = value;

  // Convert to boolean for userProfessional
  if (id === 'userProfessional') {
    newValue = value === 'true';
  }

  setUserInfo((prevState) => ({
    ...prevState,
    [id]: newValue,
  }));
};



  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API}/api/userinfo/update?id=${username}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response:', data);
        navigate('/')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div>
      <h1 className="userinfo_title">About You</h1>
      <form className="userinfo_container" onSubmit={handleSubmit}>
        <div className="userinfo_item">
          <label className='userinfo_titletxt'>Name </label>
          <input required onChange={handleChange} type="text" id="userRealName" className='userinfo_input' placeholder='Name' value={userInfo.userRealName } />
        </div>
        <div className="userinfo_item">
          <label className='userinfo_titletxt'>Age</label>
          <input required onChange={handleChange} type="text" id="userAge" className='userinfo_input' placeholder='Age' value={userInfo.userAge } />
        </div>
        <div className="userinfo_item">
          <label className='userinfo_titletxt'>Address</label>
          <input required onChange={handleChange} type="text" id="userAddress" className='userinfo_input' placeholder='Address'  value={userInfo.userAddress } />
        </div>

        <div className="userinfo_item">
          <label className='userinfo_titletxt'>Your Hobbies </label>
          <input required onChange={handleChange} type="text" id="userHobbies" className='userinfo_input' placeholder='What are your Hobbies?' value={userInfo.userHobbies } />
        </div>
        <div className="userinfo_item">
          <label className='userinfo_titletxt'>Your Skills </label>
          <input required onChange={handleChange} type="text" id="userSkills" className='userinfo_input' placeholder='What are your Skills?' value={userInfo.userSkills }/>
        </div>
        <div className="userinfo_item">
          <label className='userinfo_titletxt'>Your Interests </label>
          <input required onChange={handleChange} type="text" id="userInterests" className='userinfo_input' placeholder='What are your Interests?' value={userInfo.userInterests }/>
        </div>
        <div className="userinfo_item">
          <label className='userinfo_titletxt'>Tell Us about yourself! </label>
          <textarea required onChange={handleChange} style={{resize:"none", height: "100px", paddingTop: "15px"}} id="userAbout" name="userAbout" className='userinfo_input' placeholder='What are your goals? What do you think of yourself and people around you? Tell us whatever comes to your mind!' value={userInfo.userAbout}/>
        </div>
        
        <div className="userinfo_item">
          <label className='userinfo_titletxt'>Are you a Student? </label>
          <select onChange={handleChange} id="userStudent" className='userinfo_input' value={userInfo.userStudent || 'No'}>
            <option value="Yes, School">Yes, I am in School</option>
            <option value="Yes, College">Yes, I am in a College/University</option>
            <option value="No">No, I am not a Student</option>
          </select>
        </div>
        <div className="userinfo_item">
          <label className='userinfo_titletxt'>Are you a Working Professional? </label>
          <select  onChange={handleChange} id="userProfessional" className='userinfo_input' value={userInfo.userProfessional || false}>
            <option value={true}>Yes, I am a Working Professional</option>
            <option value={false}>No, I am not a Working Professional</option>
          </select>
        </div>
        <div className="submitbtn_container">
          <input  onChange={handleChange} type="submit" value="Save" className='userinfo_submitbtn'/>
        </div>
        
      </form>

    </div>
  )
}
