import React, { useContext } from 'react';
import Codeframe from './innerComp/Codeframe';
import GlobalContext from '../context/global-context';

const CodePut = () => {
    const{outObj}= useContext(GlobalContext);
  
    return (
        <div className='CodePut'>
            <div className='wrap'>
            <Codeframe code={outObj.html}/>
            </div>
           
        </div>
    );
}

export default CodePut;
