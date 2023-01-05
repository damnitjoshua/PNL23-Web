"use client";
import React, { useState } from "react";

export default function Button() {
	const [count, setCount] = useState(0);

	return <button onClick={() => setCount(count + 1)}>Button {count}</button>;
}
