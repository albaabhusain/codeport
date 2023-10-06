import React from 'react';
import TopBar from './topBar';
import SideBar from './sideBar';
import { GlobalProvider } from '../context/global-context';
import Display from './display';
import CodePut from './codePut';
const Main = () => {
    return (
        <div className='Main'>

            <GlobalProvider>
                
                    <SideBar/>
                    <div className='Rightbar'>
                    <TopBar/>
                    <Display/>
                    <CodePut/>
                    </div>
                    
                   
                
            </GlobalProvider>
            
            
        </div>
    );
}

export default Main;
