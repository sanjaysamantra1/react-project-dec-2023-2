import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Careers() {
  return <>
    <h1 className='text-center'>This is Careers Component</h1>
    <hr />
    <div>
      <Link to="permanent" className='m-2'>permanent Jobs</Link>
      <Link to="contract">contract Jobs</Link>
    </div>
    <Outlet />
  </>
}
