import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TaskApiService from '../services/TaskApiService';

export default function TaskForm()
{
  
    let navigate = useNavigate();
    
    const [details,setDetails]=useState({
        name:"",
        description:""
      })


  const handleClick=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setDetails({... details,[name]:value});
  }    

  const saveHandler=(e)=>
  {
      e.preventDefault();
      console.log("details =>"+JSON.stringify(details));
      
      TaskApiService.createTask(details).then(res=>
        {
          navigate('/tasks');
        })
  }

  
  const cancelHandler=(e)=>
  {
    navigate('/tasks');
  }
 
  
    return (
      <div className="container my-5">
          <div className="row my-5">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Task</h3>
              <div className="card-body">
                <form>
                  <div className="form-group my-2">
                    <label className='my-3'>Task Name :</label>
                    <input placeholder="Task Name" name="name" className="form-control"
                           value={details.name} onChange={handleClick}/>
                  </div>
                  <div className="form-group my-2">
                    <label className='my-3'>Task Description:</label>
                    <input placeholder="Task Description" name="description" className="form-control"
                           value={details.description} onChange={handleClick}/>
                  </div>
                  
                  <button className='btn btn-success my-3 float-start' onClick={saveHandler}>save</button>
                  <button className='btn btn-danger my-3 float-end' onClick={cancelHandler} style={{marginLeft:"10px"}}>cancel</button>
                </form>
              </div>
            </div>
          </div>  
      </div>

    )
  }