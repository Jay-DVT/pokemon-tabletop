"use client";

import { useState } from "react";
import axios from "axios";

const CreateTrainer: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [newTrainerName, setNewTrainerName] = useState("");

	const createTrainer = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			const body = { name: newTrainerName };
			await fetch("/api/trainer", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			<input
				type='text'
				value={newTrainerName}
				onChange={(e) => setNewTrainerName(e.target.value)}
				placeholder='Enter trainer name'
			/>
			<button onClick={createTrainer} disabled={loading}>
				{loading ? "Creating..." : "Create Trainer"}
			</button>
		</div>
	);
};

export default CreateTrainer;
