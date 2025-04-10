import React from 'react'

const Content = () => {
  return (
        <div className='flex flex-col md:flex-row w-full h-min-screen gap-5 p-5 font-Inter'>
            <div className='w-full md:w-1/3 gap-5 flex flex-col h-min-screen flex-1'>
                <div className='w-full h-fulll min-h-[200px] md:min-h-[300px] hidden md:block rounded-2xl p-5 overflow-hidden'>
                <p></p>
                </div>
                <div className='w-full h-fulll min-h-[200px] md:min-h-[300px] hidden md:block rounded-2xl p-5'>
                <p></p>
                </div>
                <div className='w-full h-fulll min-h-[200px] md:min-h-[300px] bg-blue-50 rounded-sm p-5'>
                    <h1 className='text-3xl mb-3 font-bold'>Running</h1>
                <p className='text-lg '>The rhythm of your feet hitting the ground, the wind kissing your face, and the world unfolding before you – running is pure, unadulterated joy. It's the freedom of movement, the challenge embraced, and the quiet triumph of pushing your limits. Each stride is a celebration of 
                    your body's strength and the simple pleasure of being alive and in motion.</p>
                </div>
            </div>
            <div className='w-full md:w-1/3 gap-5 flex flex-col h-min-screen flex-1'>
            <div className='w-full h-fulll min-h-[200px] md:min-h-[300px] rounded-2xl hidden md:block p-5 '>
                <p></p>
                </div>
                <div className='w-full h-fulll min-h-[200px] md:min-h-[300px] rounded-sm bg-purple-400 p-5'>
                <p></p>
                </div>
                <div className='w-full h-fulll min-h-[200px] md:min-h-[300px] rounded-2xl hidden md:block p-5'>
                <p></p>
                </div>
        </div>
         <div className='w-full md:w-1/3 gap-5 flex flex-col h-min-screen flex-1'>
         <div className='w-full h-full min-h-[200px] md:min-h-[300px] rounded-sm bg-fuchsia-500 p-5 '>
            
                <p></p>
                </div>
                <div className='w-full h-full min-h-[200px] md:min-h-[300px] hidden md:block rounded-2xl  p-5'>
                <p></p>
                </div>
                <div className='w-full h-full min-h-[200px] md:min-h-[300px] rounded-2xl hidden md:block p-5'>
                <p></p>
                </div>
            </div>
        </div>

  )
}

export default Content