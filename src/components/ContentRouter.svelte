<script lang="ts">
    import PROJECTS from "../data/projects";
    import ProjectCard from "./ProjectCard.svelte";

</script>

<ul class="flex flex-col justify-center align-center w-full gap-4 pb-8">
    {#each PROJECTS as project}
        <ProjectCard {project} />
    {/each}
</ul>