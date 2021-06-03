/**
 * @file entry - index
 * @author zhykirby
 * @date 2021-06-03
 */
import React, {memo, useEffect} from 'react';
import {observer} from 'mobx-react';
import {useHistory} from 'react-router';
import Auth from '../../store/index';
import {AUTH_TYPE} from '../../store/config';

const Entry = observer(() => {
    const {auth} = Auth;
    const history = useHistory();
    useEffect(() => {
        if (+auth === AUTH_TYPE.visitor) {
            history.push('/login');
        }
    }, [auth]);
    return (
        <div>
            返回登录页
            <button onClick={() => history.push('/login')}>返回</button>
        </div>
    );
});

export default memo(Entry);