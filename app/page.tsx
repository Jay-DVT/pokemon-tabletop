import getTrainers from "./actions/getTrainers";
import ClientOnly from "./components/ClientOnly";
import CreateTrainer from "./components/CreateTrainer";
import TrainerSelect from "./components/TrainerSelect";

const HomePage = async () => {
	const trainers = await getTrainers();

	if (!trainers) {
		return (
			<ClientOnly>
				<CreateTrainer />
			</ClientOnly>
		);
	}

	return (
		<div>
			<h1>Home Page</h1>
			<TrainerSelect trainers={trainers} />
		</div>
	);
};

export default HomePage;
