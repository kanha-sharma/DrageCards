import React ,{useState} from 'react'

function Products({age,data}) {
    const [a,b]=useState(false);
  return (
    <div className='text-white w-full h-60 bg-zinc-700'>
        <h2 className={`${a===false?"text-red-500 text-2xl":"text-blue-500"}`}>{a===false?"hello":"hey"}</h2>
        <button onClick={()=>b(!a)} className='px-5 py-3 bg-green-500 rounded-md text-2xl'>click</button>
        
    </div>
  )
}

export default Products