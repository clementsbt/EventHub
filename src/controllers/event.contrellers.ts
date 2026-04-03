import type { Request, Response } from "express";
import prisma from  "../lib/prisma.js"


export async function getEvents(req: Request, res: Response){
    const allEvents = await prisma.event.findMany();
    res.status(200).json(allEvents);
}

export async function getEventById(req: Request, res: Response) {
    const id = req.params.id;

    if (!id || typeof id !== "string") {
        return res.status(400).json({ error: 'Id non valide' });
    }

    try {
        const event = await prisma.event.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        if (!event) {
            return res.status(404).json({ error: 'Event non trouvé' });
        }

        res.status(200).json(event);
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
}

export async function createEvent(req: Request, res: Response) {
    const event: Event  = {
        title: "eventTitle",
        date: new Date("2026-08-28T18:00:00Z"),
        place: "Isitech, Lyon",
        price: 49.99,
        totalPlaces: 5000,
        category: "FESTIVAL",
        image: "https://link/image.jpg",
    }
}

export async function updateEvent(req: Request, res: Response) {

}

export async function deleteEvent(req: Request, res: Response) {

}