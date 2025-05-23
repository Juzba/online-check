import axios from "axios";
import { useCallback, useState } from "react";

const UseGetAxios = <T>(url: string) => {
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const fetchData = useCallback(
		async (): Promise<T | null> => {
			setLoading(true);
			setError(null);

			try {
				const response = await axios.get<T>(url);
				return response.data;
			} catch (err) {
				setError(err instanceof Error ? "Chyba při odesílání dat UseAxios: " + err.message : "Neznámá chyba při odesílání dat UseAxios");
				return null;
			} finally {
				setLoading(false);
			}
		},
		[url]
	);

	return { error, loading, fetchData };
};

export default UseGetAxios;

// -------------------------------------------------------
// Použití v Komponentě !!!
// -------------------------------------------------------

// interface SudokuResponse {
// 	returnedText: string;
// 	success: boolean;
// 	returnedArray: number[][][];
// }

// const sendArray = async () => {
// 	const vysledek = await fetchData(sudokuArray);
// 	const typedResult = vysledek as SudokuResponse;

// 	if (typedResult.success) {
// 		console.log(typedResult.returnedArray);
// 		setSudokuArray(typedResult.returnedArray);
// 		setReturnedText(typedResult.returnedText)
// 	}
// };
