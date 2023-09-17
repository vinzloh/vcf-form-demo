import type { APIRoute } from 'astro';

import { industries } from './mocks';

export const GET: APIRoute = async () =>
  new Response(JSON.stringify(industries));
