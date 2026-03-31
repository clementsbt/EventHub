import app from './app';
import { config } from './config';
import { prisma } from './lib/prisma';

async function main() {
  try {
    await prisma.$connect();
    console.log('Connecte a la base de donnees SQLite');

    app.listen(config.port, () => {
      console.log(`Serveur demarre sur http://localhost:${config.port}`);
      console.log(`Environnement: ${config.nodeEnv}`);
    });
  } catch (error) {
    console.error('Erreur au demarrage:', error);
    process.exit(1);
  }
}

main();

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
