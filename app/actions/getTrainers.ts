import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getTrainers() {
	try {
		const trainers = await prisma.trainer.findMany();
		const safeTrainers = trainers.map((trainer) => ({
			...trainer,
		}));
		return safeTrainers;
	} catch (err) {
		console.error(err);
		return [];
	}
}
