import React from 'react';
import Form from './innerComp/form';
import menuicon from '../assets/logo/Vector-menu.svg'
import '../styles/sideBar.scss'
const SideBar = () => {
    return (
        <div className='SideBar'>
            <div className='side-top'>
               
               <img src={menuicon} alt="" className='img-nav'/>
               <p>Welcome Ali,</p> 
            </div>
            
            <hr />
            <Form></Form>
        </div>
    );
}

export default SideBar;
