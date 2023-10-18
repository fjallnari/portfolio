# Portfolio
Simple portfolio page in Astro + Svelte + TailwindCSS. Uses bun as both the package manager and runtime.

## Dev Environment
You can either manually run it (need to have [bun](https://bun.sh/) installed) or spin up a Docker container using the provided Dockerfile:
1. *Manual* - `bun install` and `bun run dev`
2. *Docker* - First `docker build -t portfolio .`, then `docker run -t -i -p 5000:5000 portfolio`. The app will be avalaible on `http://localhost:5000/`.
