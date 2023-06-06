import getTrainers from "./actions/getTrainers";
import TrainerSelect from "./components/TrainerSelect";

const HomePage = async () => {
	const trainers = await getTrainers();
	console.log(trainers);

	return (
		<div>
			<h1>Home Page</h1>
			<TrainerSelect trainers={trainers} />
		</div>
	);
};

export default HomePage;
