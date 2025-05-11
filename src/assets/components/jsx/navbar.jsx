import React from 'react'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
import {Grid, House, Book, User} from 'lucide-react'
export default function NavBar() {
  return (
    
    <nav className="navbar">
      <Link to="/" className="navbar-brand"> <House size={25}/> Home</Link>
      <Link to="/inventory" className="navbar-brand"> <Grid size={25}/> Inventory</Link>
      <Link to="/quests" className="navbar-brand"> <Book size={25}/> Quests</Link>
      <Link to="/userinfo" className="navbar-brand"> <User size={25}/> YOU</Link>
    </nav>

    
  )
}
