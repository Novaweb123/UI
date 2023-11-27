import React from "react";
import './navbar.scss'
import {menuItems} from '../navbar/menuItems';
import MenuItems from '../menuItems';
import {adminAccountItems} from "./adminAccountItems";
import useHelper from "../../hooks/helpers.hook";


const Navbar = props => {

    const {isSuperAdmin, isAccountStaff, isAdmin} = useHelper();
    const iSuperAdmin = isSuperAdmin();
    const iAccountStaff = isAccountStaff();
    const isAdminStaff = isAdmin();

    const menuItemsArray = iSuperAdmin ? menuItems : isAdminStaff ? menuItems : adminAccountItems

    return (

        <>

            <nav className="navbar">
                <ul className="navbar-nav">

                    {
                        menuItemsArray.map((menu, index) => {
                            const depthLevel = 0;
                            return (
                                <MenuItems
                                    items={menu}
                                    key={index}
                                    depthLevel={depthLevel}
                                />
                            );
                        })
                    }

                </ul>
            </nav>
        </>
    )
}

export default Navbar;
