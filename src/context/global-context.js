import React, { createContext , useState } from "react";

const GlobalContext = createContext();
export function GlobalProvider({children}){
    const [element, setElement] = useState();
    const [property, setProperty] = useState({
        height:'-1',
        width:'-1',
        color:'#fff',
        background:'#000000'

    });
    const [spProperty,setspProperty]=useState({
        alignment:'center',
        logo:'text'
    });

    const [codeObj,setcodeObj]=useState({
        html:``,
        CSS:``,
        JS:``
    });
    const [outObj,setoutObj]=useState({
        html:``,
        CSS:``,
        JS:``
    });
    return(
        <GlobalContext.Provider value={{element,setElement,property,setProperty,spProperty,setspProperty,codeObj,setcodeObj,outObj,setoutObj}}>{children}</GlobalContext.Provider>
    )

}



export default GlobalContext;