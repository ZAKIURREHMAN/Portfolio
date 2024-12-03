import { useState } from "react"
import { counterContext } from "../CreateContext/CreateContext"


export const CounterProvider = ({children})=>{
    const [drawer,setDrawer] = useState(false)
    return(
        <counterContext.Provider value={{drawer:drawer,setDrawer:setDrawer}} >
            {children}
        </counterContext.Provider>
    )
}

