import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import {Card,CardBody,CardTitle,Input,Container,Button} from 'reactstrap'
import base_url from './../service/serviceapi'
const AddBlog = ()=>{

    const [blog, setBlog] = useState({})

    const handleForm = (param)=>{
        postData(blog)
        param.preventDefault()
    }

    const postData = (data)=>{
        axios.post(`${base_url}/create`,data).then(
            (response)=>{
                toast.info("!! New Blog Posted Successfully")
            },(error)=>{
                toast.error("!! Something went wrong on Server. We are looking at it. !!")
            }
        )
    }

    return(
        <Card body inverse color="info">
            <CardBody>
                <form onSubmit={handleForm}>
                    <CardTitle className="display-2">
                        New Blog
                    </CardTitle>
                    <Input placeholder="Enter the Blog Title here."
                        onChange={(e)=>{
                            setBlog({...blog,title:e.target.value})
                        }}/>
                    <br/>
                    <Input type="textarea" rows="10" 
                        placeholder="Enter the Blog Content here."  
                        onChange={(e)=>{
                            setBlog({...blog,content:e.target.value})
                        }}/>
                    <br/>
                    <Container>
                        <Button type="submit" color="success" style={{marginRight:15+"px"}}>
                            Post Blog
                        </Button>
                        <Button type="reset" color="warning">
                            Clear
                        </Button>
                    </Container>
                </form>
            </CardBody>
        </Card>
    )
}
export default AddBlog