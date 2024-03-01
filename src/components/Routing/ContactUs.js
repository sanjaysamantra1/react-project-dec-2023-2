/* import React, { useContext } from 'react'
import { myContext } from '../../utils/MyContext'

export default function ContactUs() {
  const contextData = useContext(myContext);

  return <>
    <h1 className='text-center'>This is Contact Us Component</h1>
    <div>Name is {contextData.userName} , age is {contextData.age} </div>
  </>
}
 */

import React, { Component } from 'react';
import { myContext } from '../../utils/MyContext';

export default class ContactUs extends Component {
  render() {
    return <>
      <h2>This is ContactUs component</h2>
      <myContext.Consumer>
        {
          (userObj) => {
            return <div>Name is {userObj.name} , Age is {userObj.age}</div>
          }
        }
      </myContext.Consumer>
    </>
  }
}
