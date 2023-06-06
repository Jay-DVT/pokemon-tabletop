import Trainer from "../types";

interface trainerNavProps {
	trainers: Trainer[];
}

const TrainerSelect: React.FC<trainerNavProps> = ({ trainers }) => {
	return (
		<>
			<select>
				<option value=''>Select a trainer</option>
				{trainers.map((trainer) => (
					<option key={trainer.id} value={trainer.id}>
						{trainer.name}
					</option>
				))}
			</select>
		</>
	);
};

export default TrainerSelect;
