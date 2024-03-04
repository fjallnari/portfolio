<script lang="ts">
    import { sineOut } from "svelte/easing";
    import { fade } from "svelte/transition";

    export let name: string;
    export let type: string;
    export let colorBg: string;
    export let colorText: string;
    export let imageSrc: string;

    let hover = false;

</script>


<button class="h-auto max-w-full rounded-md shadow flex justify-center align-center relative font-eiko cursor-pointer bg-cover" 
    style="background-image: url({imageSrc});"
    on:mouseenter={() => hover = true}
    on:mouseleave={() => hover = false}
    on:click={() => window.location.href = `/projects/${name}`}
    name={name}
>
    <div class="absolute left-0 top-0 rounded w-full h-full opacity-0 transition-opacity ease-in duration-200" style="background-color: {colorBg};"></div>
    {#if hover}
        <div class="w-full h-full flex flex-col gap-2 self-center justify-center text-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-4 rounded" 
            style="color: {colorText}; background-color: {colorBg};"
            transition:fade={{ delay: 0, duration: 150, easing: sineOut }}
        >
            <h2 class="text-4xl lg:whitespace-nowrap">{name.replaceAll('-', ' ')}</h2>
            <h2 class="text-2xl text-gray-400">{type}</h2>
        </div>
    {/if}
    <img class="h-auto max-w-full rounded-md"
        src="{imageSrc}" 
        alt=""
        style="visibility: hidden;"
    >
</button>