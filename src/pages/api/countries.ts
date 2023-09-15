import type { APIRoute } from 'astro';

import { countries } from './mocks';

export const GET: APIRoute = async () =>
  new Response(JSON.stringify(countries));
