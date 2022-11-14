import React, {Suspense, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {RouteRestriction} from "./route-restriction";
import {public_private_routes} from './layouts-routes';
import pages_path from "./path";
import Error404 from '../page/Error404';
import siteConfig from "../config/site-config";
import CustomPageLoader from "../component/customPageLoader";

const MainRoutes = () => {

    // Favicon icon set...
    useEffect(() => {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = siteConfig.company_favicon;
    }, []);

    return  (
        <>
            <Routes>
                <Route exact path='/' element={<RouteRestriction type="both"/>}>
                    {public_private_routes.map(({path, Component, Layout}, i) => (
                        <Route element={Layout} key={i}>
                            <Route exact path={path} element={<Suspense fallback={<CustomPageLoader default/>}>{Component}</Suspense>}/>
                        </Route>
                    ))}
                </Route>
                
                <Route path={`${process.env.PUBLIC_URL}${pages_path.error404}`} element={<Error404 pageTitle="Error"/>}/>
                <Route path="*" element={<Error404 pageTitle="Error404"/>}/> {/* wrong route redirects to 404 page */}
            </Routes>
        </>
    );


};

export default MainRoutes;
