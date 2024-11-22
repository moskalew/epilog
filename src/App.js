import { useState, useCallback } from "react";
import styles from "./app.module.css";

export const App = () => {
	const [num, setNum] = useState(0);
	const [degree, setDegree] = useState(0);
	const [result, setResult] = useState(0);

	const onNumChange = useCallback(
		({ target }) => {
			setNum(Number(target.value));
			setResult(Math.pow(Number(target.value), degree));
		},
		[degree],
	);

	const onDegreeChange = useCallback(
		({ target }) => {
			setDegree(Number(target.value));
			setResult(Math.pow(num, Number(target.value)));
		},
		[num],
	);

	return (
		<div className={styles.App}>
			<div>
				{num} в степени {degree} = {result}
			</div>
			<label>
				<span>Число: </span>
				<input type="number" value={num} onChange={onNumChange}></input>
			</label>
			<label>
				<span>Степень: </span>
				<input
					type="number"
					value={degree}
					onChange={onDegreeChange}
				></input>
			</label>
		</div>
	);
};
