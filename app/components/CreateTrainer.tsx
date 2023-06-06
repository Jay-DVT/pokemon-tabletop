"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateTrainer = () => {
	const [loading, setLoading] = useState(false);
	const [newTrainerName, setNewTrainerName] = useState("");
	const router = useRouter();

	const createTrainer = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			setLoading(true);
			const body = { name: newTrainerName };
			await fetch("/api/trainer", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			setLoading(false);
			setNewTrainerName("");
			router.push("/");
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
