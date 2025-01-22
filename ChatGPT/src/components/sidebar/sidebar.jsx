import React, { useContext, useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context'



const Sidebar = () => {
    const { onSent,setRecent,handle0nclick_default, previos, ShowResult,handleclose_btn } = useContext(Context)
    const loadPrompt = async (prompt) =>{
        setRecent(prompt)
        await onSent(prompt)
    }
    return (
        <div className='side_bar' >
            <div className='content_ top-0 sidebar bg-zinc-900 h-screen text-white p-4'>
                <nav className='flex justify-between mb-1'>
                    <div className=' hover:bg-zinc-800 p-3 rounded-xl'>
                        <img src={assets.close_icon} alt="close" className='close_btn invert cursor-pointer' width={30} onClick={handleclose_btn} />
                    </div>
                    <div className='flex gap-1 cursor-pointer justify-center items-center '>
                        <div className=' hover:bg-zinc-800  p-3 rounded-xl '>
                            <img src={assets.search_icon} alt="search" className='invert ' width={30} />

                        </div>
                        <div className=' hover:bg-zinc-800 p-3 rounded-xl'>
                            <img src={assets.edit_icon} alt="edit" className='invert' width={30} />
                        </div>
                    </div>
                </nav>
                <div className='sidebar_content ' >
                    <div className='ml-1 mb-7'>
                        <div className='flex items-center gap-4 hover:bg-zinc-800 p-3 rounded-xl cursor-pointer' onClick={handle0nclick_default}>
                            <img src={assets.chatGPT_icon} alt="logo" className='invert ' width={22} />
                            ChatGPT
                        </div>
                        <div className='flex items-center gap-4  hover:bg-zinc-800 p-3 rounded-xl cursor-pointer'>
                            <img src={assets.explore_icon} alt="explore" className='invert items-center' width={22} />
                            Explore GPTS</div>
                    </div>
                    {ShowResult ?
                        <div>
                            <div id='current_ses' className='ml-3 mb-9'>Today
                                <div className='cursor-pointer'>
                                    {previos.map((item, i) => {
                                        return (
                                            <div className='mt-2 justify-center overflow-hidden text-ellipsis whitespace-nowrap' onClick={()=>loadPrompt(item)}>
                                                {item}
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                            <div id='prev_ses' className='ml-3'>previous 7days
                                    <div className='mt-2'>
                                    !! Not available !!
                                    </div>
                            </div>
                        </div> : <></>}
                </div>
            </div>
        </div>

    )
}

export default Sidebar
