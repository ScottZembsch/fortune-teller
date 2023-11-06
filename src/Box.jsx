import React from 'react'


function Box (props) {

  const boxStyle = {
    backgroundColor: props.color,
  }

  return (
    <div id={props.id} className='box' style={boxStyle} onClick={(e) => {props.click(e)}} currcount={props.currcount}>
      <h4 className='box-text'>{props.innerText}</h4>
    </div>
  )
}
 
export default Box; 