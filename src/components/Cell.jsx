import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cell = (props) => {
  const [classes, setClasses] = useState(`cell ${props.name}`);

  return (
    
    props.dummy ?
      <div className="dummy nonMobile"></div>
      : 
      <Link to={`/portfolio/${props.name}`} className={classes}
        onMouseEnter={() => setClasses(`cell ${props.name} cellHovered ${props.name}Hovered`)}
        onMouseLeave={() => setClasses(`cell ${props.name}`)}></Link>
    
  )

}

export default Cell;