import Chat from "./Chat";
import Login from "./Login";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";

interface routeOne {
    path: string,
    Component: any
}

export const publicRoutes:Array<routeOne> = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes:Array<routeOne> = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]