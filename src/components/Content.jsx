import React from 'react'

const Content = () => {
  return (
        <div className='flex md:flex-row w-full h-min-screen gap-5 p-5 font-Inter flex-col-reverse '>
            <div className='w-full md:w-1/3 gap-5 flex flex-col h-min-screen flex-1'>
                <div className='w-full h-full min-h-[200px] md:min-h-[300px] hidden md:block rounded-2xl p-5 overflow-hidden'>
                <p></p>
                </div>
                <div className='w-full h-full min-h-[200px] md:min-h-[300px] hidden md:block rounded-2xl p-5'>
                <p></p>
                </div>
                <div className='w-full h-full min-h-[200px] md:min-h-[300px] bg-gray-100 rounded-sm p-5'>
                    <h1 className='text-3xl mb-3 font-bold'>Joy of Running</h1>
                <p className='text-lg '>The rhythm of your feet hitting the ground, the wind kissing your face, and the world unfolding before you – running is pure, unadulterated joy. It's the freedom of movement, the challenge embraced, and the quiet triumph of pushing your limits. Each stride is a celebration of 
                    your body's strength and the simple pleasure of being alive and in motion.</p>
                </div>
            </div>
            <div className='divider divider-horizontal'></div>
            <div className='w-full md:w-1/3 gap-5 flex flex-col h-min-screen flex-1'>
            <div className='w-full h-full min-h-[200px] md:min-h-[300px] rounded-2xl hidden md:block p-5 '>
                <p></p>
                </div>
                <div className='w-full h-full min-h-[200px] md:min-h-[300px] rounded-sm bg-gray-100 p-5'>
                <h1 className='text-3xl mb-3 font-bold'>Gadget Fix</h1>
                <p className='text-lg'> My hands find purpose in the intricate world of circuit boards and tiny components. There's immense satisfaction in diagnosing a malfunctioning device, tracing the fault, and breathing new life into it. Each repair is a puzzle, demanding patience and precision, fueled by a desire to understand the inner workings of technology and
 prevent electronic waste.
                </p>
                </div>
                <div className='w-full h-full min-h-[200px] md:min-h-[300px] rounded-2xl hidden md:block p-5'>
                <p></p>
                </div>
        </div>
         <div className='w-full md:w-1/3 gap-5 flex flex-col h-min-screen flex-1'>
         <div className='w-full h-full min-h-[200px] md:min-h-[300px] rounded-sm bg-gray-100 p-5 '>
                 <h1 className='text-3xl mb-3 font-bold'>World of Web</h1>
                <p className='text-lg'>A world of creative web development is a dynamic realm where imagination meets technology. Always amazed the developers blend artistic vision with coding expertise to craft engaging and functional online experiences.  From interactive animations to intuitive user interfaces, creativity drives innovation,
                     resulting in websites that captivate and communicate. </p>
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