import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState, useEffect} from "react";

function HttpAcceptLanguage() {

	const API_URL = 'api.php';

	const [language, setLanguage] = useState('not fetched yet...');

	async function getLanguage() {
		await fetch(API_URL)
			.then(response => response.json())
			.then(response => {
					setLanguage(response.HTTP_ACCEPT_LANGUAGE);
				}
			).catch(err => console.error(err));
	}

	useEffect(
		() => {
			getLanguage();
		},
		[]
	);

	return <>{language}</>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<h1>
			HTTP_ACCEPT_LANGUAGE: <HttpAcceptLanguage/>
		</h1>
	</React.StrictMode>
);