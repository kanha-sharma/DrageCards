import React,{useRef } from 'react'
import Cards from './Cards'
function Forbackground() {
  const ref = useRef(null)
  const data = [
    {
      desc:"This is the first card of the app.",
      filesize:".9mb",
      close:true,
      tag:{
        isOpen:true,
        tagTitle:"Download Now",
        tagColor:"green"
      },
    },
    {
      desc:"This is the second card of the app with blue download background.",
      filesize:".9mb",
      close:false,
      tag:{
        isOpen:true,
        tagTitle:"Download Now",
        tagColor:"blue"
      },
    },
    {
      desc:"lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize:".9mb",
      close:true,
      tag:{
        isOpen:false,
        tagTitle:"Download Now",
        tagColor:"sky"
      },
    },
    {
      desc:"lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize:".9mb",
      close:false,
      tag:{
        isOpen:true,
        tagTitle:"Download Now",
        tagColor:"red"
      },
    },
  ];
  return (
    
    <>
    <div ref={ref} className="w-full h-screen flex flex-wrap gap-3 z-[3]">
       {data.map((item,index)=>(
        <Cards data={item} reference={ref}/>
        ))}
      </div>
    </>
  )
}

export default Forbackground