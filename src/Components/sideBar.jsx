import React from 'react';
import Form from './innerComp/form';
import menuicon from '../assets/logo/Vector-menu.svg'
import '../styles/sideBar.scss'
import {Link} from 'react-router-dom'
const SideBar = () => {
    return (
        <div className='SideBar'>
            <div className='side-top'>
               
              <Link to='/Landing'><img src={menuicon} alt="" className='img-nav'/></Link> 
               <p>Welcome !</p> 
            </div>
            
            <hr />
            <Form></Form>
        </div>
    );
}

export default SideBar;
