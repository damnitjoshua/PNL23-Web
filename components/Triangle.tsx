import React from "react";

export default function Triangle() {
	const rows = [];
	let currentValue = 2;
	let rowsNum = 3;

	for (let i = 1; i <= rowsNum; i++) {
		rows.push(<div>{currentValue}</div>);
		currentValue *= 2;
	}
	return <div>{rows}</div>;
}
