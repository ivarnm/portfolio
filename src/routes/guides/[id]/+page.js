import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

  if (!response.ok) {
    if (response.status == 404) {
      throw redirect(307, "/guides")
    }
    throw error(response.status, "Failed to fetch the data")
  }


  const guide = await response.json()
  return { guide };
}