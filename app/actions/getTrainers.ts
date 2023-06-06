import { PrismaClient } from "@prisma/client";
import Trainer from "@/app/types";

const prisma = new PrismaClient();

export default async function getTrainers(): Promise<Trainer[]> {
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
