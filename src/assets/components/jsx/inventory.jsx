import React from 'react'
import '../css/inventory.css'
import { Dumbbell, Utensils, BookText } from 'lucide-react'
export default function Inventory() {
  return (
    <div>
      <h1 className="inv_title">Inventory</h1>
      <div className='inv_container'>
        <div className="inv_item">
          <Dumbbell size={60} className='inv_item_icon'/>
          <div className='inv_item_info'>
            <span className='inv_item_titleTxt'>Workout Plan</span>
            <span className='inv_item_description'>A Workout plan focused on optimal muscle gain for both skinny and fat people</span>
          </div>
        </div>
        <div className="inv_item">
          <Utensils size={60} className='inv_item_icon'/>
          <div className='inv_item_info'>
            <span className='inv_item_titleTxt'>Diet Plan</span>
            <span className='inv_item_description'>A Diet plan focused on a balanced diet for both skinny and fat people</span>
          </div>
        </div>
        <div className="inv_item">
          <BookText size={60} className='inv_item_icon'/>
          <div className='inv_item_info'>
            <span className='inv_item_titleTxt'>(PCME) NCERT Solutions Compilation</span>
            <span className='inv_item_description'>A Compiled pdf of all NCERT Solutions for Physics, Chemistry, Maths and English</span>
          </div>
        </div>
        <div className="inv_item">
          <BookText size={60} className='inv_item_icon'/>
          <div className='inv_item_info'>
            <span className='inv_item_titleTxt'>IIT-JEE 10k Question Bank</span>
            <span className='inv_item_description'>A Compiled pdf containing 10000 Questions to practice for IIT-JEE along with the Solutions</span>
          </div>
        </div>
        
      </div>
    </div>
  )
}
