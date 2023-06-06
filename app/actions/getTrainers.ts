import { PrismaClient } from "@prisma/client";
import safeTrainer from "@/app/types";

const prisma = new PrismaClient();

export default async function getTrainers() {
	try {
		const trainers = await prisma.trainer.findMany();
		const safeTrainers = trainers
			.map(({ id, name }) => ({
				id,
				name,
			}))
			.filter(({ name }) => name !== null);

		return safeTrainers;
	} catch (err) {
		console.error(err);
		return [];
	}
}
