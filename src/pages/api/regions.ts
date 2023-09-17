import type { APIRoute } from 'astro';

import { regions } from './mocks';

export const GET: APIRoute = async () => new Response(JSON.stringify(regions));
