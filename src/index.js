import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducer';

import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Main = () => {
	return (
		<MuiThemeProvider>
	    <App />
	  </MuiThemeProvider>
	)
}

ReactDOM.render(
	<Provider store={store}>
		<Main />
	</Provider>, 
	document.getElementById('root'));