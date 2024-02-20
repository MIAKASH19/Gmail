import React from 'react'
import './SidebarOption.css'

const SidebarOption = ({Icon, title, number, selected}) => {
  return (
    <div className={`Sidebar-option ${selected && "SidebarOption-active"}`}>
      <div className='sidebar-title'>
        <Icon />
        <h3>{title}</h3>
      </div>
      <p>{number}</p>

    </div>
  )
}

export default SidebarOption
