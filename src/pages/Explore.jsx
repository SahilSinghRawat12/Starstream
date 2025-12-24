import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Explore = () => {
 
  const apiKey = import.meta.env.VITE_API_KEY;

  const {loading , setLoading} = useContext(AppContext)
  const [posts , setPosts] = useState([]);

  const fetchExplorePosts = async ()=>{

    setLoading(true);

    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=6`;

        try {
            const output = await axios.get(url);
            setPosts((prev) => [...prev , ...output.data]);
         
        }
        
        catch (error) {
           console.log("error");  
        }
        
        finally{
          setLoading(false);
        }
  }

  const handleInfiniteScroll = async ()=>{
    const viewportHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollTop;
    const totalHeight = document.documentElement.scrollHeight;
    
    try {
       if(viewportHeight + scrollHeight + 300 > totalHeight)
    {
       fetchExplorePosts();
    }

    } catch (error) {
      console.log("error"); 
    }

  }

  useEffect(()=>{
        fetchExplorePosts();
  },[])


  useEffect(()=>{
     window.addEventListener('scroll' , handleInfiniteScroll);
     return ()=> window.removeEventListener('scroll' , handleInfiniteScroll);
  },[])

  return (
    <div className='bg-[#f3f4f6] min-h-screen pt-10 dark:bg-zinc-950 dark:text-white'>
        <div className='grid grid-cols-3  max-w-4xl gap-5 w-full mx-auto '>
              {
                 posts.map((item , index)=>(
                  <div key={index} className='w-full h-full max-w-[630px] cursor-pointer aspect-square mx-auto hover:bg-transparent dark:hover:bg-zinc-700'>
                     <img src={item.hdurl} alt={item.title}  className='w-full h-full object-cover'/>  
                  </div>
                 ))
              }
        </div>
    </div>
  )
}

export default Explore