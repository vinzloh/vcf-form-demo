import type { APIRoute } from 'astro';

const authKey = 'authenticated';

export const GET: APIRoute = async ({ cookies }) => {
  const isAuthenticated = cookies.get(authKey)?.boolean();
  return new Response(JSON.stringify({ status: isAuthenticated }));
};

export const POST: APIRoute = async ({ cookies, request }) => {
  const requestJson = await request.json();
  cookies.set(authKey, requestJson.isAuthenticated, {
    path: '/',
  });

  return new Response(JSON.stringify({ status: requestJson.isAuthenticated }));
};
