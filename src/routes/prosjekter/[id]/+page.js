import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {

  var url = `/projects/${params.id}.json`;
  var response = await fetch(url);
  if (!response.ok) {
    throw redirect(307, "/")
  }
  const project = await response.json();

  if (project === undefined) {
    throw redirect(307, "/")
  }

  return { project };
}