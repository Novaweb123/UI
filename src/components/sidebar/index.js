import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import DisplayProfile from '../displayProfile';
import './sidebar.css';
import { SiDiscourse } from "react-icons/si";
//import { MdScreenSearchDesktop,MdCardMembership } from "react-icons/md";
//import { HiOutlineTrendingUp } from "react-icons/hi";
//import { BsLaptop } from "react-icons/bs";
import {
    FaBars,
}from "react-icons/fa";
import Navbar from '../navbar';
import Footer from '../footer';


const Sidebar = ({children,menuItem},props) => {
    
    const navigate = useNavigate()
    const userInfo = useSelector(state => state?.app?.userInfo)
    const {text} =props;
    const[isOpen ,setIsOpen] = useState(false);
    const[about ,setAbout] = useState("");
    const [menuBar, setMenuBar] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const open = () => {
        setIsOpen (true)
    };
    const close = () => {
        setIsOpen (false)
        setAbout("");
    };

    const buttonClick = (name) => {
        if(name  != "/"){
            navigate(name)
        }
        setAbout(name);
    };

    return (


   

        <div className="d-flex" style={{width:"100%"}}>
           <div style={{width: isOpen ? "250px" : "160px"}} className="sidebar"  onClick={toggle} >
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"></h1>
                   <div style={{marginLeft: isOpen ? "180px" : "-10px"}} className="bars">
                       <FaBars onClick={toggle} />
                   </div>
               </div>

               
                    
                        <div className="lp-sidebar-wrapper">
                            <Navbar />
                        </div>
                        

                

           </div>
           <main>{children}</main>
        </div>
       /*<div className="d-flex" style={{width:"100%"}}>
           <div style={{width: isOpen ? "360px" : "80px"}} className="sidebar">
               <div className="top_section">
                   <div style={{display: isOpen ? "block" : "none"}} className="display_block">
                  
                   </div>
                   <div style={{marginLeft: isOpen ? "20px" : "-8px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               <div>
               <ul >
                    <li >
                       <NavLink to='/trainee/dashboard' className="linked" activeclassName="active" onMouseOver={toggle}>
                           <div className="icon">
                           <DashboardIcon />
                           </div>
                           <div style={{display: isOpen ? "block" : "none",textDecoration:"none"}} className="link_text text-decoration-none">Dashboard</div>
                       </NavLink>
                       
                       <li>
                    <NavLink to='/trainee/favourite-instructor'  className="link">
                    <div className="icon">
                    <DashboardIcon /></div>
                            Dashboard
                        </NavLink>

                        

                        </li>
                    <li>
                    <NavLink to='/trainee/favourite-instructor'  className="link">
                    <div className="icon">
                    <AddressBookIcon />
                    </div>
                    Favourite Instructors
                        </NavLink>
                        </li>
					<li>
                    <NavLink to='/trainee/favourite-course'  className="link">
                    <div className="icon"><Likes2Icon /></div>
                    Favourite Course
                        </NavLink>
                        </li>
                    <li>
                    <NavLink to='/trainee/favourite-videos' className="link">
                    <div className="icon">
                    <Likes2Icon />
                    </div>
                    Favourite Videos
                        </NavLink>
                        </li>
                        
                       </li>
                     
               </ul>
           </div>
           </div>
           <main>{children}</main>
    </div>*/
    );
};

export default Sidebar;