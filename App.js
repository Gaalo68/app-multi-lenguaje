import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import './styles.css';
import {FormattedMessage, FormattedDate} from 'react-intl';
import { IntlProvider, formattedMessage } from 'react-intl';
import MensajesIngles from './lang/en-US.json';
import MensajesEspañol from './lang/es-MX.json';
import { langContext } from './context/langContext';

const App = () => {
	return (
		<IntlProvider locale="es-MX" messages={MensajesEspañol}>
		<div>
			<Header />

			<div className="main">
				<h1 className="titulo">
					<FormattedMessage 
						id="app.welcome"
						defaultMessage="Welcome Gustavo"
						values={
							{
								name: 'Gustavo Angel'
							}
						}
					/>
				</h1>
				<p className="subtitulo">
					<FormattedDate 
						value={Date.now()}
						year="numeric"
						month="long"
						day="numeric"
						weekday="long"
					/>
				</p>
				
				<Grid />
			</div>
		</div>
		</IntlProvider>
	);
}
 
export default App;