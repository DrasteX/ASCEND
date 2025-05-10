import React from 'react'
import '../css/userinfo.css'
export default function UserInfo() {
  return (
    <div>
      <h1 className="userinfo_title">About You</h1>
      <form className="userinfo_container">
        <div className="userinfo_item">
          <label for="user_name" className='userinfo_titletxt'>Name </label>
          <input type="text" id="user_name" className='userinfo_input' placeholder='Name'/>
        </div>
        <div className="userinfo_item">
          <label for="user_name" className='userinfo_titletxt'>Age</label>
          <input type="text" id="user_age" className='userinfo_input' placeholder='Age'/>
        </div>
        <div className="userinfo_item">
          <label for="user_name" className='userinfo_titletxt'>Address</label>
          <input type="text" id="user_address" className='userinfo_input' placeholder='Address'/>
        </div>
        <div className="userinfo_item">
          <label for="user_title" className='userinfo_titletxt'>Title </label>
          <select id="user_title" className='userinfo_input'>
            <option disabled selected value="no_title">Select your Title</option>
            <option value="The Heaven's Equal">The Heaven's Equal</option>
            <option value="The God of Destruction">The God of Destruction</option>
            <option value="The God of Creation">The God of Creation</option>
          </select>
        </div>

        <div className="userinfo_item">
          <label for="user_title" className='userinfo_titletxt'>Your Hobbies </label>
          <input type="text" id="user_hobbies" className='userinfo_input' placeholder='What are your Hobbies?'/>
        </div>
        <div className="userinfo_item">
          <label for="user_title" className='userinfo_titletxt'>Your Skills </label>
          <input type="text" id="user_skills" className='userinfo_input' placeholder='What are your Skills?'/>
        </div>
        <div className="userinfo_item">
          <label for="user_title" className='userinfo_titletxt'>Your Interests </label>
          <input type="text" id="user_interests" className='userinfo_input' placeholder='What are your Interests?'/>
        </div>
        <div className="userinfo_item">
          <label for="user_title" className='userinfo_titletxt'>Tell Us about yourself! </label>
          <textarea style={{resize:"none", height: "100px", paddingTop: "15px"}} id="user_about" className='userinfo_input' placeholder='What are your goals? What do you think of yourself and people around you? Tell us whatever comes to your mind!'/>
        </div>
        <div className="userinfo_item">
          <label for="user_title" className='userinfo_titletxt'>Do you want to work for the environment?</label>
          <select id="user_nature" className='userinfo_input'>
            <option value="Yes">Yes</option>
            <option value="No">I'd prefer not to</option>
          </select>
        </div>
        <div className="userinfo_item">
          <label for="user_title" className='userinfo_titletxt'>Are you a Student? </label>
          <select id="user_student" className='userinfo_input'>
            <option value="Yes">Yes, I am in School</option>
            <option value="Yes">Yes, I am in a College/University</option>
            <option value="No">No, I am not a Student</option>
          </select>
        </div>
        <div className="userinfo_item">
          <label for="user_title" className='userinfo_titletxt'>Are you a Working Professional? </label>
          <select id="user_professional" className='userinfo_input'>
            <option value="Yes">Yes, I am a Working Professional</option>
            <option selected value="No">No, I am not a Working Professional</option>
          </select>
        </div>
        <div className="submitbtn_container">
          <input type="submit" value="Save" className='userinfo_submitbtn'/>
        </div>
        
      </form>

    </div>
  )
}
