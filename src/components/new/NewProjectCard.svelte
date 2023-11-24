<script lang="ts">
    export let name: string;
    export let type: string;
    export let colorBg: string;
    export let colorText: string;
    export let imageSrc: string;

</script>

<div class="h-auto max-w-full rounded-md shadow flex justify-center align-center relative font-eiko cursor-pointer" 
    style="background-image: url({imageSrc});"
>
    <div class="absolute left-0 top-0 rounded w-full h-full hover:opacity-0 transition-opacity ease-in duration-200" style="background-color: {colorBg};"></div>
    <div class="flex flex-col gap-2 text-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-4 rounded" style="color: {colorText}; background-color: {colorBg};">
        <h2 class="text-4xl lg:whitespace-nowrap">{name}</h2>
        <h2 class="text-2xl text-gray-400">{type}</h2>
    </div>
    <img class="h-auto max-w-full rounded-md"
        src="{imageSrc}" 
        alt=""
        style="visibility: hidden;"
    >
</div>