import React from 'react'
function Alert(props) {
  
  return (
    props.alert &&<div>
      <div className={`alert alert-${props.alert.ty} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.ty}</strong>:{props.alert.msg}
      </div>
    </div>
  )
}

export default Alert
