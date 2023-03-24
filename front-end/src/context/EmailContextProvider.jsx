import { createContext, useState } from "react"


export const EmailContext=createContext(undefined)

export const EmailContextProvider=({children})=>{

    const [Email,setEmail]=useState('')

    return(

        <EmailContext.Provider value={{Email,setEmail}}>
             {children}
        </EmailContext.Provider>
    )
}