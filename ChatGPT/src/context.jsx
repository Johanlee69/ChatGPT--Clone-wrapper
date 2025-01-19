import runCHAT from "./config/lang_model(Gemini)";

import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
   
    const [input,setinput] = useState("");
    const [Recent,setRecent] = useState("");
    const [Result,setResult] = useState("");
    const [ShowResult,setShowResult]= useState(false);

    const onSent = async (props)=>{
        setinput("");
        setResult("");
        setShowResult(true);
        setRecent(input)
        const resposne = await runCHAT(input);
        let newResArray = resposne.split("**");
        let newResponse = [];
        for(let i = 0; i < newResArray.length;i++){
            if(i === 0 || i%2 !== 1 ){
                newResponse += newResArray[i];
            }
            else{
                newResponse += "<b>" +newResArray[i]+ "</b>";
            }
        }
        let FinalResponse = newResponse.split("*").join("</br></br>");
        setResult(FinalResponse);
    }
        
    const contextValue = {
        input,setinput,
        onSent,
        ShowResult,setShowResult,
        Recent,setRecent,
        Result,setResult
    }
    return(
        <Context.Provider value={contextValue}>
         {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;