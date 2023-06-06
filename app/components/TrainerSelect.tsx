"use client";

import React from "react";
import ClientOnly from "./ClientOnly";
import CreateTrainer from "./CreateTrainer";
import Trainer from "@/app/types";

interface trainerSelectProps {
	trainers: Trainer[];
}

const TrainerSelect: React.FC<trainerSelectProps> = ({ trainers }) => {
	return (
		<div>
			<h2>Trainer Select</h2>
			<select>
				<option value=''>Select a trainer</option>
				{trainers.map((trainer) => (
					<option key={trainer.id} value={trainer.id}>
						{trainer.name}
					</option>
				))}
			</select>
			<ClientOnly>
				<CreateTrainer />
			</ClientOnly>
		</div>
	);
};

export default TrainerSelect;
