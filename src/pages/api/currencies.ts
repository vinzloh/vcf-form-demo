import type { APIRoute } from 'astro';

import { currencies } from './mocks';

export const GET: APIRoute = async () =>
  new Response(JSON.stringify(currencies));
