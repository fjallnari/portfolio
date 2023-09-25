    <script lang="ts">
    import { currentNav } from "../../stores";
    import PROJECTS from "../data/projects";
    import ProjectCard from "./ProjectCard.svelte";
    import About from "./About.svelte";
    import { quotes } from "../data/quotes";

    </script>

    <ul class="flex flex-col justify-center align-center w-full gap-4 pb-8">
        {#if $currentNav === "projects"}
            {#each PROJECTS as project}
                <ProjectCard {project} />
            {/each}
        {:else if $currentNav === "blog"}
            <p class="lg:ml-8">{quotes[0]}</p>
        {:else if $currentNav === "about"}
            <About />
        {/if}
    </ul>