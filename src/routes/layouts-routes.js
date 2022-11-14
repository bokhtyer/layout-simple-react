import React from 'react';
import path from "./path";
import DefaultLayout from "../layout/DefaultLayout";
import Layout2 from '../layout/Layout2';
import siteConfig from "../config/site-config";

let DelayTime = siteConfig.lazy_suspense_delay;
let SiteName = `| ${siteConfig.company_name}`;


const Home = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "Home" */ "../page/Home"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});

const About = React.lazy(() => {
    return Promise.all([import(/*webpackChunkName: "About Us" */ "../page/About"), new Promise(resolve => setTimeout(resolve, DelayTime))]).then(([moduleExports]) => moduleExports);
});


// ************ Example for public private route *********** //
export const public_private_routes = [
    {path: `${process.env.PUBLIC_URL}${path.home}`, Component: <Home pageTitle={`Home ${SiteName}`}/>, Layout: <DefaultLayout/> },
    {path: `${process.env.PUBLIC_URL}${path.about}`, Component: <About pageTitle={`About ${SiteName}`}/>, Layout: <Layout2/>},
]
