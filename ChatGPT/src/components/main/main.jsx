import React, { useContext, useState } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context'
function Main() {
    const { input, setinput, onSent, ShowResult, Recent, Result } = useContext(Context);
    const [divs, setDivs] = useState([]);

    const addPrevResponse = () => {
        const newDiv = (
            <div className='response_  '>
                <div className='flex justify-end'>
                    <p className=' text-white  bg-neutral-700 p-5 rounded-3xl mr-80 overflow-auto max-w-xl break-words mb-10'>
                        {Recent}
                    </p>
                </div>
                <div className='pl-80 text-white'>
                    <img src={assets.chatGPT_icon} width={"40px"} alt="chatgpt_icon" className='invert p-2 border border-slate-500 rounded-full' />

                    <p className=' text-white mt-6 mb-8 overflow-auto w-3/4' dangerouslySetInnerHTML={{ __html: Result }} >
                    </p>
                </div>
            </div>
        );
        setDivs(prevDivs => [...prevDivs, newDiv]);

    };
    const handleInputKey = (event) => {
        if (event.key === 'Enter') {
            onSent();
            if (ShowResult)
                addPrevResponse();
        }
    }

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
            {ShowResult ?
                <div>
                    <div className='response_clust overflow-auto'>
                        {divs.map((div, i) => (
                            <div key={i}>{div}</div>
                        ))}
                        <div className='response_  '>
                            <div className='flex justify-end'>
                                <p className=' text-white  bg-neutral-700 p-5 rounded-3xl mr-80 overflow-auto max-w-xl break-words mb-10'>
                                    {Recent}
                                </p>
                            </div>
                            <div className='pl-80 text-white'>
                                <img src={assets.chatGPT_icon} width={"40px"} alt="chatgpt_icon" className='invert p-2 border border-slate-500 rounded-full' />

                                <p className=' text-white mt-6 mb-8 overflow-auto w-3/4' dangerouslySetInnerHTML={{ __html: Result }} >
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='fixed bottom-0 flex justify-center w-5/6 mb-14 '>
                        <div className='text_input bg-neutral-700 p-4 rounded-xl'>
                            <input type="text" placeholder='Message ChatGPT' onChange={(e) => setinput(e.target.value)} value={input} onKeyDown={handleInputKey} className='input_text bg-neutral-700 outline-none text-white' />
                            <div className='flex justify-between mt-2'>
                                <img src={assets.gallery_icon} alt="image" className='invert cursor-pointer' width={30} />
                                <img src={assets.send_icon} alt="sent" onClick={() => { onSent(); addPrevResponse(); }} className='invert cursor-pointer' width={30} />
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <div className='flex justify-center gap-4 mt-60 '>
                        <div className=' text-white text-4xl font-bold'>
                            What can I help with?
                        </div>
                    </div>
                    <div className='flex justify-center gap-4 mt-6 '>
                        <div className='text_input bg-neutral-700 p-4 rounded-xl'>
                            <input type="text" placeholder='Message ChatGPT' onKeyDown={handleInputKey} onChange={(e) => setinput(e.target.value)} value={input} className='input_text bg-neutral-700 outline-none text-white' />
                            <div className='flex justify-between mt-2'>
                                <img src={assets.gallery_icon} alt="image" className='invert cursor-pointer' width={30} />
                                <img src={assets.send_icon} alt="sent" onClick={() => onSent()} className='invert cursor-pointer' width={30} />
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className='fixed bottom-0 flex justify-center w-4/5 text-zinc-400 m-4'>
                <footer>
                    ChatGPT can make mistakes. Check important info.
                </footer>
            </div>
        </div>
    )

}

export default Main
