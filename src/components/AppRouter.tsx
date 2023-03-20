import React, { useContext } from "react";
import { Route, Routes, redirect, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";
import {useAuthState} from 'react-firebase-hooks/auth'
import Login from "./Login";
import { getAuth} from "firebase/auth"


function AppRouter() {

    // const navigate = useNavigate();
    const auth = getAuth();

    const [user]:any = useAuthState(auth)

    user ? redirect(CHAT_ROUTE) : redirect(LOGIN_ROUTE)

    return user ? 
    (
        <Routes>
            {privateRoutes.map(({path, Component}) => 
                <Route path={path} element={<Component/>} key={path}/>
            )}
            
            {/* <Navigate to={CHAT_ROUTE}/> */}
        </Routes>
    ) : (
        <Routes>
        {publicRoutes.map(({path, Component}) => 
            <Route path={path} element={<Component/>} key={path}/>
        )}

        {/* <Navigate to={LOGIN_ROUTE}/> */}
        </Routes>
    )

}
export default AppRouter