"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
async function hashPassword(password) {
    return bcryptjs_1.default.hash(password, 10);
}
async function main() {
    console.log('🌱 Seeding database...');
    await prisma.user.deleteMany();
    console.log('  ↳ Cleared existing users');
    const hashedPassword = await hashPassword('password123');
    const organizer = await prisma.user.create({
        data: {
            email: 'organisateur@example.com',
            password: hashedPassword,
            name: 'Jean Dupont',
            role: 'ORGANIZER',
        },
    });
    console.log(`  ↳ Created organizer: ${organizer.email}`);
    const user = await prisma.user.create({
        data: {
            email: 'utilisateur@example.com',
            password: hashedPassword,
            name: 'Marie Martin',
            role: 'USER',
        },
    });
    console.log(`  ↳ Created user: ${user.email}`);
    const admin = await prisma.user.create({
        data: {
            email: 'admin@example.com',
            password: hashedPassword,
            name: 'Admin EventHub',
            role: 'ADMIN',
        },
    });
    console.log(`  ↳ Created admin: ${admin.email}`);
    console.log('');
    console.log('✅ Seeding completed!');
    console.log('');
    console.log('📋 Test accounts:');
    console.log('   Email: organisateur@example.com | Password: password123 | Role: ORGANIZER');
    console.log('   Email: utilisateur@example.com  | Password: password123 | Role: USER');
    console.log('   Email: admin@example.com        | Password: password123 | Role: ADMIN');
}
main()
    .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map