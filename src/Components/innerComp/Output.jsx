import React, { useContext } from 'react';
import GlobalContext from '../../context/global-context';
const Output = () => {
    const{codeObj}= useContext(GlobalContext);
    
    console.log(codeObj) 
    return (
        <>
        <style>
            {
                `
                    .output{
                        
                    }
                `
            }
        </style>
            <div className="output">
                {codeObj.html}     
                
            </div>   
        </>
    );
}

export default Output;
