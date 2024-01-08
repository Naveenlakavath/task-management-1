import React, { Component, useEffect } from 'react'
import { useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TaskApiService from '../services/TaskApiService';


export default function UpdateTask(props)
{
  
    let navigate = useNavigate();
   

    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const {id}= useParams();



  useEffect(()=>
  {
    TaskApiService.getTaskById(id).then((res)=>
    {
        setName(res.data.name);
        setDescription(res.data.description);

    }).catch(error=>
        {
            console.log(error);
        })

  },[])

 
 const updateHandler=(e)=>
 {
    e.preventDefault();
    const details={name,description};
    
    if(id){
           TaskApiService.updateTask(id,details).then(res=>{
            navigate('/tasks');
           }); 
    }
    else{    
            TaskApiService.createTask(details).then(res=>
            {
            console.log(res.data);
            navigate('/tasks');

        })
    }
 }
  
  const cancelHandler=(e)=>
  {
    navigate('/tasks');
  }
 
  
    return (
      <div className="container mt-3">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Task</h3>
              <div className="card-body">
                <form>
                  <div className="form-group my-2">
                    <label>Name:</label>
                    <input placeholder="Enter Name" name="name" className="form-control"
                           value={name} onChange={(e)=> setName(e.target.value)}/>
                  </div>
                  <div className="form-group my-2">
                    <label>Description:</label>
                    <input placeholder="Enter Description" name="description" className="form-control"
                           value={description} onChange={(e)=> setDescription(e.target.value)}/>
                  </div>

                  
                  <button className='btn btn-success' onClick={updateHandler}>save</button>
                  <button className='btn btn-danger' onClick={cancelHandler} style={{marginLeft:"10px"}}>cancel</button>
                </form>
              </div>
            </div>
          </div>  
      </div>

    )
  }
