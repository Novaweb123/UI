import React from 'react';
import Helmet from 'react-helmet'
import './landingLayout.scss'
const Layout = ({props, children}) => {
    return (
        <>
            <Helmet>
            <title>Stock & Order Managment</title>
            <meta name="description" content="REZKILAH" />
            </Helmet>
            <div className="landing-layout">
                <div className="landing-main">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
