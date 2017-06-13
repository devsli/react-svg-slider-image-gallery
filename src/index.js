import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import DemoApp from './DemoApp';

import './index.css';

const renderer = (App) => render(
	<AppContainer>
		<App />
	</AppContainer>,
	document.getElementById('root')
);

renderer(DemoApp);
if (module.hot) {
	module.hot.accept('./DemoApp', () => (
		renderer(require('./DemoApp').default)
	));
}
