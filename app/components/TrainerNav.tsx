import React from "react";
import ClientOnly from "./ClientOnly";
import Trainer from "@/app/types";
import CreateTrainer from "./CreateTrainer";
import TrainerSelect from "./TrainerSelect";
import getTrainers from "../actions/getTrainers";

interface trainerNavProps {
	trainers: Trainer[];
}

const TrainerNav: React.FC<trainerNavProps> = ({ trainers }) => {
	return (
		<div>
			<h2>Trainer Select</h2>
			<ClientOnly>
				{!trainers && (
					<>
						<div>
							<p>Loading...</p>
						</div>
						<CreateTrainer />
					</>
				)}
				<TrainerSelect trainers={trainers} />
				<CreateTrainer />
			</ClientOnly>
		</div>
	);
};

export default TrainerNav;
