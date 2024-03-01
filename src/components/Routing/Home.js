import React from 'react'
import { BuggyCounter } from '../error-boundary/BuggyCounter'
import MyErrorBoundry from '../error-boundary/MyErrorBoundry'
import { useContext } from 'react'
import { myContext } from '../../utils/MyContext'

export default function Home(props) {
  const contextData = useContext(myContext)
  console.log(contextData);
  contextData.age = 46;
  console.log(contextData)

  return <>
    <h1>This is Home Component</h1>
    <div>Name value is {props.name} </div>
    <div>Name is {contextData.userName} , age is {contextData.age} </div>

    {/* <MyErrorBoundry>
      <BuggyCounter />
    </MyErrorBoundry>
    =============================================
    <BuggyCounter /> */}
  </>
}
