import React, { useContext, useEffect } from 'react';
import GlobalContext from '../../context/global-context';
import buildHTML from '../build';

const Form = () => {

    const {element,property,setProperty,setspProperty,spProperty,setcodeObj,codeObj} = useContext(GlobalContext)
    const {height,width,color,background} = property;
    const {alignment}=spProperty;
    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setProperty({...property,[name]:value})
 
    }
    const handlespInput= (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setspProperty({...spProperty,[name]:value})
        console.log(spProperty);
        
    }
    const submitHandleGeneral=(e)=>{
       e.preventDefault();
    }
    useEffect(()=>{
        buildHTML(setcodeObj,property,element,codeObj);
    },[property]);
    const SpclForm = ()=>{
        if(element==='nav'){
            return(
                <>
                   <div>
                        <label htmlFor="alignment">Alignment :</label>
                        <select type="color" name="alignment" value={alignment} onChange={handlespInput} >
                            <option value="space-around">Around</option>
                            <option value="space-between">Between</option>
                            <option value="center">Center</option>
                        </select>
                    </div> 
                </>
            )
        }
    }
    
    return (
        <>
            <div className="generalForm">
                <form action="" onSubmit={submitHandleGeneral}>
                    <div>
                        <label htmlFor="height">Height :</label>
                        <input type="text" name="height" value={height} onChange={handleInput} />
                    </div>
                    <div>
                        <label htmlFor="width">Width :</label>
                        <input type="text" name="width" value={width} onChange={handleInput} />
                    </div>
                    <div>
                        <label htmlFor="color">Color :</label>
                        <input type="color" name="color" value={color} onChange={handleInput} />
                    </div>
                    <div>
                        <label htmlFor="background">Background :</label>
                        <input type="color" name="background" value={background} onChange={handleInput} />
                    </div>
                   <>
                   <SpclForm/>
                   </>
                    <input type="submit" className='submit-btn' value="Export" />
                </form>
            </div>   
        </>
    );
}

export default Form;
