import { error, redirect } from '@sveltejs/kit';
import projects from "$lib/projects.json"

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  console.log("hei");
  const project = projects.find(p => p.id === params.id)
  console.log(project);
  if (project === undefined) {
    throw redirect(307, "/prosjekter")
  }

  return { project };
}