import React, { useContext } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";
import {useAuthState} from 'react-firebase-hooks/auth'
import Login from "./Login";
import { getAuth} from "firebase/auth"


function AppRouter() {
    const auth = getAuth();

    const [user]:any = useAuthState(auth)

    return user ? 
    (
        <Routes>
            {privateRoutes.map(({path, Component}) => 
                <Route path={path} element={<Component/>} key={path}/>
            )}
            
        </Routes>
    ) : (
        <Routes>
        {publicRoutes.map(({path, Component}) => 
            <Route path={path} element={<Component/>} key={path}/>
        )}
        </Routes>
    )
    // return (
    //     <Routes>
    //        {user ?
    //          privateRoutes.map(({path, Component}) => 
    //             <Route path={path} element={<Component/>} key={path}/>
                
    //         ) :         
    //         publicRoutes.map(({path, Component}) => 
    //         <Route path={path} element={<Component/>} key={path}/>
    //         )
    //         }
    //     </Routes>
    // )

}
export default AppRouter