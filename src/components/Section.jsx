import React from 'react'
import "./Section.css"

const Section = ({Icon, title, color, selected}) => {
  return (
    <div className={`section ${selected && "section-selected"}`} style={{
      background: `${selected? "#F4F4F4" : ""}`,
      color: `${selected? color : "#505251"}`,
    }}>
      <Icon />
      <h4>{title}</h4>
    </div>
  )
}

export default Section
