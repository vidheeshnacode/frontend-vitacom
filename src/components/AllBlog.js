import React, { useEffect, useState } from 'react'
import { Card, CardTitle } from 'reactstrap'
import axios from 'axios'
import Blog from './Blog'
import base_url from './../service/serviceapi'
import {toast} from 'react-toastify'
const AllBlog = ()=>{

    const [blogs, setBlogs]=useState([])

    //useEffect should call load from db method
    useEffect(()=>{
        getAllBlogsFromServer()
    },[])

    const updateBlogs= (blogId)=>{
        setBlogs(blogs.filter((blog)=>blog.blogId!==blogId))
    }

    const getAllBlogsFromServer = ()=>{
        axios.get(`${base_url}/all`).then(
            (response)=>{
                setBlogs(response.data)
                toast.info("All Blogs Loaded",{position:"top-center"})
            },
            (error)=>{
                toast.error("Something went wrong")

            }

        )

    }

    return (
        <Card body inverse color="info">
            <CardTitle className="display-3">
                All Blogs
            </CardTitle>
            {
                blogs.length>0?
                    blogs.map((blog)=>(

                        <Blog key={blog.blogId} blog={blog} update={updateBlogs}/>
                    ))
                    :
                    "No Blogs Available to Show"
            }
        </Card>
    )
}

export default AllBlog