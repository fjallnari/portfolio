<script lang="ts">
    import { currentNav } from "../../stores";
    import PROJECTS from "../data/projects";
    import ProjectCard from "./ProjectCard.svelte";


</script>

<ul class="flex flex-col justify-center align-center w-full gap-4 pb-8">
    {#if $currentNav === "projects"}
        {#each PROJECTS as project}
            <ProjectCard {project} />
        {/each}
    {/if}
    {#if $currentNav === "blog"}
        <p class="lg:ml-8">Moonlight drowns out all but the brightest stars.</p>
    {/if}
</ul>