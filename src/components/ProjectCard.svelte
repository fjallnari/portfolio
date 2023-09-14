<script lang="ts">
    import TAGS from "../data/tags";
    import type ProjectInterface from "../interfaces/ProjectInterface";
    import Icon from '@iconify/svelte';
    import TimelineDelim from "./TimelineDelim.svelte";
    import ProjectTags from "./ProjectTags.svelte";

    export let project: ProjectInterface;

</script>

<a href="/projects/{project.id}" class="grid grid-cols-5 grid-rows-3 gap-2 p-2 cursor-pointer rounded-sm active:bg-oxford-700 hover:bg-oxford-800 shadow transition-colors">
    <div class="row-span-4 col-span-1 flex flex-row justify-around items-center">
        <div class="flex flex-col justify-center items-center text-xl text-timberwolf">
            <p>{project.to ?? '-'}</p>
            <div class="border-gray-500 border-solid border-b-2 w-16 h-1 m-1" />
            <p>{project.from ?? '-'}</p>
        </div>
        <TimelineDelim />
    </div>
    <div class="col-span-5 text-xl">
        {project.title}
    </div>
    <div class="col-span-5 row-span-2 col-start-2 row-start-2 text-oxford-300">
        {project.description}
    </div>
    <div class="col-span-5 col-start-2 row-start-4 flex flex-row flex-wrap gap-4">
        <ProjectTags tags={project.tags} />
    </div>
</a>