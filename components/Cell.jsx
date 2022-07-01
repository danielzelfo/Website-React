import React, { useState } from 'react'
import Link from 'next/link'

const Cell = (props) => {
  const [classes, setClasses] = useState(`cell ${props.name}`);

  return (
    
    props.dummy ?
      <div className="dummy nonMobile"></div>
      : 
      <Link href={`/portfolio/${props.name}`}><div className={classes}
      onMouseEnter={() => setClasses(`cell ${props.name} cellHovered ${props.name}Hovered`)}
      onMouseLeave={() => setClasses(`cell ${props.name}`)}></div></Link>
    
  )

}

export default Cell;