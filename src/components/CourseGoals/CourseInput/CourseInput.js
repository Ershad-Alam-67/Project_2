import React, { useState } from "react"

import Button from "../../UI/Button/Button"
import "./CourseInput.css"

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("")
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value)
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return
    }
    props.onAddGoal(enteredValue)
  }
  let invalid = isValid ? "" : "invalid"
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control  ${invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <button type="submit" className={`${invalid}`}>
        Add Goal
      </button>
    </form>
  )
}

export default CourseInput
