import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { migrate } from 'drizzle-orm/neon-http/migrator';
import { config } from 'dotenv';

config({ path: '.env.local' });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const main = async () => {
	try {
		await migrate(db, { migrationsFolder: 'drizzle' });
		console.log('Migrations completed successfully');
	} catch (error) {
		console.error('Error during migrations:', error);
		process.exit(1);
	}
};

main();
