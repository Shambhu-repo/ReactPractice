import React from 'react'
import './ExplorerMenu.css'
import { menu_list } from '../../food-del-assets/assets/frontend_assets/assets.js'
import PropTypes from 'prop-types';

const ExplorerMenu = ({category,setCategory}) => {  /* this two parameter is taking from the home.jsx , passing to fooddisplay component to show the food item as per category */
  return (
    <div className='explorer-menu' id='explorer-menu'>
      <h1>Explorer our Menu</h1>
      <p className='explore-menu-text'>Chose from a diverse menu featuring a deletable array of dishes . Our mission is to satisfy our customer</p>
    <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''></img>
                    <p>{item.menu_name}</p>
                    </div>
            )
        })}
    </div>
    <hr/>
    </div>
  )
}

ExplorerMenu.propTypes = { 
    category: PropTypes.string.isRequired, 
    setCategory: PropTypes.func.isRequired 
}
export default ExplorerMenu
