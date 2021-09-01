import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

export const privateRoutes = [
    {path: '/chat', component: Chat, exact: true, name: 'Домашнаяя страница'},
] 

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    {path: '/registration', component: Registration, exact: true}
] 