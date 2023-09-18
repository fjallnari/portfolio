<script lang="ts">
    import type ProjectInterface from "../interfaces/ProjectInterface";
    import TimelineDelim from "./TimelineDelim.svelte";
    import ProjectTags from "./ProjectTags.svelte";

    export let project: ProjectInterface;

    // let screenSize: number = 0;

</script>

<!-- <svelte:window bind:innerWidth={screenSize} /> -->

<a href="/projects/{project.id}" class="grid grid-cols-6 grid-rows-3 gap-2 p-2 cursor-pointer rounded-sm active:bg-oxford-750 hover:bg-oxford-850 hover:shadow transition-colors">
    <div class="row-span-4 col-span-1 flex flex-row justify-around items-center">
        <div class="flex flex-col justify-center items-center text-xl text-timberwolf w-24">
            {#if project.to && project.from}
                <p>{project.to ?? '-'}</p>
                <div class="border-gray-500 border-solid border-b-2 w-16 h-1 m-1" />
                <p>{project.from ?? '-'}</p>
            {:else}
                <p>{project.from ?? project.to ?? '-'}</p>
                
            {/if}
        </div>
        <!-- {#if screenSize > 500}
            <TimelineDelim />
        {/if} -->
    </div>
    <div class="col-span-5 text-xl">
        {project.title}
    </div>
    <div class="col-span-5 row-span-2 col-start-2 row-start-2 text-oxford-300">
        {project.description}
    </div>
    <div class="col-span-5 col-start-2 row-start-4 flex flex-row flex-wrap gap-4">
        <ProjectTags tags={project.tags} wantBg />
    </div>
</a>