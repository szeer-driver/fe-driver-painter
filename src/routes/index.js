/**
 * @file Router
 * @author zhykirby
 * @date 2021-06-03
 */
import React, {memo, lazy} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

// lazy import
const Login = lazy(() => import('../pages/login'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Entry = lazy(() => import('../pages/entry'));

const Router = () => (
    <Switch>
        <Redirect exact from="/" to="/entry" />
        <Route path="/login" component={Login} />
        <Route path="/entry" component={Entry} />
        <Route path="*" component={NotFound} />
    </Switch>
);

export default memo(Router);
