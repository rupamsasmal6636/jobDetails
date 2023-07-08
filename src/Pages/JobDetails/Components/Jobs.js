import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function () {
  const[jobs,setJobs]=useState([]);
  const {id}=useParams();
  useEffect(()=>{
    loadJobs();
  },[]);
  const loadJobs= async()=>{
    const result=await axios.get("http://localhost:8080/jobs");
    console.log(result.data)
    setJobs(result.data);
  };
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tittle</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {jobs.map((job,index) => (
                    <tr>
                        <th key={index}>{index+1}</th>
                        <td>{job.title}</td>
                        <td>
                            <button>
                                View
                            </button>
                        {/* <Link to={`/JobDetails/${job.id}`}>View</Link> */}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
