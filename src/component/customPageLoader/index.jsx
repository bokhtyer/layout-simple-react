import React from 'react';

export default function CustomPageLoader(props) {

    return (
        props.pageLoader ? <>
                <div className={'s'}/>
                <div className={`rotate dotted ${props.className}`}/>
                {/*<img src={ctSmallLogo} alt="" className={`${Style.loadinglogoct} ${props.className}`}/>*/}
            </> : props.default ? <div className={"loading"}><span className="rotate dotted"/></div> : ""
    );
}
