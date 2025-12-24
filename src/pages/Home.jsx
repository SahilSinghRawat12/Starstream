import React, {useState , useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import PostItem from '../components/PostItem';
import Spinner from '../components/Spinner';
import axios from 'axios';
import toast from 'react-hot-toast'

const Home = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const {loading , setLoading} = useContext(AppContext);
  const [posts , setPosts] = useState([]);
 

       
    async function fetchPosts()
    {
        setLoading(true);

         const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=4`;
         
          try {
              const output = await axios.get(url);
           

              setPosts((prev) => [...prev , ...output.data]);

           
          } 
          
          catch (error) {
            console.log("error agya bhai");
          }

          finally {
            setLoading(false);
          }

    

    }

    const handleInfiniteScroll = async ()=>{
       const viewportHeight = window.innerHeight;
       const scrollHeight = document.documentElement.scrollTop;
       const totalHeight = document.documentElement.scrollHeight;

      try {
         if(viewportHeight + scrollHeight + 100 >= totalHeight)
         {
              fetchPosts();
         }
      } 
      
      catch (error) {
            toast.error("Failed to load image from NASA")     
      }
    }


    useEffect(()=>{
      fetchPosts();
    } , [])


    useEffect(()=>{
      window.addEventListener("scroll" , handleInfiniteScroll);
     return ()=> window.removeEventListener("scroll" , handleInfiniteScroll);
      
    }, [])


  return (
    <div className='bg-[#f3f4f6] pt-16 min-h-screen dark:bg-zinc-950'> 
       <div className='flex flex-col justify-center items-center max-w-[630px] w-full min-h-[630px] mx-auto gap-y-5'>
         { 
           posts.map((post , index)=> (<PostItem key={index} post={post}/>)) 
         }
            <Spinner/>   
        </div>         
    </div>
  )
}

export default Home