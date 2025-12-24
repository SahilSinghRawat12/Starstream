import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { FcLike } from "react-icons/fc"; 
import { IoMdShare } from "react-icons/io";
import {Heart} from 'lucide-react'




const PostItem = ({post}) => {

  const [description , setDescription] = useState(false);
  
  const [like , setLike] = useState(()=>{
   return localStorage.getItem(post.date) === "liked"
  });

  function showFullDesc()
  {
      setDescription(!description);
  }

  const toggleLike = ()=> {
      const newLike = !like;
      setLike(newLike);

      if(newLike)
      {
          localStorage.setItem(post.date, "liked")
      }

      else 
      {
          localStorage.removeItem(post.date)
      }
  };

  function copyHandler()
  {
     const link = `${window.location.origin}/p=${post.date}`;

     navigator.clipboard.writeText(link)
     .then(()=> alert("Link copied"))
     .catch(()=> alert("Failed to copy!"))
  };
 
  return (
    <div className='flex flex-col py-5 gap-y-3 mb-5 justify-center newFont shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-sm dark:bg-zinc-800 dark:text-white '>
         <div className='p-[14px] '>
            <span className='text-[16px] font-[500]'>{post.title}</span>
         </div>
 
         <div className='w-full max-w-[630px] aspect-square mx-auto'>
             <img src={post.hdurl} alt={post.title}  className='w-full h-full object-cover'/>
         </div>

         <div className='flex gap-x-5 mx-3'>
            <div onClick={toggleLike} className='cursor-pointer select-none'>
               {
                  like ? (<FcLike size={25}/>) : (<Heart size={25}/>)
               }
            </div>

            <div onClick={copyHandler} className='cursor-pointer select-none'>
               <IoMdShare size={23}/>
            </div>
         </div>

           <div className='px-[14px]'>
            <span className='text-sm text-gray-900 dark:text-gray-300'>
              {
                 description ? (post.explanation) : (`${post.explanation.substr(0,100)+'...'} `)
              } 

              <div onClick={showFullDesc} className='cursor-pointer text-sm text-gray-600 dark:text-gray-400 font-normal'>
                { 
                   description ? ('less') : ('more')
                }
              </div>
            </span>
         </div>

         <div className='px-4 pt-1 pb-0'>
            <span className='text-xs text-gray-500 font-normal dark:text-gray-400'>{post.date}</span>
         </div>
    </div>
  )
}

export default PostItem