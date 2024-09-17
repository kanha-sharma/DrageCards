import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"
function Cards({data, reference}) {
  // props of data that come from background component
  return (
    <>
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} 
    dragElastic={.1} dragTransition={{bounceStiftfness:600,bounceDamping:10}} 
    className="relative w-44 h-56 bg-zinc-700  m-2 rounded-[20px] p-5 overflow-hidden
     text-white">
    <FaFileAlt  />        
      <p className="leading-tight text-sm mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
      <div className="flex items-center justify-between py-3 px-8 mb-3">
      <h5>{data.filesize}</h5>
      <span className="w-5 h-5 bg-zinc-600 flex items-center justify-center rounded-full bg-zinc-500 cursor-pointer">
      {data.close ? <IoCloseSharp />:<MdOutlineFileDownload size=".8rem"/>}
      </span>

      </div>
      {
        data.tag.isOpen &&(
        <div className={`tag w-full py-2 ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
           <h3 className="text-md text-semibold cursor-pointer">{data.tag.tagTitle}</h3>
        </div>
        )}
      
      </div> 
    </motion.div>
    </>
  )
}

export default Cards