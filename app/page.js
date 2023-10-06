"use client"
  import React, { useState } from 'react'

const page = () => {

  

  const noreload = (e)=>{
    e.preventDefault();
    setmaintask([...maintask,{task}])
    settask("");
    

  }
const deletehandler = (i)=>{
  let copytask = [...maintask];
  copytask.splice(i,1);
  setmaintask(copytask)
  ;


}  
  const [task, settask] = useState("")
  const [maintask, setmaintask] = useState([])
  
  let render = <li className='px-5 list1'>
    <h5 className='font-bold'>No task available</h5>
  </li> 
    

  if(maintask.length>0){
    render = maintask.map((t,i)=>{
      return(

        <li  className='flex justify-between p-5 list2'>
      <div>
        <h5 className='li-task' id='task'>{t.task}</h5>
      </div>
      <div>
      <button onClick={()=>{
        deletehandler(i);
      }} className='bg-blue-800 text-white px-2 py-2'>Delete</button>
      </div>
      
      </li>
      );
    })
  }


  
  return (
    <>
    <div className="relative">

    <h1 className="head py-3 bg-blue-800 text-white text-center text-2xl">Your To-Do-List</h1>

    <div className='text-center section1 mt-5 mb-5'>
    <form className='form' onSubmit={noreload}>


      <input type="text" className='border-slate-500 border-2 py-3 px-3 input1' name="" id="" placeholder='Enter your task' value={task} 
      onChange={(e)=>{
        settask(e.target.value)
      }}/>

      <button className=' bg-blue-800 text-white border-2  border-slate-500 px-5 py-3 btn'>Add Task</button>
    
    </form>

    </div>
    <div className='py-5 bg-slate-200'>
      <ul>
        {render}
      </ul>
    </div>
    </div>
    
    </>
  )
}

export default page
