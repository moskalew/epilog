import { useState } from "react";
import styles from "./app.module.css";

export const Field = ({ name, label, value, onChange }) => {
	console.log(name);
	return (
		<label>
			<span>{label}: </span>
			<input
				type="number"
				name={name}
				value={value}
				onChange={onChange}
			/>
		</label>
	);
};

export const App = () => {
	console.log("--------------App---------------");
	const [num, setNum] = useState(0);
	const [degree, setDegree] = useState(0);
	const [result, setResult] = useState(0);

	const onNumChange = ({ target }) => {
		setNum(Number(target.value));
		setResult(Math.pow(Number(target.value), degree));
	};

	const onDegreeChange = ({ target }) => {
		setDegree(Number(target.value));
		setResult(Math.pow(num, Number(target.value)));
	};

	return (
		<div className={styles.App}>
			<div>
				{num} в степени {degree} = {result}
			</div>
			<Field
				name="num"
				label="Число"
				value={num}
				onChange={onNumChange}
			/>
			<Field
				name="degree"
				label="Степень"
				value={degree}
				onChange={onDegreeChange}
			/>
		</div>
	);
};
