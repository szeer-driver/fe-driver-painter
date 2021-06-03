/**
 * @file NotFound
 * @author zhykirby
 * @date 2021-06-03
 */
import React from 'react';
import {useHistory} from 'react-router';

const NotFound = () => {
    const history = useHistory();
    const redirect = () => {
        history.push('/login');
    };

    return (
        <div>
            页面不存在
            <button onClick={redirect}>跳转登录页</button>
        </div>
    );
};

export default NotFound;