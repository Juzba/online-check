import UseAxios from "./hooks/UseAxios";
import "./App.scss";
import { useState } from "react";

const url = "https://localhost:7143/api/Online";

const App = () => {
	const { error, fetchData } = UseAxios(url);
	const [text, setText] = useState<string | null>();

	const checkServer = async () => {
		const vysledek = await fetchData();
		if (vysledek) setText(vysledek as string);
	};

	return (
		<div className="app">
			<h1>Online Check</h1>
			<button onClick={() => checkServer()}>click on me</button>
			{text ? <p>{text}</p> : ""}
		</div>
	);
};

export default App;
