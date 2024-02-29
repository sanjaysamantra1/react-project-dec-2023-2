import React from 'react'
import { BuggyCounter } from '../error-boundary/BuggyCounter'
import MyErrorBoundry from '../error-boundary/MyErrorBoundry'

export default function Home() {
  return <>
    <h1>This is Home Component</h1>
    <MyErrorBoundry>
      <BuggyCounter />
    </MyErrorBoundry>
    =============================================
    <BuggyCounter />
  </>
}
