import React from 'react';
import {Outlet} from 'react-router-dom' ;

const ReactHooksComp = () => {
    return (
        <div>
            <h1>This is React Hooks Component</h1>

            <Outlet/>
        </div>
    )
}

export default ReactHooksComp
