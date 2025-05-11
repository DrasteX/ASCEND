import React from 'react'
import '../css/account.css'
export default function Login() {
  const API = 'https://ascend-mauve.vercel.app'
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const userName = event.target.user_name.value;
    const Password = event.target.user_password.value;

    const data = {
        _id: userName,
        username: userName,
        password: Password,
      }


    // Perform login or sign-up logic here
    console.log('Username:', userName);
    console.log('Password:', Password);
    // Example: Send a POST request to the server
    fetch(`${API}/api/accounts/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response:', data);
        sessionStorage.setItem('whoami', JSON.stringify({username: userName, isLoggedIn: true}));
        window.location.href = '/';
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    
  }
  return (
    <div>
        <h1 className="login_title">Login/Sign Up</h1>
        <form className="login_container" onSubmit={handleSubmit}>
            <div className="login_item">
            <label for="user_name" className='login_titletxt'>Username </label>
            <input required type="text" id="user_name" name="user_name" className='login_input' placeholder='Username' />
            </div>
            <div className="login_item">
            <label for="user_password" className='login_titletxt'>Password</label>
            <input required type="password" id="user_password" name="user_password" className='login_input' placeholder='Password' />
            </div>
            <div className="loginbtn_container">
                <input type="submit" className='login_btn' value='Login'/>
            </div>
            
        </form>
    </div>
  )
}
