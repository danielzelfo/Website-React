import React, { useState } from 'react';

const Cell = (props) => {
  const [classes, setClasses] = useState(`cell ${props.name}`);
  
  return (
    <div className={classes} onMouseEnter={() => setClasses(`cell ${props.name} cellHovered ${props.name}Hovered`)} onMouseLeave={() => setClasses(`cell ${props.name}`)}></div>
  )
  
}

export default Cell;