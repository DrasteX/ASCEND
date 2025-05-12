import React from 'react'
import '../css/inventory.css'
import { Dumbbell, Utensils, BookText } from 'lucide-react'

import { useContext } from 'react';
import { UserContext } from '../../userContext.js';

export default function Inventory() {

  
  const {userlvlinv, itemlib} = useContext(UserContext);
  const getitembyid = (itemid)=>itemlib?.find(item => item._id === itemid)

  return (
    <div>
      <h1 className="inv_title">Inventory</h1>
      <div className='inv_container'>
        {

          userlvlinv?.inventoryItems?.map((itemid, idx)=>{
            const myItem = getitembyid(itemid);
            if (!myItem) return null;

            return (

              <div onClick={()=>{window.open(myItem.itemURL, '_blank')}} key={idx} className="inv_item">
                <img src={myItem.itemIcon} className='inv_item_icon'/>
                <div className='inv_item_info'>
                  <span className='inv_item_titleTxt'>{myItem.itemName}</span>
                  <span className='inv_item_description'>{myItem.itemDescription}</span>
                </div>
              </div>

            )
          })

        }

        

        
        
        
      </div>
    </div>
  )
}
