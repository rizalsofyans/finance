import { z } from 'zod';
import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { zValidator } from '@hono/zod-validator';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app
	.get(
		'/hello/:test',
		zValidator('param', z.object({ test: z.number() })),
		(c) => {
			const { test } = c.req.valid('param');
			return c.json({
				message: `Hello ${test}!`,
				test: test,
			});
		}
	)
	.get('/hello', (c) => {
		return c.json({
			message: `Hello World!`,
		});
	})
	.post(
		'/',
		zValidator(
			'json',
			z.object({
				name: z.string(),
				userId: z.string(),
			})
		),
		(c) => {
			const { name, userId } = c.req.valid('json');
			return c.json({
				message: `Hello ${name}!`,
				userId: userId,
			});
		}
	);

export const GET = handle(app);
export const POST = handle(app);
