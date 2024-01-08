import React, { Component } from 'react'
import TaskApiService from '../services/TaskApiService';
import {Link } from 'react-router-dom';

export default class TaskList extends Component {
    constructor(props)
    {
        super(props);

        this.state={
            details:[]
        }
    }

    componentDidMount(){
      
      TaskApiService.getTasks().then((res)=>
      {
          this.setState({details:res.data})
      })
    
    }


    deleteTask=(id)=>
    {
        TaskApiService.deleteTask(id).then(res=>
            {
                TaskApiService.getTasks().then((res)=>
                {
                    this.setState({details:res.data})
                }) 

            }).catch(error=>
                {
                    console.log(error);
                })
    }

  render() {
    return (
      <div>
            <h3 className='text-center my-5'>Task List</h3>

            <Link to="/add-task" className='btn btn-outline-primary mt-4 w-100'>Add Task</Link>  

            <div className='row my-5'>
                <table className='table  table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.details.map(
                                data=>
                                <tr key={data.id}>
                                      <td>{data.id}</td>
                                      <td>{data.name}</td>
                                      <td>{data.description}</td>  
                                      <td>
                                         
                  <Link to="/update-task/1" className="btn btn-info" >update</Link>  
    <button className='btn btn-danger' style={{marginLeft:"15px"}} onClick={()=> this.deleteTask(data.id)}>Delete</button>                                          
                                      </td> 
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>        
      </div>
    )
  }
}