/**
 * @file   App
 * @author zhykirby
 * @date   2021-06-03
 */
import React, {Suspense} from 'react';
import {autorun} from 'mobx';
import Loading from './common/Loading';
import Router from './routes';
import Auth from './store';

const App = () => {
    autorun(() => {
        const localState = sessionStorage.getItem('auth');
        localState && Auth.changeAuthState(localState);
    });
    return (
        <Suspense fallback={(<Loading />)}>
            <Router />
        </Suspense>
    );
};

export default App;