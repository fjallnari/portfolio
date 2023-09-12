<script lang="ts">
    import TAGS from "../data/tags";
    import type ProjectInterface from "../interfaces/ProjectInterface";
    import Icon from '@iconify/svelte';

    export let project: ProjectInterface;

</script>

<li class="grid grid-cols-4 grid-rows-3 gap-2 p-2 rounded shadow bg-oxford-800 cursor-pointer active:bg-oxford-700 transition-colors">
    <div class="row-span-4 flex justify-start items-center">
        <Icon class="w-16 h-16" icon="mdi:timeline" />
    </div>
    <div class="col-span-3 text-xl">
        {project.title}
    </div>
    <div class="col-span-3 row-span-2 col-start-2 row-start-2 text-oxford-300">
        {project.body}
    </div>
    <div class="col-span-3 col-start-2 row-start-4 flex flex-row flex-wrap gap-4">
        {#each project.tags as tag}
            <div class="flex flex-row justify-center items-center gap-1 rounded">
                <Icon class="w-4 h-4" icon={TAGS[tag].icon} />
                <div class="text-sm">{TAGS[tag].title}</div>
            </div>
        {/each}
    </div>

</li>