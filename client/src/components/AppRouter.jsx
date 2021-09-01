import React, { useContext, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import { Context, Soc } from '..'
import { privateRoutes, publicRoutes } from '../router'

const AppRouter = () => {
    const {store} = useContext(Context)
    useEffect(()=>{
        if(localStorage.getItem('token')){
            store.checkAuth()
        }
    }, [])


    return (
        store.isAuth
            ?<Switch>
                {privateRoutes.map((route) =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/chat' />
            </Switch>
            :<Switch>
                {publicRoutes.map((route) =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/login' />
            </Switch>
        
    )
}

export default observer(AppRouter)
