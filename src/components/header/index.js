import React from 'react';
import Logo from '../svg/Logo';
import './header.scss';
import DisplayProfile from '../displayProfile';
import {useSelector} from "react-redux";
import MenuIcon from '../svg/menuIcon';
import Button from '../button'
import { useMediaQuery } from 'react-responsive';

const Header = props => {
    const isMobile = useMediaQuery({query: '(max-width: 767px)'});
    const userInfo = useSelector(state => state?.app?.userInfo)
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="header-main">
                        <div className="header-left">
                            <div className="logo">
                                <Logo />
                            </div>
                        </div>
                        <div className="header-right">
                            {isMobile && (
                                <Button
                                    text={<MenuIcon menuClose={props.menuBar}/>}
                                    linkPrimary
                                    className="menu-icon"
                                    onClick={props.menuToggle}
                                />
                            )}
                            <div className="h-dp">
                                <DisplayProfile userInfo={userInfo}/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
