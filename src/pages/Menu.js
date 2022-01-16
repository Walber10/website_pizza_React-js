import React from 'react'
import MnuItem from '../components/MnuItem'
import { MenuList } from '../helpers/MenuList'
import '../styles/Menu.css'

export default function Menu() {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Our menu</h1>
            <div className='menuList'>
                {MenuList.map((menuItem, Key)=>{
                return <MnuItem  
                key={Key}
                image={menuItem.image} 
                name={menuItem.name} 
                price={menuItem.price}/>
                })}
            </div>
        </div>
    )
}
