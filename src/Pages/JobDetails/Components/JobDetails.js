import React, { useEffect, useState } from 'react'
import { Button, Modal, Descriptions } from 'antd';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function () {
  const navigate=useNavigate();
  const [job,setJob]=useState({
    id:"",
    title:"",
    description:"",
    requirements:"",
    location:"",
  })

  const {id}=useParams();

  useEffect(()=>{
    loadJob();
  },[]);

  const loadJob=async()=>{
    const result=await axios.get(`http://localhost:8080/jobs/${id}`);
    setJob(result.data);
  }

  const [open, setOpen] = useState(true);
  const showModal = () => {
    setOpen(true);
  };
  const handleApply = () => {
    setOpen(false);
    navigate("/");
  };
  const handleCancel = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <>
      <Modal  centered width={1000} open={open} onOk={handleApply} onCancel={handleCancel} footer={[
          <Button key="back" onClick={handleCancel}>
            Back
          </Button>,
          <Button key="link"
        href="#" type="primary" onClick={handleApply}>
            Apply
          </Button>,
        ]}>
        <Descriptions title="Job Details" column={2}>
          <Descriptions.Item label="Job id">{job.id}</Descriptions.Item>
          <Descriptions.Item label="Job Tittle">{job.title}</Descriptions.Item>
          <Descriptions.Item label="Job Description">{job.description}</Descriptions.Item>
          <Descriptions.Item label="Job Requirements">{job.requirements}</Descriptions.Item>
          <Descriptions.Item label="Job Location">{job.location}</Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  )
}
