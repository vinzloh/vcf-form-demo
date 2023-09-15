import type { APIRoute } from 'astro';

import { jobFunctions } from './mocks';

export const GET: APIRoute = async () =>
  new Response(JSON.stringify(jobFunctions));
