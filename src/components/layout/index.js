import React, { useState } from 'react';
import Helmet from 'react-helmet'
import Footer from '../footer';
import Header from '../header';
import './layout.scss'
import Navbar from '../navbar'
import Sidebar from '../sidebar';
import useHelper from '../../hooks/helpers.hook';
import { menuItems } from '../navbar/menuItems';
import { adminAccountItems } from '../navbar/adminAccountItems';
const Layout = ({props, children}) => {
    const [menuBar, setMenuBar] = useState(false);
    const MenuToggle = () => {
        setMenuBar(state => !state);
    }

    const {isSuperAdmin, isAccountStaff, isAdmin} = useHelper();
    const iSuperAdmin = isSuperAdmin();
    const isAdminStaff = isAdmin();
    const menuItemsArray = iSuperAdmin ? menuItems : isAdminStaff ? adminAccountItems : adminAccountItems

    console.log("menuItemsArray",menuItemsArray);
    
    return (
        <>
            <Helmet>
            <title>Stock & Order Management </title>
            <meta name="description" content="Stock & Order Management" />
            </Helmet>

            
           
            <div className="layout-panel-wrapper">

          

                <div className="lp-main-wrapper">
                        <Sidebar menuItem={menuItemsArray}>
                            <div className="lp-content-main-wrapper" style={{"width" : "100%"}}>
                                <div className="main-wrapper" style={{"width" : "100%"}}>
                                    {children}
                                    
                                </div>
                            </div>
                    </Sidebar>

                </div>
            </div>
           
           
           
              
           
        </>
    );
};

export default Layout;
