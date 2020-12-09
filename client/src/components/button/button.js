import React from "react"

const Button = (props)=>{ 

  return (
    <button className={`btn btn-${props.type}`} onClick={props.click}>
    {props.children}
  </button>
  )

}

// return(
  //<button className="btn btn-primary" onClick={this.handleIncrement}>
  // Increment</button> it doesn't know what "this" is...

  //instead of Increment it becomes {props.children}
  //instead of onClick={this.handleIncrement} it becomes onClick={props.click}

export default Button;