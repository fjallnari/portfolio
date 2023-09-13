<script lang="ts">
    import TAGS from "../data/tags";
    import type ProjectInterface from "../interfaces/ProjectInterface";
    import Icon from '@iconify/svelte';

    export let project: ProjectInterface;

</script>

<li class="grid grid-cols-5 grid-rows-3 gap-2 p-2 cursor-pointer rounded active:bg-oxford-700 transition-colors">
    <div class="row-span-4 col-span-1 flex flex-row justify-around items-center">
        <div class="flex flex-col justify-center items-center text-xl text-timberwolf">
            <p>{project.to ?? '-'}</p>
            <div class="border-gray-500 border-solid border-b-2 w-16 h-1 m-1" />
            <p>{project.from ?? '-'}</p>
        </div>

        <svg class="fill-timberwolf h-28 w-2" viewBox="0 0 23 284" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M22.34,0.894l0,111.598c0,0.493 -0.4,0.894 -0.893,0.894l-20.553,-0c-0.494,-0 -0.894,-0.401 -0.894,-0.894l0,-111.598c0,-0.494 0.4,-0.894 0.894,-0.894l20.553,-0c0.493,-0 0.893,0.4 0.893,0.894Zm0,170.078l0,111.599c0,0.493 -0.4,0.894 -0.893,0.894l-20.553,-0c-0.494,-0 -0.894,-0.401 -0.894,-0.894l0,-111.599c0,-0.493 0.4,-0.893 0.894,-0.893l20.553,-0c0.493,-0 0.893,0.4 0.893,0.893Zm-11.17,-40.41c6.165,0 11.17,5.005 11.17,11.17c0,6.165 -5.005,11.17 -11.17,11.17c-6.165,0 -11.17,-5.005 -11.17,-11.17c0,-6.165 5.005,-11.17 11.17,-11.17Z"/></svg>
    </div>
    <div class="col-span-5 text-xl">
        {project.title}
    </div>
    <div class="col-span-5 row-span-2 col-start-2 row-start-2 text-oxford-300">
        {project.body}
    </div>
    <div class="col-span-5 col-start-2 row-start-4 flex flex-row flex-wrap gap-4">
        {#each project.tags as tag}
            <div class="flex flex-row justify-center items-center gap-1 rounded">
                <Icon class="w-4 h-4" icon={TAGS[tag].icon} />
                <div class="text-sm">{TAGS[tag].title}</div>
            </div>
        {/each}
    </div>

</li>