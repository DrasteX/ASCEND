import React from 'react'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
import {Grid, House, Book, User} from 'lucide-react'

import { useContext } from 'react';
import { UserContext } from '../../userContext.js';
import { useEffect } from 'react';

export default function NavBar() {
  const { userInfo, userQuests, loading } = useContext(UserContext);

  var isIncomplete = (!loading && !userInfo?.userRealName)

  const noQuests = (
    !(Object.keys(userQuests?.availableQuests || {}).length > 0) &&
    (userQuests?.completedQuests?.length || 0) === 0
  );


  return (
    
    <nav className="navbar">
      <Link to="/" className={`navbar-brand ${isIncomplete ? 'disabled':''}`}> <House size={25}/> Home</Link>
      <Link to="/inventory" className={`navbar-brand ${isIncomplete ? 'disabled':''}`}> <Grid size={25}/> Inventory</Link>
      <Link to="/quests" className={`navbar-brand ${(isIncomplete || noQuests) ? 'disabled':''}`}> <Book size={25}/> Quests</Link>
      <Link to="/userinfo" className={`navbar-brand ${isIncomplete ? 'disabled':''}`}> <User size={25}/> YOU</Link>
    </nav>

  )
}
