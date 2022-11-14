import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = (props) => {
    return(
        <Fragment>
        <h2>Hello Header Default Header</h2>
        <div className="defaultayout-body">
            <Outlet /> 
        </div>
        <h2>Hello Default Footer</h2>
        </Fragment>
    )
}
export default DefaultLayout;