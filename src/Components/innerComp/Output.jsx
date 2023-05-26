import React, { useContext,useEffect } from 'react';
import GlobalContext from '../../context/global-context';
import buildHTML from '../build';
const Output = () => {
    const{property,codeObj,element,setcodeObj,outObj,setoutObj}= useContext(GlobalContext);
    const {height,width,color,background} = property;
    useEffect(()=>{
        buildHTML(element,setcodeObj,codeObj,outObj,setoutObj);
       
    },[property,element]);
  
    console.log(codeObj) 
    return (
        <>
        <style>
            {
                `
                :root {
                    --bg-color:`+background+`;
                    --light-blue: #16D1AF;
                    --white: #FFFFFF;
                    --grey: rgba(255, 255, 255, 0.1)
                }
               
                nav a{
                    color:`+color+`;
                    text-decoration:none;
                }
                nav {
                    background: var(--bg-color); 
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 160px;
                    width: 100%;
                    height: `+height+`px;
                    color:`+color+` ;
                }
                .burgerNav{
                    display: none;
                }
                
                nav ul {
                    display: flex;
                    justify-content: space-between;
                    list-style: none;
                }
                
                nav ul li {
                    display: flex;
                    align-items: center;
                    padding: 0 42px;
                    font-weight: 400;
                    font-size: 16px;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    height: 30px;
                
                }
                
                .logo img {
                    height: 18px;
                    padding-right: 5px;
                }
                
                .logo p {
                    font-weight: 700;
                }
                
                .btnquotesNav {
                    width: 139px;
                    height: 39px;
                    border-radius: 4px;
                    font-size: 14px;
                    background: var(--grey);
                    color: var(--white);
                    border: none;
                
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
