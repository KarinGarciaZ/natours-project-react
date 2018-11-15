import React from 'react';
 
const feature = (props) => {
  return(
    <div className="feature-box">
      <i className={props.classesIcon}></i>
      <h3 className={props.classesTitle}>{props.title}</h3>
      <p className={props.classesText}>
        {props.text}
      </p>
    </div>
  )
}

export default feature;