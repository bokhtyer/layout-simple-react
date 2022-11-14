import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Layout2 = (props) => {
    return(
        <Fragment>
        <h2>Hello Header Layout2 Header</h2>
        <div className="defaultayout-body">
            <Outlet /> 
        </div>
        <h2>Hello Layout2 Footer</h2>
        </Fragment>
    )
}
export default Layout2;