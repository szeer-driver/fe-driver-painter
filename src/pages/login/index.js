/**
 * @file login
 * @author zhykirby
 * @date 2021-06-03
 */
import React from 'react';
import {observer} from 'mobx-react';
import Auth from '../../store';
import {AUTH_TYPE} from '../../store/config';
import {useHistory} from 'react-router';

const Login = observer(() => {
    const history = useHistory();

    const signIn = () => {
        history.push('/entry');
    };

    return (
        <div>
            <button onClick={() => Auth.changeAuthState(AUTH_TYPE.visitor)}>切换到游客</button>
            <button onClick={() => {
                Auth.changeAuthState(AUTH_TYPE.user);
                signIn();
            }}>切换到用户</button>
            <button onClick={() => Auth.changeAuthState(AUTH_TYPE.opreator)}>切换到op</button>
            <button onClick={() => Auth.changeAuthState(AUTH_TYPE.admin)}>切换到管理员</button>
            {Auth.auth}
        </div>
    );
});

export default Login;