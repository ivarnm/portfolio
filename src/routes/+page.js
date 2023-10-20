import { error } from '@sveltejs/kit';
import projects from "$lib/projects.json"

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  
  return { projects };
}