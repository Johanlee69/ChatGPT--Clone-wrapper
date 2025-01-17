import React from 'react'
import './main.css'
import { assets } from '../../assets/assets'
function Main() {
    return (
        <div className='main bg-neutral-800'>
            <nav className='flex justify-between p-3 font-bold'>
                <div className='flex items-center gap-3  hover:bg-neutral-700 p-4 rounded-xl  text-white cursor-pointer'>
                    <img src={assets.chatGPT_icon} alt="logo" className='invert' width={22} />
                    ChatGPT
                </div>
                <div className=' hover:bg-neutral-700 p-2 rounded-full cursor-pointer mr-3'>
                    {/* change the user icon with google cloud login API */}
                    <img src={assets.user_icon} alt="user" width={50} className='rounded-full ' />
                </div>
            </nav>
            <div className='flex justify-center gap-4 mt-60 '>
                <div className=' text-white text-4xl font-bold'>
                    What can I help with?
                </div>
            </div>
            <div className='flex justify-center gap-4 mt-6 '>
            <div className='text_input bg-neutral-700 p-4 rounded-xl'>
                    <input type="text" placeholder='Message ChatGPT'  className='input_text bg-neutral-700 outline-none text-white'/>
                    <div className='flex justify-between mt-2'>
                        <img src={assets.gallery_icon} alt="image" className='invert' width={30}/>
                        <img src={assets.send_icon} alt="image" className='invert' width={30}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
