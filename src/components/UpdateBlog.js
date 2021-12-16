import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card,CardBody,CardTitle,Input,Container,Button} from 'reactstrap'
import base_url from './../service/serviceapi'
import {toast} from 'react-toastify'

const UpdateBlog = (props)=>{

    const [blog,setBlog] = useState({})
    //-------------- Load data from server by Id
    const getBlogFromServerById = ()=>{
        axios.get(`${base_url}/id/${props.location.param}`).then(
            (response)=>{
                setBlog(response.data)
            },(error)=>{
                toast.error("!! Something went wrong on Server. We are looking at it. !!")
            }
        )
    }

    useEffect(()=>{
        getBlogFromServerById()
    },[])


    //-------------- Posting the data to server
    const handleForm = (param)=>{
        putData(blog)
        param.preventDefault()
    }

    const putData = (data)=>{

        axios.put(`${base_url}/update`,data).then(
            (response)=>{
                toast.info("!! Blog Updated Successfully")
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
                        Update Blog
                    </CardTitle>
                    <Input placeholder="Enter the Blog Title here." value={blog.title}
                        onChange={(param)=>{
                            setBlog({...blog,title:param.target.value})
                        }}/>
                    <br/>
                    <Input type="textarea" rows="10" 
                        placeholder="Enter the Blog Content here."  value={blog.content}
                        onChange={(param)=>{
                            setBlog({...blog,content:param.target.value})
                        }}/>
                    <br/>
                    <Container>
                        <Button type="submit" color="success" style={{marginRight:15+"px"}}>
                            Post Blog
                        </Button>
                        <Button type="reset" color="warning" onClick={getBlogFromServerById}>
                            Clear
                        </Button>
                    </Container>
                </form>
            </CardBody>
        </Card>
    )
}
export default UpdateBlog