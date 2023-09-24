import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts")

  if (!response.ok) {
    throw error(response.status, "Failed to fetch the data")
  }


  const guides = await response.json()
  return { guides };
}