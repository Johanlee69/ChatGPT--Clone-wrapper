import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
    return (
        <div >
            <div className='sticky top-0 sidebar bg-zinc-900 h-screen text-white p-3'>
                <nav className='flex justify-between mb-1'>
                    <div className=' hover:bg-zinc-800 p-3 rounded-xl'>
                        <img src={assets.close_icon} alt="close" className='invert cursor-pointer' width={30} />
                    </div>
                    <div className='flex gap-1 cursor-pointer justify-center items-center '>
                        <div className=' hover:bg-zinc-800 p-3 rounded-xl'>
                            <img src={assets.search_icon} alt="search" className='invert' width={30} />

                        </div>
                        <div className=' hover:bg-zinc-800 p-3 rounded-xl'>
                            <img src={assets.edit_icon} alt="edit" className='invert' width={30} />
                        </div>
                    </div>
                </nav>
                <div className='sidebar_content ' >
                    <div className='ml-1 mb-7'>
                        <div className='flex items-center gap-4 hover:bg-zinc-800 p-3 rounded-xl cursor-pointer'>
                            <img src={assets.chatGPT_icon} alt="logo" className='invert ' width={22} />
                            ChatGPT
                        </div>
                        <div className='flex items-center gap-4  hover:bg-zinc-800 p-3 rounded-xl cursor-pointer'>
                            <img src={assets.explore_icon} alt="explore" className='invert items-center' width={22} />
                            Explore GPTS</div>
                    </div>
                    <div id='current_ses' className='ml-3 mb-9'>Today
                        <div className='mt-2 cursor-pointer'>
                            Current session summary
                        </div>
                    </div>
                    <div id='prev_ses' className='ml-3'>previous 7days
                        <div className='cursor-pointer'>
                        <div className='mt-2'>
                            previous session summarries [1]
                        </div>
                        <div className='mt-2'>
                            previous session summarries [2]
                        </div>
                        <div className='mt-2'>
                            previous session summarries [3]
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar
