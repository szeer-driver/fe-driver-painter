/**
 * @file   入口
 * @author zhykirby
 * @date   2021-06-03
 */
/* eslint-disable import/first */
// Always keep './index.less' in the first place, the order of the extracted
// text is based on the order of import calls inside js files
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const render = () => {
    ReactDom.render(
        <BrowserRouter>
			<App />
		</BrowserRouter>,
        document.getElementById('root')
    );
};

render();

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
		render();
	});
}


// 当前暂时不用做性能监控 后续有必要的情况下会考虑做性能监控和数据报表
// reportWebVitals();
