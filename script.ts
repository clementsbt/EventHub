import { prisma } from "./src/lib/prisma";

async function main() {
    // Create a new user
    const user = await prisma.user.create({
        data: {
            name: "Alice",
            email: "alice@prisma.io",
            password: "password",
            role: "USER",
        },
    });
    console.log("Created user:", user);

    // Create a new event
    const event = await prisma.event.create({
        data: {
            title: "eventTitle",
            date: new Date("2026-08-28T18:00:00Z"),
            place: "Isitech, Lyon",
            price: 49.99,
            totalPlaces: 5000,
            category: "FESTIVAL",
            image: "https://link/image.jpg",
        },
    });
    console.log("Created event:", event);

    // Fetch all users
    const allUsers = await prisma.user.findMany();
    console.log("All users:", JSON.stringify(allUsers, null, 2));

    // Fetch all events
    const allEvents = await prisma.event.findMany();
    console.log("All events:", JSON.stringify(allEvents, null, 2));
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });