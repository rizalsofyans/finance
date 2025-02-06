import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as aschema from './schema';

export const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql, schema: aschema });

// const accounts = db.select().from(aschema.accounts);
