import React from 'react'

const Content = () => {
  return (
        <div className='flex flex-col md:flex-row w-full h-min-screen gap-5 p-5'>
            <div className='w-full md:w-1/3 gap-5 flex flex-col h-min-screen flex-1'>
                <div className='w-full h-fulll min-h-[200px] md:min-h-[300px] bg-amber-200 rounded-2xl p-5 overflow-hidden'>
                <p></p>
                </div>
                <div className='w-full h-fulll min-h-[200px] md:min-h-[300px] bg-blue-300 rounded-2xl p-5'>
                <p></p>
                </div>
                <div className='w-full h-fulll min-h-[200px] md:min-h-[300px] bg-rose-300 rounded-2xl p-5'>
                <p></p>
                </div>
            </div>
            <div className='w-full md:w-1/3 gap-5 flex flex-col h-min-screen flex-1'>
            <div className='w-full h-fulll min-h-[200px] md:min-h-[300px] rounded-2xl p-5 bg-green-300'>
                <p></p>
                </div>
                <div className='w-full h-fulll min-h-[200px] md:min-h-[300px] rounded-2xl bg-purple-400 p-5'>
                <p></p>
                </div>
                <div className='w-full h-fulll min-h-[200px] md:min-h-[300px] rounded-2xl bg-gray-400 p-5'>
                <p></p>
                </div>
        </div>
         <div className='w-full md:w-1/3 gap-5 flex flex-col h-min-screen flex-1'>
         <div className='w-full h-full min-h-[200px] md:min-h-[300px] rounded-2xl bg-fuchsia-500 p-5 '>
            
                <p></p>
                </div>
                <div className='w-full h-full min-h-[200px] md:min-h-[300px] rounded-2xl bg-orange-400 p-5'>
                <p></p>
                </div>
                <div className='w-full h-full min-h-[200px] md:min-h-[300px] rounded-2xl bg-teal-300 p-5'>
                <p></p>
                </div>
            </div>
        </div>

  )
}

export default Content