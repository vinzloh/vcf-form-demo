import type { APIRoute } from 'astro';

import { qualifications } from './mocks';

export const GET: APIRoute = async () =>
  new Response(JSON.stringify(qualifications));
