import runCHAT from "./config/lang_model(Gemini)";

import { createContext, useState,useEffect } from "react";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setinput] = useState("");
    const [Recent, setRecent] = useState("");
    const [Result, setResult] = useState("");
    const [ShowResult, setShowResult] = useState(false)
    const [previos, SetPrevious] = useState([])
    const [showSidebar,setSidebar] = useState(true)
    const handle0nclick_default = () => {
        setShowResult(false);
        setRecent("");
        setResult("");
    }
    useEffect(()=>{
        if(window.innerWidth <= 500){
            setSidebar(false)
        }
    })
    
    const handleclose_btn = () =>{
        const element = document.querySelector('.side_bar')
        if(element){
            element.style.width = '0px';
            setTimeout(() => {
                element.style.display = 'none';
                setSidebar(false)
            }, 200);
        
        }
    }
    const handleopen_btn = () =>{
        const element = document.querySelector('.side_bar')
        if(element){
            element.style.display = 'block';
            setSidebar(true)
            setTimeout(() => {
                element.style.width = '420px';
            }, 50);
            
        }
    }

    const onSent = async (prompt) => {
        setinput("");
        setResult("");
        setShowResult(true);
        let resposne;
        if (prompt !== undefined) {
            resposne = await runCHAT(prompt);
            setRecent(prompt);
        }
        else {
            SetPrevious(prev => [...prev, input])
            setRecent(input);
            resposne = await runCHAT(input);
        }

        let newResArray = resposne.split("**");
        let newResponse = [];
        for (let i = 0; i < newResArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += newResArray[i];
            }
            else {
                newResponse += "<b>" + newResArray[i] + "</b>";
            }
        }
        let FinalResponse = newResponse.split("*").join("</br></br>");
        setResult(FinalResponse);
    }

    const contextValue = {
        input, setinput,
        onSent, handle0nclick_default,handleclose_btn,handleopen_btn,
        ShowResult, setShowResult,
        Recent, setRecent,
        Result, setResult,
        previos,
        showSidebar,setSidebar
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;