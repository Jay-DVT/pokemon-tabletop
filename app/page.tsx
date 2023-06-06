import { useRouter } from "next/router";
import getTrainers from "./actions/getTrainers";
import TrainerNav from "./components/TrainerNav";

const HomePage = async () => {
	const trainers = await getTrainers();

	return (
		<div>
			<h1>Home Page</h1>
			<TrainerNav trainers={trainers} />
		</div>
	);
};

export default HomePage;
