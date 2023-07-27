import React from 'react';
import { CopyBlock,dracula, anOldHope	,codepen } from "react-code-blocks";


const Codeframe = ({ code,lang }) => {
    return (
        <>
            <div className='xcodeFrame'>
                <CopyBlock
                    text={code}
                    language={lang}
                    showLineNumbers={true}
                    theme={codepen}
                />
            </div>
        </>
    );
}

export default Codeframe;

