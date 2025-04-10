import UseGetAxios from "./hooks/UseGetAxios";
import "./App.scss";
import { useState } from "react";

// const url = "https://localhost:7143/api/Online";
const url = "portfolio-backend-juzba-h7dtdva0fvadach3.westeurope-01.azurewebsites.net/api/online";

const App = () => {
	const { error, fetchData } = UseGetAxios(url);
	const [text, setText] = useState<string | null>();

	const checkServer = async () => {
		const vysledek = await fetchData();
    console.log(vysledek);
    console.log(error);
    
    
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
