import React from 'react'

export default function Main() {
  return (
    <div>
        <div className='row justify-content-center'>
            <h1>React To Do List</h1>
            <input type='text' placeholder='Enter Task' className='form-control'/>
            <button className='btn btn-success'>ADD</button>
        </div>
    </div>
  )
}
