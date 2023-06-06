import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
	const body = await request.json();
	const { name } = body;
	if (!name) return NextResponse.error();

	try {
		const trainer = await prisma.trainer.create({
			data: {
				name,
			},
		});
		return NextResponse.json({ trainer });
	} catch (error) {
		console.log(error);
		return NextResponse.error();
	}
}
