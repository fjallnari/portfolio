<script lang="ts">
    import { currentNav } from "../../stores";
    import PROJECTS from "../data/projects";
    import ProjectCard from "./ProjectCard.svelte";


</script>

<ul class="flex flex-col justify-center align-center w-full gap-4">
    {#if $currentNav === "projects"}
        {#each PROJECTS as project}
            <ProjectCard {project} />
        {/each}
    {/if}
</ul>