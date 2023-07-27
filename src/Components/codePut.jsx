import React, { useContext } from 'react';
import Codeframe from './innerComp/Codeframe';
import GlobalContext from '../context/global-context';
import '../styles/codePut.scss'

const CodePut = () => {
    const { outObj } = useContext(GlobalContext);

    return (
        <div className='CodePut'>
            <div className='wrap'>
                <div>
                    <span className='code-lbl'>HTML</span>
                    <Codeframe code={outObj.html} lang="html" />
                </div>
                <div>
                    <span className='code-lbl'>CSS</span>
                    <Codeframe code={outObj.CSS} lang="CSS" />
                </div>
                <div>
                    <span className='code-lbl'>JS</span>
                    <Codeframe code={outObj.JS} lang="javascript" />
                </div>

            </div>

        </div>
    );
}

export default CodePut;
