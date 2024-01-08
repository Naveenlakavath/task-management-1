import axios from 'axios';

	const TASK_API_BASE_URL="http://localhost:9090/api/tasks";

class TaskApiService{

 	   	getTasks()
		{
        	return axios.get(TASK_API_BASE_URL);
    	}
		createTask(details)
    	{
         return axios.post(TASK_API_BASE_URL,details);   
    	}

		getTaskById(id)
    	{
        	return axios.get(TASK_API_BASE_URL+'/'+id);
    	}

    	updateTask(id,details)
    	{
       	 return axios.put(TASK_API_BASE_URL+'/'+id,details);
    	}
		deleteTask(id)
    	{
        	  return axios.delete(TASK_API_BASE_URL+'/'+id);  
    	}
	}
	export default new TaskApiService();